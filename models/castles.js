class Castles {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.liegeIds = [];
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = Castles;
