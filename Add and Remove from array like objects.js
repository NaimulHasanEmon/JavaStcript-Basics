const products = [
    { name: 'phone', price: 25000, brand:  'Xiaomi'},
    { name: 'laptop', price: 55000, brand: 'Asus'},
    { name: 'camera', price: 85000, brand: 'Canon' }
]

// Print the list of products
const newProduct = { name: 'monitor', price: 10000, brand: 'Dahua'};

// copy products array and then add new product
const newProducts = [...products, newProduct];
console.log(newProducts);

// create new product array without a specific item
const remainingProducts = products.filter(product => product.name !== 'laptop');
console.log(remainingProducts);
