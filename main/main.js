'use strict';

function loadAllItemMap() {
    const itemList = loadAllItems();
    const result = {};
    for (let i = 0; i < itemList.length; i++) {
        result[itemList[i].id] = itemList[i];
    }
    return result;
}

function getItemCount(tags) {
    const result = [];
    for (let i = 0; i < tags.length; i++) {
        const item = tags[i];
        let exist = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j].key === item) {
                result[j].count++;
                exist = true;
                break;
            }
        }
        if (!exist) {
            result.push({key: item, count: 1});
        }
    }
    return result;
}

function buildPriceList(itemCount, itemMap) {
    const result = [];
    for (let i = 0; i < itemCount.length; i++) {
        result.push({
            key: itemCount[i].key,
            count: itemCount[i].count,
            itemDetail: itemMap[itemCount[i].key],
            price: itemCount[i].count * itemMap[itemCount[i].key].price
        })
    }
    return result;
}

function calculateTotalPrice(priceList) {
    let totalPrice = 0;
    for (let i = 0; i < priceList.length; i++) {
        totalPrice += priceList[i].price;
    }
    return totalPrice;
}

function printReceipt(tags) {
    const priceList = buildPriceList(getItemCount(tags), loadAllItemMap());
    const totalPrice = calculateTotalPrice(priceList);
    let receipt = "Receipts\n" +
        "------------------------------------------------------------\n";
    for (let i = 0; i < priceList.length; i++) {
        const realPrice = priceList[i];
        receipt += realPrice.itemDetail.name + "\t\t\t" + realPrice.itemDetail.price + "\t\t" + realPrice.count + "\n";
    }
    receipt += "------------------------------------------------------------\n";
    receipt += "Price: " + totalPrice;
    return receipt;
}
