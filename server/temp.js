const exceljs = require('exceljs')

const workbook = new exceljs.Workbook();

async function foo() {
  await workbook.xlsx.readFile("data/ASHP Calculator - U of C.xlsm")

}

foo()
