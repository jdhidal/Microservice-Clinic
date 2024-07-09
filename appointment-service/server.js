const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5003;

app.use(bodyParser.json());

const appointments = [];

app.post('/appointments', (req, res) => {
  const { patientId, doctorId, date } = req.body;
  const id = appointments.length + 1;
  const newAppointment = { id, patientId, doctorId, date };
  appointments.push(newAppointment);
  res.json({ message: 'Appointment booked successfully', appointment: newAppointment });
});

app.get('/appointments', (req, res) => {
  const response = {
    title: "Reservation List",
    data: appointments
  };
  res.json(response);
});


app.listen(port, () => {
  console.log(`Appointment service running on port ${port}`);
});
