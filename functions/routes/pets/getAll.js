
const router = require('express').Router();
const { getAll } = require('../../services/pets');
const { logger } = require('../../helpers');

router.get('/', async (req, res) => {
  logger(`[Start][PETS]: Get All ${new Date().getTime()}`)
  const pets = await getAll();

  res.status(200).json(pets);
  logger(`[End][PETS]: Get All ${new Date().getTime()}`);
});

module.exports = router;