function setItem(nameItem, item) {
    localStorage.setItem(nameItem, JSON.stringify(item));
    
}

function setItemOnly(nameItem, item) {
    localStorage.setItem(nameItem, item);
}

function getItemJson(nameItem) {
    const item = localStorage.getItem(nameItem);
    return JSON.parse(item);
}