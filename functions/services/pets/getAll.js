const admin = require('firebase-admin');

async function getAll(req, res) {
  let result = {};
  const pets = await admin.firestore().collection('/pets').get();

  pets.forEach(pet => {
    result = {
      ...result,
      [pet.id]: { ...pet.data() }
    }
  });

  return result;
};

module.exports = getAll;