const express = require('express');
const router = express.Router();

const { spawn } = require('child_process')

router.get('/', (req, res) => {
  console.log(req)
  res.send("Hello")
});

router.post('/calc', (req, res) => {
  const jsondata = req.body

  // TODO: robustify
  // TODO: some kind of lock on the python script
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
