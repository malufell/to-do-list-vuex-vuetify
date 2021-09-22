<template>
  <div>
    <!-- :done = retorna um booleano, true ou false. a cor blue será aplicada se for true! -->
    <v-list-item
      :class="{ 'blue lighten-4' :task.done }"
      
    >
      <template v-slot:default="{}">
    <v-row>
    <v-col cols="1">
        <v-list-item-action>
          <v-checkbox @click="$store.dispatch('completeTask', task)" :input-value="task.done"></v-checkbox>
        </v-list-item-action>
    </v-col>
    <v-col cols="5" sm="5">
        <v-list-item-content >
          <v-list-item-title :class="{ 'text-decoration-line-through' :task.done }">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
    </v-col>
    <v-col cols="5" sm="5">
        <v-list-item-content>
          <v-list-item-title :class="{ 'text-decoration-line-through' :task.done }">
            {{ formatDateToDDMMYYYY }}
          </v-list-item-title>
        </v-list-item-content>
    </v-col>
    <v-col cols="1">
      <!-- taskMenu recebe esses dados pra passar ao modal -->
      <TaskMenu :task="{ id: task.id, title: task.title, date: task.date }"/>

    </v-col>
    </v-row>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "./TaskMenu.vue"

export default {
  components: { TaskMenu },
  props: ['task'],

  computed: {
    formatDateToDDMMYYYY() {
      return this.task.date.split("-").reverse().join("/");
}
  }
};
</script>

<style>
</style>