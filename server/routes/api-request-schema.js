// just a four-element json array, one for each input of the spreadsheet
const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": [
    // year house was built
    {
      "type": "string",
      "enum": [
        "<1949",
        "1950-1959",
        "1960-1981",
        "1982-1990",
        "1991-1997",
        "1998-2006",
        "2007-2014",
        "2015-present"
      ]
    },
    // size of the home
    {
      "type": "number"
    },
    // existing furnace efficiency
    {
      "enum": ["I don't know", 0.8, 0.92, 0.97]
    },
    // heat pump selector
    {
      "type": "string",
      "enum": [
        "Unit 1",
        "Unit 2",
        "Unit 3",
        "Unit 4",
        "Unit 5"
      ]
    }
  ],
  "minItems": 4,
  "maxItems": 4
}

module.exports = schema
