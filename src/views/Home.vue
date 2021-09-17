<template>
  <div>
    <v-col cols="12">
      <v-text-field 
        label="Adicionar Tarefa" 
        filled 
        v-model="newTask"
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>

    <TaskList />

    <center 
      v-if="!$store.state.tasks.length" 
      class="animate__animated animate__zoomIn"
    >
      <v-icon size="100" color="primary">mdi-check</v-icon>
      <div class="text-h5 primary--text">Nenhum item na lista de tarefas</div>
    </center>

  </div>
</template>

<script>
import TaskList from "../components/TaskList.vue"

export default {
  components: {
    TaskList
  },

  data() {
    return {
      newTask: null,
    };
  },

  created() {
    this.$store.commit('getTasks')
  },

  methods: {

    handleAddTask() {
      //dispatch dispara action do vuex
      this.$store.dispatch('addTask', this.newTask) 
      this.newTask = null;
    }
  }
};
</script>
