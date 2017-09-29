var KingdomsHelper = {};

KingdomsHelper.kingdomsPath = () => '/kingdoms/';
KingdomsHelper.kingdomPath = (name) => `/kingdoms/${ name }`;
KingdomsHelper.newKingdomPath = () => '/kingdoms/new';

// -------- View Helpers --------- //
KingdomsHelper.anyCastles = (kingdom) => {
  return Object.keys(kingdom.castles).length !== 0;
};

module.exports = KingdomsHelper;
