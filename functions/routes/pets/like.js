
const router = require('express').Router();
const { like } = require('../../services/pets');
const { logger } = require('../../helpers');

router.patch('/like/:id', async (req, res) => {
  logger(`[Start][PETS]: Add Like ${new Date().getTime()}`);
  const id = req.params.id;
  try {
    await like(id);
    res.status(200).send();
  } catch(e) {
    res.status(404).send(e.message);
  }
  logger(`[End][PETS]: Add Like ${new Date().getTime()}`);
});

module.exports = router;