import React from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";

export default function CloudSettings(props) {
    return (
        <div>
            <h1>Cloud</h1>
            <h3>Change which items are stored in the cloud</h3>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Mail settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Mail"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Contacts settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Contacts"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Calendars settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Calendars"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Reminders settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Reminders"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={props.notesOn}
                        id="Changed the Notes settings."
                        onChange={(e) => props.handleClick(e)}
                    />
                }
                label="Notes"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Photos settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Photos"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Documents settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Documents"
            />
            <br />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={true}
                        id="Changed the Videos settings."
                        onChange={(e) => props.logClick(e, 11)}
                    />
                }
                label="Videos"
            />
        </div>
    )
}