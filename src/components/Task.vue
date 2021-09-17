<template>
  <div>
    <!-- :done = retorna um booleano, true ou false. a cor blue será aplicada se for true! -->
    <v-list-item
      :class="{ 'blue lighten-4' :task.done }"
      @click="$store.dispatch('completeTask', task)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="{ 'text-decoration-line-through' :task.done }">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <TaskMenu :task="{ id: task.id, title: task.title }"/>
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

};
</script>

<style>
</style>