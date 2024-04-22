import React from "react";
import TaskItem from "./components/TaskItem";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.state = {
            tasks: [
                {
                    id: "1",
                    description: "Estudar programação",
                    isCompleted: false,
                },
                {
                    id: "2",
                    description: "Ler",
                    isCompleted: true,
                },
            ],
        };
    }

    handleStateChange() {
        this.setState({
            tasks: [],
        });
    }

    render() {
        return (
            <>
                {this.state.tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
                <button onClick={this.handleStateChange}>Limpar Tarefas</button>
            </>
        );
    }
}

export default App;
