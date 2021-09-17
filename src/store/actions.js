import db from "../services/localbase"

export default {
  //exemplo usando async await
  async addTask({ commit }, title) {
    await db.collection('tasks').add({
      id: new Date().getTime(),
      title: title,
      done: false
    });

    await commit('getTasks');
  },
  //exemplo usando then pra pegar retorno da promise
  editTask({ commit }, newTask) {
    db.collection('tasks')
      .doc({ id: newTask.id })
      .update({ title: newTask.title })
      .then(() => commit('getTasks'))
  },
  
  completeTask({ commit }, task) {
    console.log(task)
    db.collection('tasks')
      .doc({ id: task.id })
      .update({ done: !task.done })
      .then(() => commit('getTasks'))
  },

  removeTask({ commit }, id) {
    db.collection('tasks')
      .doc({ id })
      .delete()
      .then(() => commit('getTasks'))
  },
}