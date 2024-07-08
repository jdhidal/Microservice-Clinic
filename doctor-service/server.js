const express = require('express');
const app = express();
const port = 5001;

const doctors = [
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Jones', specialty: 'Neurology' },
  { id: 3, name: 'Dr. Kevin', specialty: 'Ginecology' }
];

app.get('/doctors', (req, res) => {
  res.json(doctors);
});

app.listen(port, () => {
  console.log(`Doctor service running on port ${port}`);
});
