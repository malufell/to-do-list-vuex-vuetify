<template>
  <div>
    <v-row class="my-2 mx-2">
      <v-col cols="12" sm="3">
        <v-text-field
          label="Nome da Tarefa"
          prepend-icon="mdi-bullseye-arrow"
          v-model="newTask"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Prazo"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker 
            v-model="date" 
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" md="2">
        <v-btn block class="mt-3" @click="handleAddTask"> adicionar </v-btn>
      </v-col>
    </v-row>


    <v-subheader v-if="filtersTasksInProgress.length">
      Tarefas em andamento:
    </v-subheader>

    <TaskList :tasks="filtersTasksInProgress"/>

    <v-subheader 
      v-if="filtersCompletedTasks.length" 
      class="mt-5"
    >
      Tarefas concluídas:
    </v-subheader>

    <TaskList :tasks="filtersCompletedTasks"/>

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
import TaskList from "../components/TaskList.vue";

export default {
  components: {
    TaskList,
  },

  data() {
    return {
      newTask: null,
      date: null,
      menu: false,
    };
  },

  created() {
    this.$store.commit("getTasks");
  },

  computed: {
    filtersCompletedTasks() {
      return this.$store.state.tasks.filter((task) => task.done == true);
    },

    filtersTasksInProgress() {
      return this.$store.state.tasks.filter((task) => task.done == false);
    },
  },

  methods: {
    handleAddTask() {
      //dispatch dispara action do vuex
      this.$store.dispatch("addTask", { title: this.newTask, date: this.date });
      this.newTask = null;
      this.date = null;
    },
  },
};
</script>
