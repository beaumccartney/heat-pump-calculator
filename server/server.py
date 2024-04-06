"""
server.py

This file defines an API route to calculate the heat pump figures. The route
takes a a json object with inputs to the calc as input, and returns a csv
representation of the excel sheet's output table.

Pydantic is used to validate the input json object, ensuring that only the excel
sheet's defined valid inputs are passed to the calculation.
"""


# api dependencies
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

# input validation dependencies
from pydantic import BaseModel, Field
from typing import Literal

# dependencies for working with excel
import xlwings
from io import StringIO
import csv
import sys

excelsheet_handle = None
input_sheet = None
output_sheet = None

try:
    excelsheet_handle = xlwings.Book('ASHP Calculator - U of C.xlsm')
    input_sheet = excelsheet_handle.sheets['User Inputs']
    output_sheet = excelsheet_handle.sheets['Outputs']
except Exception as e:
    print(f"Error opening excel sheet: {e}.\n\nPlease fix the error and restart the server")
    sys.exit(1)

"""
input schema - specifies the possible input fields of the input json passed to
/calc, and their validation rules. I.e., the set of possible inputs to /calc is
entirely specified by this schema. Please refer to the Pydantic documentation
for more information.
"""
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

# NOTE(beau): adjust these for your development/deployment enviroments
# I've left universal access open for development purposes
origins = [
    "http://localhost:3000",
    "*", # XXX(beau): remove in production
]
methods = [
    "POST", # required
    "*", # XXX(beau): remove in production
]
headers = [
    "Content-Type", # required
    "*", # XXX(beau): remove in production
]

# set CORS policy
api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=methods,
    allow_headers=headers,
)

@api.post("/api/calc")
def calculate(input: InputSchema):
    """
    definition of the /calc route
    this route takes a json input defined by the input_schema, and returns a csv
    representation of the excel sheet's output table.
    """
    calculated = recalc(input)
    output = StringIO()

    csv_writer = csv.writer(output)
    csv_writer.writerows(calculated)

    response = Response(content=output.getvalue(), media_type="text/csv")

    response.headers["Content-Disposition"] = "attachment; filename=heatpump.csv"

    return response

def recalc(inputs: InputSchema):
    """
    does the actual calculation of the heat pump properties for a given scenario
    - passes inputs to the excel sheet
    - forces the microsoft excel process to recalculate the sheet (which updates the outputs)
    - returns a nested list representation of the sheet's output table
    """

    for (cell, input) in (
        ('G2', inputs.buildYear,                  ),
        ('G4', inputs.sizeOfHome,                 ),
        ('G5', inputs.existingFurnaceEfficiency,  ),
        ('G6', inputs.heatPumpSelector,           ),
        ('N3', inputs.HEFUpgradeEstimate,         ),
        ('N4', inputs.heatPumpHEFInstallEstimate, ),
        ('N5', inputs.solarPVInstallEstimate,     ),
        ('N6', inputs.costOfNaturalGas,           ),
        ('N7', inputs.costOfElectricity,          ),
    ):
        input_sheet[cell].value = input

    excelsheet_handle.app.calculate()

    output_table = output_sheet.range('D2:J9').value
    return output_table
