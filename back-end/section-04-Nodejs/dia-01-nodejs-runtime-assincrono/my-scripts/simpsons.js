const { person } = require('./requestSimpsons');
const readline = require('readline-sync');

const selectId = readline.question('Digite um id para achar um personagem')

const responsePerson = async (id) => {
    const response = await person()
    const promise = new Promise((resolve, reject) => {
        if (+id >= 1 && +id <= 10) {
        const env = response.filter((e) => e.id === id);
        resolve(env);
        } else {
            reject(new Error('id não encontrado'))
        }
    })
    return promise;
}
try {
responsePerson(selectId).then((e) => console.log(e));
} catch(error) {
    console.error('');
}