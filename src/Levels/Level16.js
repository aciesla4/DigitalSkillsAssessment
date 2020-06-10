import React from 'react';
import Level from '../util/Level';
import Jewel from '../util/Jewel';
import "../css/Level16.css";

class Level16 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            isJewelShown: false,
            academicMode: this.props.academicMode,
            tasks: [
                {id: "1", taskName: "Read book", type: "inProgress", backgroundColor: "red" },
                {id: "2", taskName: "Pay bills", type: "inProgress", backgroundColor: "green" },
                {id: "3", taskName: "Go to the gym", type: "Done", backgroundColor: "blue" },
                {id: "4", taskName: "Play baseball", type: "Done", backgroundColor: "green" }
            ],
        }
    }

    handleFound = () => {
        this.setState({
            isJewelFound: true,
        })
    }

    handleCloseDialog = () => {
        this.setState({
            isJewelFound: false
        })
        this.props.getLevelChange()
    }

    onDragStart = (event, taskName) => {
        event.dataTransfer.setData("taskName", taskName)
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let taskName = event.dataTransfer.getData("taskName");

        let tasks = this.state.tasks.filter((task) => {
            if (task.taskName === taskName) {
                task.type = cat;
            }
            return task;
        })

        this.setState({
            ...this.state,
            isJewelShown: true,
            tasks
        })
    }

    render() {
        var tasks = {
            inProgress: [],
            Done: []
        }

        this.state.tasks.forEach((task) => {
            tasks[task.type].push(
                <div key={task.id}
                     onDragStart={(event) => this.onDragStart(event, task.taskName)}
                     draggable
                     className="draggable"
                     style={{ backgroundColor: task.backgroundColor }}
                >
                    {task.taskName}
                </div>
            )
        })

        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission=''
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage=''
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <TODO> Click the X to return to the home page and receive your next mission.'
            >
                <div className="drag-container">
                    <div className="inProgress"
                         onDragOver={(event) => this.onDragOver(event)}
                         onDrop={(event) => this.onDrop(event, "inProgress")}
                    >
                        <span className="group-header">In Progress</span>
                        {tasks.inProgress}
                    </div>
                    <div className="droppable"
                         onDragOver={(event) => this.onDragOver(event)}
                         onDrop={(event) => {this.onDrop(event, "Done")}}
                    >
                        <span className="group-header">Done</span>
                        {tasks.Done}
                    </div>
                    {this.state.isJewelShown && <Jewel top="75%" handleFound={this.handleFound} />}
                </div>
            </Level>
        );
    }
}

export default Level16;