<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      dark
      class="text-center"
    >
      <v-list-item>
        <v-list-item-content>
          <v-avatar size="80">
            <img src="../../assets/avatar.jpeg" alt="Husky" />
          </v-avatar>
          <v-list-item-subtitle class="pt-3">
            Organize-se :)
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Tarefas", icon: "mdi-format-list-bulleted", to: "/" },
      { title: "Sobre", icon: "mdi-information-variant", to: "/sobre" },
    ],
  }),
}
</script>