import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./contactStyle";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.body}>
          <Typography variant="h5" className={classes.title}>
            Contact Address
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.writing}>
            Nixon Dutta
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Graduate Student, Faculty of Software and Information Science
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Iwate Prefectural University Japan
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Email: g231s025@s.iwate-pu.ac.jp 
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Personal Email : nixondutta402@gmail.com
          </Typography>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
