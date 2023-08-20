// models/productsModels.js

const onEarProducts = [
    { name: 'Sony On Ear Headphones', price: 150.00, image: 'assets/hp1.png' },
    { name: 'JBL Wireless Headphone', price: 208.00, image: 'assets/hp2.png' },
    { name: 'Beats Wireless Headphones', price: 420, image: 'assets/hp.png' },
    { name: 'Ferrari World Wireless Headphones', price: 560.00, image: 'assets/hp4.png' },
    { name: 'Alien Wireless Headphones', price: 125.00, image: 'assets/hp3.png' },
    { name: 'Sennheiser Wireless Headphones', price: 380.00, image: 'assets/hp5.png' },
    { name: 'Bose Wireless Headphones', price: 400.00, image: 'assets/hp6.png' },
    { name: 'Razer Gaming Headset', price: 170.00, image: 'assets/hp8.png' },
];

const inEarProducts = [
    { name: 'Sony In Ear Wired Headphones', price: 84.00, image: 'assets/iehp1.png' },
    { name: 'Alien In Ear Wired Headphones', price: 65.00, image: 'assets/iehp2.png' },
    { name: 'Xiaomi In Ear Wired Headphones', price: 150.00, image: 'assets/iehp3.png' },
    { name: 'In Ear Wireless Bluetooth Headphones', price: 210.00, image: 'assets/iehp4.png' },
];

const homeProducts = onEarProducts.slice(0, 4);

//for search bar
const allProducts = [...onEarProducts, ...inEarProducts];



module.exports = { onEarProducts, inEarProducts, homeProducts, allProducts };
