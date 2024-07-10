const express = require('express');
const app = express();
const port = 5001;

const doctors = [
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Jones', specialty: 'Neurology' },
  { id: 3, name: 'Dr. Kevin', specialty: 'Ginecology' },
  { id: 4, name: 'Dr. Ariel', specialty: 'CR7' },
  { id: 5, name: 'Dra. Pazmiño', specialty: 'Radiology' },
  { id: 6, name: 'Dr. Esponga', specialty: 'Radiology' },
  { id: 7, name: 'Dr. Estrella', specialty: 'Cardiology' }
];

app.get('/doctors', (req, res) => {
  res.json(doctors);
});

app.listen(port, () => {
  console.log(`Doctor service running on port ${port}`);
});
