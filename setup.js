const { faker } = require('@faker-js/faker')
const fs = require('fs')

function createUser() {
    const rndInt = Math.floor(Math.random() * 6) + 1
    const friends = faker.helpers.multiple(faker.person.fullName, { count: rndInt })

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            streetAddress: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state()
        },
        bio: faker.lorem.sentence(),
        jobTitle: faker.person.jobTitle(),
        sex: faker.person.sex(),
        image: faker.image.avatar(),
        phone: faker.phone.number(),
        birthdate: faker.date.birthdate(),
        car: {
            make: faker.vehicle.manufacturer(),
            model: faker.vehicle.model()
        },
        friends: friends
    };
};

const users = faker.helpers.multiple(createUser, { count: 50 })

const data = JSON.stringify(users);
fs.writeFile("users.json", data, (error) => {
  if (error) {
    console.error(error);
    throw error;
  }
  console.log("data.json written correctly");
});