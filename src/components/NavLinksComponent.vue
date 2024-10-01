<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: Number,
      required: true,
    },
    classLink: {
      type: String,
      required: false,
    },
  },
};
</script>