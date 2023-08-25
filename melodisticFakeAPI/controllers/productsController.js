

exports.fetchAllProducts = async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        res.json(products);
    } catch (error) {
        console.error('There was an error fetching all the products:', error);
        res.status(500).send('Error fetching products');
    }
}

