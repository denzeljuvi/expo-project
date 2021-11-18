const PRODUCTS = [
    {
        id: 100,
        name: 'Air Jordan 4 Shoes',
        price: 350,
        image: require('../assets/Products/Jordan.jpg'),
        description: 'The Jordan 4 classic, unveiled in 1989, is one of the most iconic basketball shoes of all time'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: require('../assets/Products/toycar.jpg'),
        description: 'A model car is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/Products/cupcake.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 104,
        name: 'ADDIESDIVE Pilot Watch',
        price: 120,
        image: require('../assets/Products/Watch.jpg'),
        description: 'The Addiesdive quality watch from japan, corrosion resistance, made from synthetic sapphire with super luminescent.'
    },
    {
        id: 105,
        name: 'Balenciaga Shoe ',
        price: 300,
        image: require('../assets/Products/Balenciaga.jpg'),
        description: 'Made in Italy balenciaga footwear.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}