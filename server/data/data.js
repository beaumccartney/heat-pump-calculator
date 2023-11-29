const FormulaParser = require('hot-formula-parser').Parser;
const parser = new FormulaParser();

const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();


function getCellResult(worksheet, cellLabel) {
    if (worksheet.getCell(cellLabel).formula) {
      return parser.parse(worksheet.getCell(cellLabel).formula).result;
    } else {
      return worksheet.getCell(cellCoord.label).value;
    }
  }

const manipulateAndPullNewCell = async (val) => {
    workbook.calcProperties.fullCalcOnLoad = true;
    let result = null;

    try {
        await workbook.xlsx.readFile('./data/test.xlsx');
        const sheet = workbook.getWorksheet(1);

        parser.on('callCellValue', function(cellCoord, done) {
            if (sheet.getCell(cellCoord.label).formula) {
              done(parser.parse(sheet.getCell(cellCoord.label).formula).result);
            } else {
              done(sheet.getCell(cellCoord.label).value);
            }
          });
        
        parser.on('callRangeValue', function(startCellCoord, endCellCoord, done) {
            var fragment = [];
        
            for (var row = startCellCoord.row.index; row <= endCellCoord.row.index; row++) {
                var colFragment = [];
        
                for (var col = startCellCoord.column.index; col <= endCellCoord.column.index; col++) {
                colFragment.push(sheet.getRow(row + 1).getCell(col + 1).value);
                }
        
                fragment.push(colFragment);
            }
        
            if (fragment) {
                done(fragment);
            }
        });

        sheet.getCell('A1').value = val;

        console.log(getCellResult(sheet, 'C1'));
        return getCellResult(sheet, 'C1');
    }
    catch(error) {
        console.error("Error", error);
    }
}

module.exports = {
    xlsxManipulation : manipulateAndPullNewCell
}