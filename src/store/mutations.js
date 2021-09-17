import db from "../services/localbase"

export default {
  getTasks(state) {
    db.collection('tasks')
      .get()
      .then((tasksLocalbase) => state.tasks = tasksLocalbase)
      .then(console.log(state.tasks))
  },
}