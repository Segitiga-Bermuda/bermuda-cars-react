import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import locationmap from "../assets/images/location.png";
import { Jumbotron } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Cotact() {
  const classes = useStyles();

  return (
    <Fragment>
      <a href="https://www.google.co.id/maps/place/Nomad+Hostel+Kemang+-+Jakarta/@-6.2639861,106.8176641,19z/data=!4m8!3m7!1s0x2e69f229efe437bd:0x6415aed5b40e601e!5m2!4m1!1i2!8m2!3d-6.2640381!4d106.8181093">
        <img src={locationmap} style={{ width: "100%", height: "400px" }} />
      </a>
      <Jumbotron variant="top">
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Jl. Kemang Barat No.8, RT.9/RW.1, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocalPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="021 2093 2030" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="company@gmail.com" />
          </ListItem>
        </List>
      </Jumbotron>
    </Fragment>
  );
}
