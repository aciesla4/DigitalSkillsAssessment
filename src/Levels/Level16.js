import React from 'react';
import Level from '../util/Level';
import Jewel from '../util/Jewel';
import "../css/Level16.css";
import CloseIcon from '@material-ui/icons/Close';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DescriptionIcon from '@material-ui/icons/Description';

class Level16 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isJewelFound: false,
            isJewelShown: false,
            academicMode: this.props.academicMode,
            files: [
                {id: "1", name: "Resume", type: "personal" },
                {id: "2", name: "Cover Letter", type: "personal" },
                {id: "3", name: "Spy Academy Application", type: "personal" },
                {id: "4", name: "Spy Academy Acceptance Letter", type: "academy" },
                {id: "5", name: "Training Notes", type: "personal"},
                {id: "6", name: "Transcripts", type: "personal"},
                {id: "7", name: "References", type: "personal"},
                {id: "8", name: "Practice Interview Questions", type: "personal"},
                {id: "9", name: "Interview Questions", type: "academy"},
                {id: "10", name: "Interview Response Form", type: "academy"},
                {id: "11", name: "Agent Interview Response", type: "academy"},
                {id: "12", name: "Agent Profile", type: "academy"},
                {id: "13", name: "Agent Progress Report", type: "academy"},
                {id: "14", name: "Training Schedule", type: "personal"},
                {id: "15", name: "Mentor Sign Up", type: "personal"},
                {id: "16", name: "Training Requirements", type: "personal"},
                {id: "17", name: "Questions for the Academy", type: "personal"},
                {id: "18", name: "Mentor and Agent Pairings", type: "academy"},
                {id: "19", name: "Preliminary Training Schedule", type: "academy"},
                {id: "20", name: "Training Completion Certificate", type: "academy"},
                {id: "21", name: "FAQs", type: "academy"},
                {id: "22", name: "Government Requirements", type: "academy"},
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

    onDragStart = (event, name) => {
        event.dataTransfer.setData("name", name)
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let name = event.dataTransfer.getData("name");

        let files = this.state.files.filter((file) => {
            if (file.name === name) {
                file.type = cat;
            }
            return file;
        })

        this.setState({
            ...this.state,
            isJewelShown: name === "Training Completion Certificate",
            files
        })
    }

    render() {
        var files = {
            personal: [],
            academy: []
        }

        this.state.files.forEach((file) => {
            files[file.type].push(
                <grid item key={file.id}
                     onDragStart={(event) => this.onDragStart(event, file.name)}
                     draggable
                     className="draggable"
                >
                    <DescriptionIcon fontSize="large" /><br/>
                    {file.name}
                </grid>
            )
        })

        return (
            <Level
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='move the Training Completion Certificate to your files.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Files can be moved from one place to another by dragging and dropping.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! <TODO> Click the X to return to the home page and receive your next mission.'
            >
                <div className="drag-container">
                    <div className="personal"
                         onDragOver={(event) => this.onDragOver(event)}
                         onDrop={(event) => this.onDrop(event, "personal")}
                    >
                        <div className="group-header">
                            Personal
                            <grid className="window-grid">
                                <grid item className="window-item"><MinimizeIcon/></grid>
                                <grid item className="window-item"><FilterNoneIcon/></grid>
                                <grid item className="window-item"><CloseIcon/></grid>
                            </grid>
                        </div>
                        <grid className="file-grid">
                            {files.personal}
                        </grid>
                    </div>
                    <div className="droppable"
                         onDragOver={(event) => this.onDragOver(event)}
                         onDrop={(event) => {this.onDrop(event, "academy")}}
                    >
                        <div className="group-header">
                            Academy
                            <grid className="window-grid">
                                <grid item className="window-item"><MinimizeIcon/></grid>
                                <grid item className="window-item"><FilterNoneIcon/></grid>
                                <grid item className="window-item"><CloseIcon/></grid>
                            </grid>
                        </div>
                        <grid className="file-grid">
                            {files.academy}
                        </grid>
                    </div>
                    {this.state.isJewelShown && <Jewel top="80%" handleFound={this.handleFound} />}
                </div>
            </Level>
        );
    }
}

export default Level16;