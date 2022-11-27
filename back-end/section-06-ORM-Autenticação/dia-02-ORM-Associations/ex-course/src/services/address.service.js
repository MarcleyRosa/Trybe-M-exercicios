// src/services/address.service.js

const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
};

const getAllByAdress = async (adress) => {
    const addresses = await Address.findAll({ where: { employeeId }, order: { } });

    return addresses;
};

module.exports = {
  getAllByEmployeeId,
}