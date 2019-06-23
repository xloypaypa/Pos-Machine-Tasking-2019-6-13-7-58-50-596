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
                result[j].count ++;
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
