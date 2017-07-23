module.exports = {
  parent: {
    kingdom: 'vassal',
    castle: 'kingdom',
    liege: 'castle',
    vassal: 'liege'
  },
  child: {
    kingdom: 'castle',
    castle: 'liege',
    liege: 'vassal',
    vassal: 'kingdom'
  }
};
