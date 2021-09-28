<template>
  <div>
    <v-menu offset-y>

      <!-- troca o botão azul padrão do dropdown por um ícone de 3 pontinhos -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon class="d-none d-md-flex">mdi-dots-vertical</v-icon>
          <v-chip small class="ma-2 d-flex d-sm-flex d-md-none" color="blue-grey" outlined>
            <v-icon left>mdi-file-document-edit-outline</v-icon>
            opções
          </v-chip>
        </v-btn>
      </template>

      <!-- pra cada item do menu, renderiza os dados ícone e título (vindos de Data()) -->
      <!-- @click="item.showModal()" = chama um método incluído no próprio objeto items -->
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.showModal()"
        >
          <v-icon left >{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- o controle de abertura e fechamento dos modais ficará aqui e não no modal em si -->
    <!-- a exibição será controlada através do atributo 'modal' -->
    <!-- escuta o evento @closeModal disparado pelo componente filho, para saber quando fechar o modal -->
    <ModalEdit  
      v-if="items[0].modal" 
      @closeModal="items[0].modal = false"
      :task="task"
    />

    <ModalRemove
      v-if="items[1].modal" 
      @closeModal="items[1].modal = false"
      :task="task"
    />

  </div>
</template>

<script>
import ModalEdit from "./ModalEdit.vue"
import ModalRemove from "./ModalRemove.vue"


export default {
  // recebe os dados da task para repassar ao modal que deleta ou edita
  props: ['task'],
  components: { ModalEdit, ModalRemove },
  
  // na construção do menu, o ícone e o título são passados através de objetos :D
  // é possível incluir métodos na declaração dos objetos, como o showModal
  data: () => ({
    items: [
      {
        icon: "mdi-pencil",
        title: "editar",
        modal: false,
        showModal() { this.modal = true },
      },
      {
        icon: "mdi-trash-can",
        title: "excluir",
        modal: false,
        showModal() { this.modal = true },
      },
    ],
  }),
};
</script>