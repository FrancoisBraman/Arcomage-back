const minValue = {
  software: 1,
  update: 0,
  dataMiner: 1,
  crypto: 0,
  hacker: 1,
  virus: 0,
  dataCenter: 0,
  firewall: 0,
};

const startingValues = {
  software: 2,
  update: 5,
  dataMiner: 2,
  crypto: 5,
  hacker: 2,
  virus: 5,
  dataCenter: 20,
  firewall: 0,
};

const winValue = {
  update: 100,
  crypto: 100,
  virus: 100,
  dataCenter: 0,
};

module.exports = {
  minValue,
  startingValues,
  winValue,
};
