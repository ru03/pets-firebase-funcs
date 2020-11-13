const admin = require('firebase-admin');

async function getById(id) {
    const pet = await admin.firestore().collection('pets').doc(id).get();
    if (!pet.data()) {
        throw Error('Not Found');
    }

    return { id: pet.id, ...pet.data() };
}

module.exports = getById;