var KingdomsHelper = {};

KingdomsHelper.kingdomsPath = () => '/kingdoms/';
KingdomsHelper.kingdomPath = (id) => `/kingdoms/${ id }`;
KingdomsHelper.newKingdomPath = () => '/kingdoms/new';
KingdomsHelper.editKingdomPath = (id) => `/kingdoms/${ id }/edit`;
KingdomsHelper.destroyKingdomPath = (id) => `/kingdoms/${ id }/?_method=delete`;

module.exports = KingdomsHelper;
