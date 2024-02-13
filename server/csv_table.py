import sys
import csv
from recalc import recalc

# json containing inputs passed to recalc
output_sheet = recalc()

# pull the whole table into a csv
table = output_sheet.range('D2:L6').value

# Writing to CSV
writer = csv.writer(sys.stdout)

writer.writerows(table)
