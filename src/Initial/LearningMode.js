import React from 'react';
import { Modal, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';

class LearningMode extends React.Component {
    constructor(props){
        super(props)
        let open = this.props.learningMode;
        this.state = {
            isM1: open,
            isM2: false
        }
    }

    handleOpen2 = () => {
        this.setState({
            isM1: false,
            isM2: true
        })
    }

    handleOpen3 = () => {
        this.setState({
            isM2: false,
            isM3: true
        })
    }

    handleClose1 = () => {
        this.setState({
            isM1: false
        })
    }

    handleClose3 = () => {
        this.setState({
            isM3: false
        })
    }

    render() {
        return (
            <div>
                <Modal id="menu" open={this.state.isM1}>
                    <div style={{ top: 475, left: 25}} className="speech-bubble">
                        <div>
                            <h2>Menu Button</h2>
                            <IconButton style={{ position: 'absolute', right: 52, top: 20 }} onClick={this.handleOpen2}>
                                <ArrowForwardIcon/>
                            </IconButton>
                            <IconButton style={{ position: 'absolute', right: 2, top: 20}} onClick={this.handleClose1}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <p>Click this button to see your menu options, such as turning off learning mode.</p>
                    </div>
                </Modal>
                <Modal id="check" open={this.state.isM2}>
                    <div style={{ top: 475, left: 550}} className="speech-bubble">
                        <div>
                            <h2>Check Button</h2>
                            <IconButton style={{ position: 'absolute', right: 2, top: 20 }} onClick={this.handleOpen3}>
                                <ArrowForwardIcon/>
                            </IconButton>
                        </div>
                        <p>Click this button to enter a new level.</p>
                    </div>
                </Modal>
                <Modal id="phone" open={this.state.isM3}>
                    <div style={{ top: 475, left: 1075}} className="speech-bubble">
                        <div>
                            <h2>Phone</h2>
                            <IconButton style={{ position: 'absolute', right: 2, top: 20 }} onClick={this.handleClose3}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <p>When the phone rings, click to pick it up. You will see messages from HQ regarding your mission.</p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default LearningMode;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
//
// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }
//
// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
//
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }
//
// const useStyles = makeStyles(theme => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
//
// export default function SimpleModal() {
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);
//
//     const handleOpen = () => {
//         setOpen(true);
//     };
//
//     const handleClose = () => {
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <button type="button" onClick={handleOpen}>
//                 Open Modal
//             </button>
//             <Modal
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <div style={modalStyle} className={classes.paper}>
//                     <h2 id="simple-modal-title">Text in a modal</h2>
//                     <p id="simple-modal-description">
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </p>
//                     <SimpleModal />
//                 </div>
//             </Modal>
//         </div>
//     );
// }



