require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const mongoose = require('mongoose');
const mongoDB = process.env.DATABASEURL;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));

const {createProfile, allProfiles, readProfile, updateProfile, deleteProfile, search} = require('./controllers/profile');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('combined'));

app.get('/profiles', allProfiles);
app.post('/profile', createProfile);
app.get('/profile/:id', readProfile);
app.patch('/profile/:id', updateProfile);
app.delete('/profile/:id', deleteProfile);
app.get('/search', search);

app.listen(process.env.PORT | 3000, console.log(`Server running on port ${process.env.PORT}`));