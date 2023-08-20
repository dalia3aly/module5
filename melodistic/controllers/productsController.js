
const { onEarProducts, inEarProducts, homeProducts } = require('../models/productsModels');
const { get } = require('../server');

const { allProducts } = require('../models/productsModels');

exports.getAllProducts = (req, res) => {
  res.json(allProducts);
};

exports.getProducts = (req, res) => {
  const pageIdentifier = req.query.page;
  let productsToShow;

  switch (pageIdentifier) {
    case 'home':
      productsToShow = homeProducts;
      break;
    case 'onearrange':
      productsToShow = onEarProducts;
      break;
    case 'inearrange':
      productsToShow = inEarProducts;
      break;
    default:
      productsToShow = [];
      break;
  }

  res.json(productsToShow);
};
