<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar tarefa </v-card-title>

        <v-col cols="12">

          <!-- campo de texto recebe o conteúdo atual da task para edição 
          v-model recebe a info atual e tbm atualiza para a nova -->
          <v-text-field 
            label="Novo título" 
            outlined
            v-model="task.title"
          ></v-text-field>

        </v-col>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn 
            color="red darken-1" 
            text 
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>

          <v-btn 
            color="primary darken-1" 
            text 
            @click="handleEdit"
          >
            Confirmar
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    data () {
      return {
        dialog: true,
      }
    },

    methods: {
      //passa ao vuex o novo título para atualizar na lista e o id pra saber qual task atualizar
      handleEdit() {
        this.$store.dispatch('editTask', { title: this.task.title, id: this.task.id});
        this.$emit('closeModal');
      }
    }
  }
</script>