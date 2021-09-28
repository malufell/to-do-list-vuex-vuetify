<template>
  <v-app id="inspire">
      <Template>
        <router-view></router-view>
      </Template>
  </v-app>
</template>

<script>
import Template from "./components/Template/index.vue"

export default {
  components: {
    Template
  },
};
</script>