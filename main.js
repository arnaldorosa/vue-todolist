const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Fare una camminata in montagna",
                    done: true
                },
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Studiare",
                    done: true
                },
                {
                    text: "Uscire con gli amici",
                    done: true
                }
            ],
            newTask: null

        }

    },
    methods: {
        checkIfDone(index) {

            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        addTask() {
            let newObject = {};
            newObject.text = this.newTask;
            newObject.done = false;
            if (this.newTask.trim() !== '') {
                this.tasks.push(newObject);
                this.newTask = null;
            }

        }
    },
    mounted() {
    }
}).mount('#app')