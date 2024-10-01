<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <PageTitleComponent :title="title" />
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
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[0].title"
                :price="goods[0].price"
                :image="goods[0].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[1].title"
                :price="goods[1].price"
                :image="goods[1].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[2].title"
                :price="goods[2].price"
                :image="goods[2].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[3].title"
                :price="goods[3].price"
                :image="goods[3].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[4].title"
                :price="goods[4].price"
                :image="goods[4].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="goods[5].title"
                :price="goods[5].price"
                :image="goods[5].img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCatdComponent from "@/components/ProductCatdComponent.vue";
import PageTitleComponent from "@/components/PageTitleComponent.vue";

export default {
  components: { NavBarComponent, ProductCatdComponent, PageTitleComponent },

  data() {
    return {
      title: "For your pleasure",
      goods: [
        {
          id: 0,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 1,
          img: "good-1.jpg",
          title: "Presto Coffee Beans 1kg",
          price: 15.99,
          maker: "Brazil",
        },
        {
          id: 2,
          img: "good-1.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: 6.99,
          maker: "Brazil",
        },
        {
          id: 3,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 4,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 5,
          img: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
      ],
    };
  },
};
</script>