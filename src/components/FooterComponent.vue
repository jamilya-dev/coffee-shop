<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <NavLinksComponent
              :link="links.header.link"
              classLink="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </NavLinksComponent>

            <NavLinksComponent
              v-for="link in links.other"
              :key="link.id"
              :text="link.text"
              :link="link.link"
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
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo_black.svg",
        },
        other: [
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
      },
    };
  },
};
</script>




