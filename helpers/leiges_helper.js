var LeigesHelper = {};

LeigesHelper.leigesPath = () => '/leiges/';
LeigesHelper.leigePath = (id) => `/leiges/${ id }`;
LeigesHelper.newLeigePath = () => '/leiges/new';
LeigesHelper.editLeigePath = (id) => `/leiges/${ id }/edit`;
LeigesHelper.destroyLeigePath = (id) => `/leiges/${ id }/?_method=delete`;

module.exports = LeigesHelper;
