const express = require('express');
const router = express.Router();
const { spawn } = require('child_process')

const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require('./api-request-schema');
const validate = ajv.compile(schema);


router.get('/', (req, res) => {
  console.log(req)
  res.send("Hello")
});

router.post('/calc', (req, res) => {
  const jsondata = req.body
  console.log(validate(jsondata))

  // TODO: robustify
  // TODO: some kind of lock on the python script
  // i.e. protect the critical section
  const pythonProcess = spawn('python', ['recalc.py', JSON.stringify(jsondata)]);
  let scriptOutput = '';
  pythonProcess.stdout.on('data', (data) => {
    scriptOutput += data.toString();
  });

  pythonProcess.on("close", () => {
    const outputData = JSON.parse(scriptOutput);
    res.json(outputData);
  });
});

module.exports = router;
