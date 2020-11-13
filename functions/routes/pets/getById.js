
const router = require('express').Router();
const { getById } = require('../../services/pets');
const { logger } = require('../../helpers');

router.get('/:id', async (req, res) => {
    logger(`[Start][PETS]: Get By Id ${new Date().getTime()}`);
    const id = req.params.id;
    try {
        const pet = await getById(id)
        res.status(200).json(pet);
    } catch(e) {
        logger(`ID: ${id} Not found`);
        res.status(404).send(e.message)
    }
    logger(`[End][PETS]: Get By Id ${new Date().getTime()}`);
});

module.exports = router;