const FormulaParser = require('hot-formula-parser').Parser;
const parser = new FormulaParser();

const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();

const excelpath = './data/heat-pump.xlsm';


function getCellResult(worksheet, cellLabel) {
    if (worksheet.getCell(cellLabel).formula) {
      return parser.parse(worksheet.getCell(cellLabel).formula).result;
    } else {
      return worksheet.getCell(cellLabel).value;
    }
  }

const manipulateAndPullNewCell = async (val) => {
    workbook.calcProperties.fullCalcOnLoad = true;
    let result = null;

    try {
        // await workbook.xlsx.readFile('./data/test.xlsx');
        await workbook.xlsx.readFile(excelpath);
        const sheet = workbook.getWorksheet(2);

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

        sheet.getCell('G4').value = val;

        // await workbook.xlsx.writeFile('./data/test.xlsx');
        // await workbook.xlsx.writeFile(excelpath);
        return getCellResult(sheet, 'H12');
    }
    catch(error) {
        console.error("Error", error);
    }
}

module.exports = {
    xlsxManipulation : manipulateAndPullNewCell
}
