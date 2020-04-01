import React from 'react';
import "../css/Modal.css";
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default class Modal extends React.Component {
    render () {
        const { x, y } = this.props;
        const styles = {
            modal: {
                left: x,
                bottom: y,
            }
        }
        return (
            (this.props.show &&
                <div className="modal" style={styles.modal}>
                    <div>
                        <h2 className="modal-title">{this.props.heading}</h2>
                        {this.props.last ?
                            <IconButton style={{position: 'absolute', right: 0, top: 0}}
                                        onClick={this.props.closeModal}><CloseIcon/></IconButton> :
                            <IconButton style={{position: 'absolute', right: 0, top: 0}}
                                        onClick={this.props.openNext}><ArrowForwardIcon/></IconButton>
                        }
                    </div>
                    <div className="content">{this.props.children}</div>
                </div>
            )
        );
    }
}
