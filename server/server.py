import xlwings
from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel, Field
from typing import Literal
from io import StringIO
import csv

class InputSchema(BaseModel):
    buildYear                 : Literal["<1949", "1950-1959", "1960-1981", "1982-1990", "1991-1997", "1998-2006", "2007-2014", "2015-present"]
    sizeOfHome                : int = Field(gt=0)
    existingFurnaceEfficiency : Literal["I don't know", 0.8, 0.92, 0.97] = "I don't know"
    heatPumpSelector          : Literal["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"] = "Unit 1"
    HEFUpgradeEstimate        : int = Field(default=8000, ge=0)
    heatPumpHEFInstallEstimate: int = Field(default=10000, ge=0)
    solarPVInstallEstimate    : int = Field(default=12000, ge=0)
    costOfNaturalGas          : Literal["High", "Current", "Low"] = "Current"
    costOfElectricity         : Literal["High", "Current", "Low"] = "Current"

api = FastAPI()

@api.post("/api/calc")
def calculate(input: InputSchema):
    calculated = recalc(input)
    output = StringIO()

    csv_writer = csv.writer(output)
    csv_writer.writerows(calculated)

    response = Response(content=output.getvalue(), media_type="text/csv")

    response.headers["Content-Disposition"] = "attachment; filename=heatpump.csv"

    return response

# does the actual calculation of the heat pump properties for a given scenario
# - opens the calculation excel in microsoft excel
# - reads in an input json (defined in routes/appRoutes.js) from stdin.
# - pulls the inputs from the json and passes them to the excell sheet
# - forces the microsoft excel process to recalculate the sheet (which updates the outputs)
# - returns a handle to the output sheet of the calculation excel
def recalc(inputs: InputSchema):
    excelsheet_handle = xlwings.Book('data/ASHP Calculator - U of C.xlsm')

    input_sheet = excelsheet_handle.sheets['User Inputs']

    for (cell, input) in (
        ('G2', 'buildYear',                  ),
        ('G4', 'sizeOfHome',                 ),
        ('G5', 'existingFurnaceEfficiency',  ),
        ('G6', 'heatPumpSelector',           ),
        ('N3', 'HEFUpgradeEstimate',         ),
        ('N4', 'heatPumpHEFInstallEstimate', ),
        ('N5', 'solarPVInstallEstimate',     ),
        ('N6', 'costOfNaturalGas',           ),
        ('N7', 'costOfElectricity',          ),
    ):
        input_value = getattr(inputs, input)
        input_sheet[cell].value = input_value

    excelsheet_handle.app.calculate()

    output_sheet = excelsheet_handle.sheets['Outputs']
    return output_sheet.range('D2:J9').value
