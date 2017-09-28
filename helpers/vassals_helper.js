var VassalsHelper = {};

VassalsHelper.vassalsPath = () => '/vassals/';
VassalsHelper.vassalPath = (id) => `/vassals/${ id }`;
VassalsHelper.newVassalPath = () => '/vassals/new';
VassalsHelper.editVassalPath = (id) => `/vassals/${ id }/edit`;
VassalsHelper.destroyVassalPath = (id) => `/vassals/${ id }/?_method=delete`;

module.exports = VassalsHelper;
