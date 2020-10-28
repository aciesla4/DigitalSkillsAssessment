import React, { useState } from "react";
import "../css/Level16.css";
import CloseIcon from "@material-ui/icons/Close";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import MinimizeIcon from "@material-ui/icons/Minimize";
import DescriptionIcon from "@material-ui/icons/Description";
import originalFiles from "../components/level16";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import PropTypes from "prop-types";

// Component for Level 16 - dragging and dropping a file
// See https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/
export default function Level16(props) {
  // a possible correct sequence of moves the user can take to get the jewel
  const correctMoves = (
      <ol>
        <li>Navigate to the Training Completion Certificate by finding it under the Academy files.</li>
        <li>Get the Training Completion Certificate by dragging and dropping it to Personal files.</li>
        <li>Get the jewel by clicking on it.</li>
      </ol>
  )

  // local state for if the jewel is shown and the list of files to be displayed
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [files, setFiles] = useState(originalFiles);

  // handles when a file begins to be dragged
  function onDragStart(event, name) {
    event.dataTransfer.setData("name", name);
  }

  // handles when a file is dragged from one side to another
  function onDragOver(event) {
    event.preventDefault();
  }

  // handles when the file is dropped and if the jewel should be shown
  function onDrop(event, cat) {
    let name = event.dataTransfer.getData("name");
    event.currentTarget.id = "Got the " + name + " file by dragging and dropping it.";
    props.logClick(event, 16);
    let newFiles = files.filter((file) => {
      if (file.name === name) {
        file.type = cat;
      }
      return file;
    });
    setIsJewelShown(name === "Training Completion Certificate");
    setFiles(newFiles);
  }

  // sorts the files in the list into two lists that are displayed on each side of the screen
  function sortFiles() {
    var sortedFiles = {
      personal: [],
      academy: [],
    };
    files.forEach((file) => {
      sortedFiles[file.type].push(
        <grid
          item
          key={file.id}
          onDragStart={(event) => onDragStart(event, file.name)}
          draggable
          className="draggable"
        >
          <DescriptionIcon fontSize="large" />
          <br />
          {file.name}
        </grid>
      );
    });
    return sortedFiles;
  }

  return (
    <Level
      logClick={props.logClick}
      mission="move the Training Completion Certificate to your files."
      hintMessage="Files can be moved from one place to another by dragging and dropping."
      dialogMessage="Your mission is complete! Dragging and dropping items can be an easy way to move them from one place to another. Click the X to receive your next mission."
      correctMoves={correctMoves}
    >
      <div className="drag-container">
        <div
          className="personal"
          onDragOver={(event) => onDragOver(event)}
          onDrop={(event) => onDrop(event, "personal")}
        >
          <div className="group-header">
            Personal
            <grid className="window-grid">
              <grid item className="window-item">
                <MinimizeIcon />
              </grid>
              <grid item className="window-item">
                <FilterNoneIcon />
              </grid>
              <grid item className="window-item">
                <CloseIcon />
              </grid>
            </grid>
          </div>
          <grid className="file-grid">{sortFiles().personal}</grid>
        </div>
        <div
          className="droppable"
          onDragOver={(event) => onDragOver(event)}
          onDrop={(event) => {
            onDrop(event, "academy");
          }}
        >
          <div className="group-header">
            Academy
            <grid className="window-grid">
              <grid item className="window-item">
                <MinimizeIcon />
              </grid>
              <grid item className="window-item">
                <FilterNoneIcon />
              </grid>
              <grid item className="window-item">
                <CloseIcon />
              </grid>
            </grid>
          </div>
          <grid className="file-grid">{sortFiles().academy}</grid>
        </div>
        {isJewelShown && <Jewel top="80%" logClick={props.logClick} />}
      </div>
    </Level>
  );
}

// defines the props the component expects
Level16.propTypes = {
  logClick: PropTypes.func,   // function that handles logging the user's clicks
}
