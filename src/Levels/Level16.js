import React, { useState } from "react";
import "../css/Level16.css";
import CloseIcon from "@material-ui/icons/Close";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import MinimizeIcon from "@material-ui/icons/Minimize";
import DescriptionIcon from "@material-ui/icons/Description";
import originalFiles from "../components/level16";
import Level from "../components/common/Level";
import Jewel from "../components/common/Jewel";
import { useDispatch } from "react-redux";
import { changeLevel } from "../redux/slices/levelSlice";

export default function Level16(props) {
  const [isJewelFound, setIsJewelFound] = useState(false);
  const [isJewelShown, setIsJewelShown] = useState(false);
  const [files, setFiles] = useState(originalFiles);

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

  function onDragStart(event, name) {
    event.dataTransfer.setData("name", name);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event, cat) {
    let name = event.dataTransfer.getData("name");
    event.currentTarget.id = "level 16 " + name + " file dropped";
    props.logClick(event);
    let newFiles = files.filter((file) => {
      if (file.name === name) {
        file.type = cat;
      }
      return file;
    });
    setIsJewelShown(name === "Training Completion Certificate");
    setFiles(newFiles);
  }

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
      level={16}
      logClick={props.logClick}
      mission="move the Training Completion Certificate to your files."
      hintMessage="Files can be moved from one place to another by dragging and dropping."
      isJewelFound={isJewelFound}
      handleCloseDialog={handleCloseDialog}
      dialogMessage="Your mission is complete! Dragging and dropping items can be an easy way to move them from one place to another. Click the X to return to the home page and receive your next mission."
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
        {isJewelShown && <Jewel top="80%" handleFound={handleFound} />}
      </div>
    </Level>
  );
}
