import sys
import json
from recalc import recalc

# json containing inputs passed to recalc
output_sheet = recalc()

results = [output_sheet[key].value for key in [ 'E5', 'G5', 'J5', 'K5', ]]

json.dump(results, sys.stdout)
