import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import Jewel from "../components/common/Jewel";
import Level from "../components/common/Level";
import { useDispatch } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";

export default function Level1(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);

  const dispatch = useDispatch();

  function handleFound(e) {
    props.logClick(e);
    setIsJewelFound(true);
  }

  function handleCloseDialog(e) {
    props.logClick(e);
    setIsJewelFound(false);
    dispatch(changeLevel());
  }

  return (
    <Level
      level={1}
      logClick={props.logClick}
      mission="find the jewel on the page by scrolling down."
      hintMessage="Scrolling down means moving the screen down by pressing the down arrow key or by clicking and dragging the scroll bar (on the right) down."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Sometimes there is a lot of information on one page, so you must scroll down or up to view it all. Click the X to return to the home page and receive your next mission."
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
        <Jewel top="" left="50%" handleFound={handleFound} />
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
