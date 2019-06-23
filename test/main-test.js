'use strict';

describe('pos', () => {

  it('should print text', () => {
    const expectMap = {
      "0001": {"id": "0001", "name": "Coca Cola", "price": 3},
      "0002": {"id": "0002", "name": "Diet Coke", "price": 4},
      "0003": {"id": "0003", "name": "Pepsi-Cola", "price": 5},
      "0004": {"id": "0004", "name": "Mountain Dew", "price": 6},
      "0005": {"id": "0005", "name": "Dr Pepper", "price": 7},
      "0006": {"id": "0006", "name": "Sprite", "price": 8},
      "0007": {"id": "0007", "name": "Diet Pepsi", "price": 9},
      "0008": {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
      "0009": {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
      "0010": {"id": "0010", "name": "Fanta", "price": 12}
    };

    expect(loadAllItemMap()).toEqual(expectMap);
  });
});
