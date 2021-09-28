<template>
  <v-app-bar
    app
    prominent
    height="134"
    dark
    src="../../assets/bg.jpeg"
    class="app-bar__image"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Lista de Tarefas</v-toolbar-title>
  </v-app-bar>
</template>