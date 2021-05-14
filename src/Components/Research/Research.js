import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./researchStyle";
import protrack from "../../Assets/ProTrack.pdf";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class Research extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>

        <div className={classes.root2}>
        <Typography variant="h5" className={classes.title}>
            Current Research
          </Typography>
          <Divider></Divider>
          <List>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Abnormality Detection in Digital Breast Mammography
                  <br />
                </b>
                <Typography variant="body1" className={classes.body}>
                 I propose a detection model for masses, calcification and other irregularities in digital mammography images by making a Computer Aided Diagnosis(CAD) system using
                 anomaly detection and localization. Source code is available{" "}
                  <a
                    href="https://github.com/nixondutt/Abnormality-Detection-in-Digital-Breast-Mammography"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                 Digital Breast Tomosynthesis Lesion Detection and Classification
                  <br />
                </b>
                <Typography variant="body1" className={classes.body}>
                  Currently I am trying to find the best algorithm to detect lesion from digital breast tomosynthesis images and classify between benign and malignant tumor.
                  Generally, breast imaging radiologists read the mammograms. All the radiologists need to be fellowship trained and specialized in mammography breast MRI and breast ultrasound.
                  And not all radiologist are breast imaging specialist. Therefore, a computer aided diagnostic system is needed to help health practitioner in case Breast imaging radiologists are not available. 
                  My objective is to build a computer aided diagnostic system to help detect the lesion from 3-D mammography and help distinct between benign and malignant tumor. 



                </Typography>
              </ListItemText>
            </ListItem>


          </List>
        <Typography variant="h5" className={classes.title}>
            Publication
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                An Annotation System to Annotate Healthcare Information from Tweets
                  <br />
                </b>
                <b className={classes.writings2}>
                Conference - International Conference on Emerging Technology in Modelling and Graphics, IEMGRAPH 2018, 6th to 7th Sep, 2018.
                </b><br />
                <b className={classes.writings2}>
                Publication - Springer's Advances in Intelligent Systems and Computing Series
                </b>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Using Browser Cookies for Event Monitoring and User Verification of an Account
                  <br />
                </b>
                <b className={classes.writings2}>
                Paul, P., Biswas, B. A., Khalid, Z., Biswas, S., Dutta, N., Saha, H. N., Das, M. (2018).<br />
                </b>
                <b className={classes.writings2}>
                2018 IEEE 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON). <br />
                </b>
                <b className={classes.writings2}>
                doi: 10.1109/iemcon.2018.8615105 <br />
                </b>
              </ListItemText>
            </ListItem>
          </List>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                An Internet of Things (IoT) Based System to Analyse Real-time Collapsing Probability of Structures
                  <br />
                </b>
                <b className={classes.writings2}>
                Paul, P., Dutta, N., Biswas, B. A., Das, M., Biswas, S., Khalid, Z., Saha, H. N. (2018).
                </b><br />
                <b className={classes.writings2}>
                Conference - 2018 IEEE 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON).
                </b>
                <b className={classes.writings2}>
                doi:10.1109/iemcon.2018.8614743
                </b>
              </ListItemText>
            </ListItem>



        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}

Research.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Research);
