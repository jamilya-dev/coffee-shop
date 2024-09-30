<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[0].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[0].title }}</div>
                <div class="shop__item-country">{{ products[0].maker }}</div>
                <div class="shop__item-price">{{ products[0].price }}</div>
              </div>
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[1].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[1].title }}</div>
                <div class="shop__item-country">{{ products[1].maker }}</div>
                <div class="shop__item-price">{{ products[1].price }}</div>
              </div>
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[2].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[2].title }}</div>
                <div class="shop__item-country">{{ products[2].maker }}</div>
                <div class="shop__item-price">{{ products[2].price }}</div>
              </div>
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[3].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[3].title }}</div>
                <div class="shop__item-country">{{ products[3].maker }}</div>
                <div class="shop__item-price">{{ products[3].price }}</div>
              </div>
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[4].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[4].title }}</div>
                <div class="shop__item-country">{{ products[4].maker }}</div>
                <div class="shop__item-price">{{ products[4].price }}</div>
              </div>
              <div class="shop__item">
                <img
                  :src="require(`@/assets/img/${products[5].img}`)"
                  alt="coffee"
                />
                <div class="shop__item-title">{{ products[5].title }}</div>
                <div class="shop__item-country">{{ products[5].maker }}</div>
                <div class="shop__item-price">{{ products[5].price }}</div>
              </div>
              <!-- <ProductCatdComponent />
              <ProductCatdComponent />
              <ProductCatdComponent />
              <ProductCatdComponent />
              <ProductCatdComponent />
              <ProductCatdComponent /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
// import ProductCatdComponent from "@/components/ProductCatdComponent.vue";

export default {
  components: { NavBarComponent },

  data() {
    return {
      products: [
        {
          id: 0,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          maker: "Brazil",
        },
        {
          id: 1,
          img: "good-1.jpg",
          title: "Presto Coffee Beans 1kg",
          price: "15.99$",
          maker: "Brazil",
        },
        {
          id: 2,
          img: "good-1.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: "6.99$",
          maker: "Brazil",
        },
        {
          id: 3,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          maker: "Brazil",
        },
        {
          id: 4,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          maker: "Brazil",
        },
        {
          id: 5,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: "10.73$",
          maker: "Brazil",
        },
      ],
    };
  },
};
</script>