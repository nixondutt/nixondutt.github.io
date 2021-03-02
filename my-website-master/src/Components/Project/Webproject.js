import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./webProjectStyle";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class WebProject extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Recent Projects
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Automatic Parking space detection and allocation System
                  <br />
                </b>
                <b className={classes.writings2}> Python, OpenCv, Pytorch</b>
                <Typography variant="body1" className={classes.body}>
                From surveillance camera view, this project detects and tracks the vehicles and allocate the empty space for incoming vehicles in the parking lot.
                Generally companies use expensive sensors to keep track of vehicles in parking lot. Using computer vision and Artificial Intelligence this project gives a
                cost efficient solution only from camera views. Codes and demos can be found{" "}
                  <a
                    href="https://github.com/nixondutt/Parking-Space-Allocation/"
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
                  Facial Expression and Emotion Detection
                  <br />
                </b>
                <b className={classes.writings2}>
                  Python, Tensorflow, Keras
                </b>
                <Typography variant="body1" className={classes.body}>
                In this project, we detected 7 different expressions (Neutral, Angry, Happy, Sad, Disgust, Surprise and Fear) on human
                faces using deep Neural Networks. Till now Pre-trained(ImageNet) InceptionV3 model gave us the best accuracy of 74%
                on validation dataset. We used 7 inception blocks and on top of that we added extra 4 fully connected layers. The project
                map as of now is as follows - The computer starts taking the video by webcam. Then our modules processe each
                frame to detect a person. If detected, we will locate the face of the person in the image. After taking the face portion of
                the image, we apply our trained model(InceptionV3) on the image to detect the facial expression. As output, we will show
                a rectangle box around the face with the expression label.  Codes and demos can be found{" "}
                  <a
                    href=" https://github.com/nixondutt/Facial-Expression-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

WebProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebProject);
