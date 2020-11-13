const admin = require('firebase-admin');
const getById = require('./getById');

async function like(id) {
  try {
    const pet = await getById(id);
    await admin.firestore().collection('pets').doc(id).update({ likes: pet.likes += 1 });
  } catch (e) {
    throw Error(e.message);
  }
}

module.exports = like;