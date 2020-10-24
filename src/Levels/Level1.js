import React from "react";
import {Container, Box} from "@material-ui/core";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import PropTypes from "prop-types";

// Component for Level 1 - Scrolling to the bottom of a page
export default function Level1(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
    <ol>
      <li>Navigate to the bottom of the page by scrolling down.</li>
      <li>Get the jewel by clicking on it.</li>
    </ol>
  );

  return (
    <Level
      logClick={props.logClick}
      mission="find the jewel at the bottom of the page."
      hintMessage="You can move information on a screen by scrolling. Scrolling down means moving the screen down by pressing the down arrow key or by clicking and dragging the scroll bar (on the right) down."
      dialogMessage="Your mission is complete! Sometimes there is a lot of information on one page, so you must scroll down or up to view it all. Click the X to return to the home page and receive your next mission."
      correctMoves={correctMoves}
    >
      <Container>
        <Box my={2}>
          {[...new Array(45)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
        <Jewel top="" left="50%" logClick={props.logClick} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Level>
  );
}

// defines the props the component expects
Level1.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
