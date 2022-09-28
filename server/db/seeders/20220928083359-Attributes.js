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
        date: new Date(Date.UTC(2019, 10, 17, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Classic Truck Jack',
        quantity: 54,
        distance: 50
      },
      {
        date: new Date(Date.UTC(2014, 03, 09, 3, 0, 0)).toLocaleDateString('en-GB'),
        name: 'Man Jet',
        quantity: 18,
        distance: 90
      },
      ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Attributes', null, {});

  }
};
