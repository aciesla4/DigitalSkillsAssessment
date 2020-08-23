import React from 'react';
import '../App.css';
import { Container, Box } from '@material-ui/core';
import Jewel from '../util/Jewel';
import Level from '../util/Level';

class Level1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJewelFound: false,
            academicmode: this.props.academicmode,
        }
    }

    handleFound = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: true,
        });
    };

    handleCloseDialog = (e) => {
        this.props.logClick(e);
        this.setState({
            isJewelFound: false
        });
        this.props.getLevelChange();
    };

    render() {
        return (
            <Level
                level={1}
                logClick={this.props.logClick}
                academicmode={this.props.academicmode}
                getModeSwitch={this.props.getModeSwitch}
                mission='find the jewel on the page by scrolling down.'
                openHint={this.props.openHint}
                closeHint={this.props.closeHint}
                isHintShown={this.props.isHintShown}
                hintMessage='Scrolling down means moving the screen down by pressing the down arrow key or by clicking and dragging the scroll bar (on the right) down.'
                isJewelFound={this.state.isJewelFound}
                handleCloseDialog={this.handleCloseDialog}
                dialogMessage='Your mission is complete! Sometimes there is a lot of information on one page, so you must scroll down or up to view it all. Click the X to return to the home page and receive your next mission.'
            >
                <Container>
                    <Box my={2}>
                        {[...new Array(45)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                    <Jewel top='' left='50%' handleFound={this.handleFound} />
                    <br /><br /><br /><br /><br /><br />
                </Container>
            </Level>
        );
    }
}

export default Level1;