# csv_table.py
# this file calls recalc to get the output of the excel calculation, reads the
# output table from the excel sheet and writes it to stdout as a csv

import sys
import csv
from recalc import recalc

output_sheet = recalc()

# pull the whole table into a csv
table = output_sheet.range('D2:J9').value

writer = csv.writer(sys.stdout)

writer.writerows(table)
