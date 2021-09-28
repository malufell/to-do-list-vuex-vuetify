<template>
  <v-main>
    <Header />
    <slot></slot>
  </v-main>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header,
  },
};
</script>
