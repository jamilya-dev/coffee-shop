<template>
  <main>
    <div class="banner coffepage-banner">
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
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[0].title"
                :price="products[0].price"
                :image="products[0].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[1].title"
                :price="products[1].price"
                :image="products[1].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[2].title"
                :price="products[2].price"
                :image="products[2].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[3].title"
                :price="products[3].price"
                :image="products[3].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[4].title"
                :price="products[4].price"
                :image="products[4].img"
              />
              <ProductCatdComponent
                classItem="shop__item"
                :name="products[5].title"
                :price="products[5].price"
                :image="products[5].img"
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
      title: "Our Coffee",
      products: [
        {
          id: 0,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 1,
          img: "coffee-3.jpg",
          title: "Presto Coffee Beans 1kg",
          price: 15.99,
          maker: "Brazil",
        },
        {
          id: 2,
          img: "coffee-3.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: 6.99,
          maker: "Brazil",
        },
        {
          id: 3,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 4,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
        {
          id: 5,
          img: "coffee-3.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
          maker: "Brazil",
        },
      ],
    };
  },
};
</script>