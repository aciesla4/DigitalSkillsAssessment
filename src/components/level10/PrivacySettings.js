import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export default function PrivacySettings(props) {
    return (
        <div>
            <h1>General</h1>
            <h3>Change privacy options</h3>
            <p>
                Let apps use advertising ID to make ads more interesting to you
                based on your app activity
            </p>
            <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
            />
            <p>
                Let websites provide locally relevant content by accessing my
                language list
            </p>
            <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
            />
            <p>Let the system track app launches to improve search results</p>
            <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
            />
            <p>Show me suggested content in the Settings app</p>
            <FormControlLabel
                control={<Switch checked={true} />}
                label="On"
            />
        </div>
    )
}