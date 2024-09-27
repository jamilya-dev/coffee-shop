<template>
  <div class="wrapper">
    <hero-views />
    <footer-component />
  </div>
</template>

<script>
import HeroViews from "@/views/HeroViews.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeroViews, FooterComponent },
};
</script>