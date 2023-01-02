const faker = require("faker");

faker.locale = "es";
const { commerce, image } = faker;

const generateFakeProducts = (n) => {
  let fakeProducts = [];
  let id = 1 
  for (let index = 0; index < n; index++) {
    const fakeProduct = {
      id: id,
      title: commerce.product(),
      price: commerce.price(10, 1000),
      thumbnail: image.animals(190, 190),
    };
    fakeProducts= [...fakeProducts, fakeProduct]
    id ++
  }
  return fakeProducts;
};

module.exports = generateFakeProducts