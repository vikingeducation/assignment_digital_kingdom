var VassalsHelper = {};

VassalsHelper.newVassalPath = () => '/vassals/new';
VassalsHelper.destroyVassalPath = (castleName, leigeName, name) => `/vassals/${ castleName }/${ leigeName }/${ name }?_method=delete`;

module.exports = VassalsHelper;
