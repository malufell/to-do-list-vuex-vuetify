<template>
  <div>
    <!-- :done = retorna um booleano, true ou false. a cor blue será aplicada se for true! -->
    <v-list-item>
      <template v-slot:default="{}">
        <v-row>
          <v-col cols="1">
            <v-list-item-action>
              <v-checkbox
                @click="$store.dispatch('completeTask', task)"
                :input-value="task.done"
              ></v-checkbox>
            </v-list-item-action>
          </v-col>
          <v-col cols="6" class="align-self-end">
            <v-list-item-content :class="{ 'blue-grey--text': task.done }">
              <v-list-item-title>
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col cols="2" class="align-self-end text-end">
            <v-list-item-content :class="{ 'blue-grey--text': task.done }">
              <v-list-item-title class="text-body-2">
                {{ formatDateToDDMMYYYY }}
              </v-list-item-title>
            </v-list-item-content>
          </v-col>

          <v-col cols="1" class="align-self-end text-center">
            <v-list-item-content>
              <v-list-item-title>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      v-if="!task.done"
                      color="secondary"
                      outlined
                      small
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left> mdi-timer-sand </v-icon>
                      {{ calcDaysToEnd }}
                    </v-chip>
                  </template>
                  <span>{{ calcDaysToEnd }} dia(s) até o prazo</span>
                </v-tooltip>
              </v-list-item-title>
            </v-list-item-content>
          </v-col>

          <v-col cols="1" class="align-self-end text-end">
            <v-list-item-content>
              <v-list-item-title>
                <v-chip small :class="checkStatus.color">
                  {{ checkStatus.text }}
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-col>

          <v-col cols="1" class="align-self-end text-end">
            <!-- taskMenu recebe esses dados pra passar ao modal -->
            <TaskMenu
              :task="{ id: task.id, title: task.title, date: task.date }"
            />
          </v-col>
        </v-row>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "./TaskMenu.vue";

export default {
  components: { TaskMenu },
  props: ["task"],

  computed: {
    calcDaysToEnd() {
      const dateNow = new Date().getTime();
      const deadline = new Date(this.task.date).getTime();
      let daysToEnd = parseInt((deadline - dateNow) / 1000 / 60 / 60 / 24 + 1);
      if (daysToEnd < 0) {
        daysToEnd = 0;
      }
      return daysToEnd;
    },

    formatDateToDDMMYYYY() {
      return this.task.date.split("-").reverse().join("/");
    },

    checkStatus() {
      const dateNow = new Date().getTime();
      const deadline = new Date(this.task.date).getTime();
      let daysToEnd = parseInt((deadline - dateNow) / 1000 / 60 / 60 / 24 + 1);

      let status;
      if (this.task.done) {
        status = { text: "concluído", color: "teal lighten-3" };
      }
      if (daysToEnd >= 0 && !this.task.done) {
        status = { text: "no prazo", color: "blue lighten-3" };
      }
      if (daysToEnd < 0 && !this.task.done) {
        status = { text: "atrasado", color: "red accent-1" };
      }
      return status;
    },
  },
};
</script>

<style>
</style>