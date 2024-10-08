const products = {
  state: {
    products: [
      {
        id: 0,
        img: 'coffee-3.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 1,
        img: 'coffee-3.jpg',
        title: 'Presto Coffee Beans 1kg',
        price: 15.99,
        maker: 'Brazil',
      },
      {
        id: 2,
        img: 'coffee-3.jpg',
        title: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        maker: 'Brazil',
      },
      {
        id: 3,
        img: 'coffee-3.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 4,
        img: 'coffee-3.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 5,
        img: 'coffee-3.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
    ],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById(state) {
      return (id) => {
        return state.products.find((card) => card.id === +id);
      };
    },
  },
};
export default products;
