const products = [
    {name: 'Samsung s3 Phone', price: 120000},
    {name: 'Asus Laptop d34', Price : 320000},
    {name: 'Apple Smart watch', Price : 180000},
    {name: 'Bashundra Binding Paper', Price : 800},
    {name: 'LG smart Phone', Price : 90000},
    {name: 'Old Granny Land Phone', Price : 900}

]


function searchProducts(products, searchText){
    const matched =[];
    for(const product of products){
        if(product.name.indexOf(searchText)!=-1){
            matched.push(product.name);
        }
    }
    return matched;
}

const matched = searchProducts(products,'phone');
console.log(matched);