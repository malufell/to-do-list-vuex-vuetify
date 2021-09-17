<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Excluir tarefa </v-card-title>
        <v-card-text>Tem certeza que deseja excluir a tarefa "{{ task.title }}"?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <!-- dispara um evento para que o componente pai feche o modal -->
          <v-btn 
            color="red darken-1" 
            text 
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>

          <!-- chama o método que irá interagir com o vuex para deletar a task da lista -->
          <v-btn 
            color="primary darken-1" 
            text 
            @click="handleRemoveTask"
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
      handleRemoveTask() {
        this.$store.dispatch('removeTask', this.task.id);
        this.$emit('closeModal');
      }
    }
  }
</script>