const { faker } = require('@faker-js/faker');
('use strict');

//time
//1:18:18

const boilerManufacturers = [
  'Ari',
  'Chaff&Maury',
  'Bax',
  'Bong',
  'Sony',
  'Bud',
  'Strategist',
  'Henry',
  'Northwest',
];
const partsManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Montana',
  'Sensor',
  'Les',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Products',
      [{
        product_manufacturer: "Sad",
        boilerManufacturers: "sad",
        parts_manufacturer: "sad",
        price: 1000,
        name: "Sad",
        description: "Bruuuh",
        images: "sadfadsa",
        vendor_code: 1234537412,
        in_stock: 0,
        bestseller: false,
        new: true,
        popularity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        product_manufacturer: "Sad2",
        boilerManufacturers: "sad2",
        parts_manufacturer: "sad2",
        price: 1000,
        name: "Sad2",
        description: "Bruuuhsad",
        images: "sadfadsafsda",
        vendor_code: 1234537411,
        in_stock: 0,
        bestseller: false,
        new: true,
        popularity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};