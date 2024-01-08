const shop = {
    OwnerName : "Chowdhuary",
    address : {
        street : "600 SW 67th Terrace",
        city : "Pembroke Pines",
        Country : "USA"
    },
    products : ['Laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOPen : true,
    isNew : false
}
const stringifyObject = JSON.stringify(shop)
console.log(shop);
console.log(stringifyObject)