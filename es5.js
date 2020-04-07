let head = {
  glasses: 1,
};

let table = Object.create(head, {
    pen: {
        value: 3
    }
});

let bed = Object.create( table, {
    sheet: {
        value: 1
    },
    pillow: {
        value: 2
    }
});

let pockets = Object.create(bed, {
    money: {
        value: 2000
    }
});
