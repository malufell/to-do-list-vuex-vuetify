<template>
  <div>
    <drop-list :items="tasks" @reorder="$event.apply(tasks)">
      <template v-slot:item="{ item, reorder }">
        <drag :key="item.id" :data="item">
          <Task
            style="background-color: white"
            :style="
              reorder
                ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                : {}
            "
            :task="item"
          />
        </drag>
      </template>
    </drop-list>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import Task from "../components/Task.vue";

export default {
  props: ["tasks"],
  components: {
    Drag,
    DropList,
    Task,
  },
};
</script>

<style>
</style>