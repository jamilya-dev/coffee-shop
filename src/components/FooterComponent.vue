<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link :to="links[0].link"
                ><img
                  :src="require(`@/assets/logo/${links[0].icon}`)"
                  :alt="links[0].icon"
              /></router-link>
            </li>
            <NavLinksComponent
              :text="links[1].text"
              :link="links[1].link"
              classLink="footer__item"
            />
            <NavLinksComponent
              :text="links[2].text"
              :link="links[2].link"
              classLink="footer__item"
            />
            <NavLinksComponent
              :text="links[3].text"
              :link="links[3].link"
              classLink="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavLinksComponent from "@/components/NavLinksComponent.vue";

export default {
  components: { NavLinksComponent },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo_black.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/pleasure",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contacts",
        },
      ],
    };
  },
};
</script>




