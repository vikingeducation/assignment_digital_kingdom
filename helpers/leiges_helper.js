var LeigesHelper = {};

// -------- Path Helpers --------- //
LeigesHelper.leigePath = (castleName, name) => `/leiges/${ castleName }/${ name }`;
LeigesHelper.newLeigePath = () => '/leiges/new';

// -------- View Helpers --------- //
LeigesHelper.anyVassals = (leige) => {
  return Object.keys(leige.vassals).length !== 0;
};

LeigesHelper.vassalAmount = (leige) => {
  return Object.keys(leige.vassals).length;
};

module.exports = LeigesHelper;
