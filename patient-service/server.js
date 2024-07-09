const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5002;

app.use(bodyParser.json());

const patients = [];

app.post('/patients', (req, res) => {
  const { name, age, contact } = req.body;
  const id = patients.length + 1;
  const newPatient = { id, name, age, contact };
  patients.push(newPatient);
  res.json({ message: 'Patient registered successfully', patient: newPatient });
});


app.get('/patients', (req, res) => {
  const response = {
    title: "Patient List",
    data: patients
  };
  res.json(response);
});


app.listen(port, () => {
  console.log(`Patient service running on port ${port}`);
});
