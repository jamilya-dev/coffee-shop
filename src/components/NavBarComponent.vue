<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <NavLinksComponent :link="links.header.link" classLink="header__item">
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
        classLink="header__item"
      />
    </ul>
  </header>
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
          icon: "Logo.svg",
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