
const router = require('express').Router();
const admin = require('firebase-admin');
const { logger } = require('../../helpers');

router.post('/', async (req, res) => {
  logger('[PETS]: Add pet')
  const pets = req.body;
  for (const pet of pets) {
    await admin.firestore().collection('pets').add(pet)
  }

  res.status(200).send('Saved');
});

module.exports = router;