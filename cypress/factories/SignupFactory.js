var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '92999999999',
            address: {
                postalcode: '69018567',
                street: 'Rua Rio Madeira',
                number: '05',
                details: 'APT-202',
                district: 'Lago Azul',
                city_state: 'Manaus/AM'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
