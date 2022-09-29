/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Attributes',
      [{
        date: new Date(Date.UTC(2021, 09, 21, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'SuperJet John Doe',
        quantity: 1,
        distance: 70
      },
      {
        date: new Date(Date.UTC(2018, 11, 30, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Supersonic Mary',
        quantity: 10,
        distance: 100
      },
      {
        date: new Date(Date.UTC(2022, 08, 15, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Vacuum Nakamura',
        quantity: 3,
        distance: 300
      },
      {
        date: new Date(Date.UTC(2015, 10, 10, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Iron Carrier',
        quantity: 2,
        distance: 20
      },
      {
        date: new Date(Date.UTC(2020, 05, 15, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Speedtrain V',
        quantity: 15,
        distance: 150
      },
      {
        date: new Date(Date.UTC(2012, 09, 03, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Ultrasonic Jet',
        quantity: 4,
        distance: 500
      },
      {
        date: new Date(Date.UTC(2017, 12, 12, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Stealth Speeder',
        quantity: 21,
        distance: 130
      },
      {
        date: new Date(Date.UTC(2019, 11, 09, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Lightweight Carrier',
        quantity: 12,
        distance: 210
      },
      {
        date: new Date(Date.UTC(2012, 10, 21, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Classic Truck Jack',
        quantity: 54,
        distance: 50
      },
      {
        date: new Date(Date.UTC(2014, 02, 19, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Man Jet',
        quantity: 18,
        distance: 90
      },
      {
        date: new Date(Date.UTC(2020, 08, 10, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Calliostro class Carrier',
        quantity: 1,
        distance: 115
      },
      {
        date: new Date(Date.UTC(2021, 10, 30, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Genova Ultrajet',
        quantity: 4,
        distance: 800
      },
      {
        date: new Date(Date.UTC(2022, 07, 14, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Stray type flyer',
        quantity: 19,
        distance: 450
      },
      {
        date: new Date(Date.UTC(2015, 09, 13, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Fellina Speedster',
        quantity: 55,
        distance: 85
      },
      {
        date: new Date(Date.UTC(2022, 05, 18, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Ganimed Truck',
        quantity: 99,
        distance: 35
      },
      {
        date: new Date(Date.UTC(2019, 09, 15, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Spider class Rocket',
        quantity: 15,
        distance: 1100
      },
      {
        date: new Date(Date.UTC(2016, 07, 12, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Ishimura pod',
        quantity: 65,
        distance: 0
      },
      {
        date: new Date(Date.UTC(2021, 05, 10, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Carrion Jet',
        quantity: 4,
        distance: 330
      },
      {
        date: new Date(Date.UTC(2017, 12, 12, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Sonicspeed jumper',
        quantity: 2,
        distance: 1500
      },
      {
        date: new Date(Date.UTC(2020, 04, 11, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Baby class pod',
        quantity: 56,
        distance: 1
      },
      ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Attributes', null, {});

  }
};
