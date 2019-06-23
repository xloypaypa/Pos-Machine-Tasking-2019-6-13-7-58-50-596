'use strict';

describe('pos', () => {

    it('should return item map', () => {
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
            "0010": {"id": "0010", "name": "Fanta", "price": 12},
        };

        expect(loadAllItemMap()).toEqual(expectMap);
    });

    it('should return item count', () => {
        const expectList = [
            {"key": "0001", "count": 1},
            {"key": "0003", "count": 2},
            {"key": "0005", "count": 1},
        ];

        expect(getItemCount(['0001', '0003', '0005', '0003'])).toEqual(expectList);
    });

    it('should return price list', () => {
        const itemMap = {
            "0001": {"id": "0001", "name": "Coca Cola", "price": 3},
            "0002": {"id": "0002", "name": "Diet Coke", "price": 4},
            "0003": {"id": "0003", "name": "Pepsi-Cola", "price": 5},
            "0004": {"id": "0004", "name": "Mountain Dew", "price": 6},
            "0005": {"id": "0005", "name": "Dr Pepper", "price": 7},
            "0006": {"id": "0006", "name": "Sprite", "price": 8},
            "0007": {"id": "0007", "name": "Diet Pepsi", "price": 9},
            "0008": {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
            "0009": {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
            "0010": {"id": "0010", "name": "Fanta", "price": 12},
        };
        const itemCount = [
            {"key": "0001", "count": 1},
            {"key": "0003", "count": 2},
            {"key": "0005", "count": 1},
        ];
        const expectMap = [
            {"key": "0001", "count": 1, "itemDetail": {"id": "0001", "name": "Coca Cola", "price": 3}, "price": 3},
            {"key": "0003", "count": 2, "itemDetail": {"id": "0003", "name": "Pepsi-Cola", "price": 5}, "price": 10},
            {"key": "0005", "count": 1, "itemDetail": {"id": "0005", "name": "Dr Pepper", "price": 7}, "price": 7},
        ];

        expect(buildPriceList(itemCount, itemMap)).toEqual(expectMap);
    });

    it('should return total price', () => {
        const priceList = [
            {"key": "0001", "count": 1, "itemDetail": {"id": "0001", "name": "Coca Cola", "price": 3}, "price": 3},
            {"key": "0003", "count": 2, "itemDetail": {"id": "0003", "name": "Pepsi-Cola", "price": 5}, "price": 10},
            {"key": "0005", "count": 1, "itemDetail": {"id": "0005", "name": "Dr Pepper", "price": 7}, "price": 7},
        ];

        expect(calculateTotalPrice(priceList)).toEqual(20);
    });
});
