const goods = {
  state: {
    goods: [
      {
        id: 0,
        img: 'good-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 1,
        img: 'good-1.jpg',
        title: 'Presto Coffee Beans 1kg',
        price: 15.99,
        maker: 'Brazil',
      },
      {
        id: 2,
        img: 'good-1.jpg',
        title: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        maker: 'Brazil',
      },
      {
        id: 3,
        img: 'good-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 4,
        img: 'good-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
      {
        id: 5,
        img: 'good-1.jpg',
        title: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        maker: 'Brazil',
      },
    ],
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};
export default goods;
