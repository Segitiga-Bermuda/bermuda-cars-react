import React, { Component } from "react";
import ReactFilestack from "filestack-react";
import Grid from "@material-ui/core/Grid";
const API_FILESTACK = process.env.REACT_APP_API_FILESTACK;
const PickerOptions = {
  accept: "image/*",
  fromSources: ["local_file_system"],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarPath: ""
    };
  }
  render() {
    return (
      <div>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ReactFilestack
                apikey={process.env.REACT_APP_API_FILESTACK}
                onSuccess={res => {
                  this.setState({
                    avatarPath: res.filesUploaded[0].url
                  });

                  console.log(this.state.avatarPath);
                }}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
