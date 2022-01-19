const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const mongoose = require('mongoose');
const CreatedSurveyModel = require('./models/CreatedSurveys');

app.use(express.static('static'));
app.use(express.json());

mongoose.connect(
  'mongodb+srv://john:Mongojaguar1@laracluster0.wpvro.mongodb.net/LARA-survey?retryWrites=true&w=majority'
);

// app.get('/getCreatedSurveys', (req, res) => {
//   console.log('req:', req);
//   CreatedSurveyModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.post("/createCreatedSurvey", async (req, res) => {
// 	const createdSurvey = req.body;
// 	const newCreatedSurvey = new CreatedSurveyModel(createdSurvey);
// 	await newCreatedSurvey.save();

// 	res.json(createSurvey);
// })

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/api/:id', (req, res) => {
  res.json({ message: 'hi there' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
