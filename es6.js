class Head {
    constructor () {
        this.glasses = 1;
    }
};

// var head = new Head('glasses = 1')

class Table extends Head {
  constructor (pen) {
      this.pen = 3;
  }
};

// var table = new Table('pen = 3')

class Bed extends Table{
    constructor (sheet, pillow) {
        this.sheet = 1;
        this.pillow = 2;
    }
};

// var bed = new Bed('sheet = 1', 'pillow = 2')

class Pockets extends Bed{
    constructor (money) {
        this.money = 2000;
    }
};

// var pockets = new Pockets('money = 2000')


// alert(Head)