'use strict';

function loadAllItemMap() {
    const itemList = loadAllItems();
    const result = {};
    for (let i = 0; i < itemList.length; i++) {
        result[itemList[i].id] = itemList[i];
    }
    return result;
}
