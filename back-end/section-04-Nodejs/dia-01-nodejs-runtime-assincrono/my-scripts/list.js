const { person } = require('./requestSimpsons');

const removePerson = async () => {
    const response = await person();
    const filterId = response.filter((e) => +e.id !== 10 && +e.id !== 6);
    console.log(filterId);
}

removePerson();