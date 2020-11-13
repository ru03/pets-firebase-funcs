const express = require('express');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const bodyParser = require('body-parser');
const cors = require("cors");

const pets = require('./routes/pets');
const app = express();

admin.initializeApp();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

app.use('/pets', pets);

exports.api = functions.https.onRequest(app);
