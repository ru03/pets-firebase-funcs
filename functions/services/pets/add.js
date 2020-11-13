
const admin = require('firebase-admin');

async function add(pets) {
  for(const pet of pets) {
    await admin.firestore().collection('pets').add(pet)
  }
  return true;
}

module.exports = add;