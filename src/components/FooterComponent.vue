<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <NavLinksComponent
              :link="links.footer.link"
              classLink="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
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
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>




