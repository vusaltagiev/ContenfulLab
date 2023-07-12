import * as contentful from 'contentful';

const client = contentful.createClient({
    space: '22uze16mfm8t',
    accessToken: 'QaYZ4MxTTBGLvxjAmg3na3qsPRxkPJ6uD-8TzfO_z98',
  });

export const getContactInfo = () => {
    let contactIfo = {};
    client
      .getEntries({
        content_type: 'contactInfo',
      })
      .then(function (entries) {
        entries.items.forEach(function (entry) {
            // console.log(entry)
          contactIfo.firstName = entry.fields.firstName;
          contactIfo.lastName = entry.fields.lastName;
          contactIfo.cars = new Array()
          entry.fields.car.forEach(function (car) {
            contactIfo.cars.push(
                {
                    carName: car.fields.carName,
                    carModel: car.fields.carModel
                  }
            ) 
          })
        });
      });
      console.log(contactIfo);
    return contactIfo;
  };