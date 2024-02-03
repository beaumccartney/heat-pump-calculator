import xlwings as xw
from icecream import ic

wb = xw.Book('data/ASHP Calculator - U of C.xlsm')

ic( wb.sheets['Outputs'].range('k4').value )
wb.sheets['User Inputs'].range('g4').value = 1500
wb.app.calculate()
ic( wb.sheets['Outputs'].range('k4').value )
