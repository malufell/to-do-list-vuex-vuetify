<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="350px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar Tarefa</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome da tarefa"
                  prepend-icon="mdi-bullseye-arrow"
                  v-model="task.title"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
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
                      v-model="task.date"
                      label="Prazo"
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="task.date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="handleEdit">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["task"],
  components: {},
  data() {
    return {
      dialog: true,
      menu: false,
      date: "",
    };
  },

  methods: {
    handleEdit() {
      this.$store.dispatch("editTask", {
        title: this.task.title,
        date: this.task.date,
        id: this.task.id,
      });
      this.$emit("closeModal");
    },
  },
};
</script>