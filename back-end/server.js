const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const dataFile = './data/scenarios.json';

// Helper function to read data
const readData = () => {
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
};

// Helper function to write data
const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Get all scenarios
app.get('/scenarios', (req, res) => {
  const data = readData();
  res.json(data);
});

// Add a new scenario
app.post('/scenarios', (req, res) => {
  const data = readData();
  const newScenario = req.body;
  newScenario.id = data.length ? data[data.length - 1].id + 1 : 1;
  newScenario.vehicles = []; // Initialize vehicles array
  data.push(newScenario);
  writeData(data);
  res.status(201).json(newScenario);
});

// Update a scenario
app.put('/scenarios/:id', (req, res) => {
  const data = readData();
  const scenarioId = parseInt(req.params.id, 10);
  const index = data.findIndex((scenario) => scenario.id === scenarioId);
  if (index === -1) {
    return res.status(404).send('Scenario not found');
  }
  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

// Add a vehicle to a scenario
app.put('/scenarios/:id/vehicles', (req, res) => {
  const data = readData();
  const scenarioId = parseInt(req.params.id, 10);
  const index = data.findIndex((scenario) => scenario.id === scenarioId);
  if (index === -1) {
    return res.status(404).send('Scenario not found');
  }
  const newVehicle = { ...req.body, id: data[index].vehicles.length ? data[index].vehicles[data[index].vehicles.length - 1].id + 1 : 1 };
  data[index].vehicles.push(newVehicle);
  writeData(data);
  res.status(201).json(newVehicle);
});

// Delete a scenario
app.delete('/scenarios/:id', (req, res) => {
  const data = readData();
  const scenarioId = parseInt(req.params.id, 10);
  const newData = data.filter((scenario) => scenario.id !== scenarioId);
  writeData(newData);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
