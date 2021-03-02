import React from "react";
import pp from "../../Assets/pp.jpg";
import cv from "../../Assets/CV.pdf";
import { CardMedia, Card, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./profileStyle";
import PropTypes from "prop-types";

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.root2}>
        <Typography variant="h5" className={classes.title}>
            Education
          </Typography>
          <Divider></Divider>
          <b className={classes.writings1}>
            MS in Software & Information Science
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Iwate Prefectural University, Iwate
          </Typography>
          <b className={classes.writings1}>
            B Tech. in Computer Science & Engineering
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Insititue of Engineering and Management, Kolkata, India
          </Typography>
          <b v className={classes.writings1}>
            Higher Secondary School Certificate in Science Group
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Government City College, Chittagong
          </Typography>

          <b className={classes.writings1}>
            Secondary School Certificate in Science Group
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Chittagong Goverment High School, Chittagong
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Work Experience
          </Typography>
          <Divider></Divider>
          <div style={{ display: "flex" }}>
            <div className={classes.writings}>
              <Typography className={classes.writings1}>
                System Developer
              </Typography>

              <b className={classes.writings1}>
                Cybercore
              </b>
            </div>
            <div className={classes.writings}>
              <Typography variant="body1" className={classes.writings2}>
                16 December 2020 - Present
              </Typography>
            </div>
          </div>

          <Typography variant="h5" className={classes.title}>
            Research Interest
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.research}>
            Machine Learning, Computer Vision, Statistics, Linear Alzebra, Image Processing, Probability theory, Algorithms.
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Skills
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            <b>Programming Languages : </b>
            Python, C
          </div>
          <div className={classes.skill}>
            <b>Framework : </b>
            Tensorflow, Pytorch, Django, Nodejs, React js
          </div>
          <div className={classes.skill}>
            <b>Library : </b>
            OpenCV
          </div>
          <div className={classes.skill}>
            <b>Scripting Languages : </b>
            LaTeX, Shell Scripts(Linux).
          </div>
          <Typography variant="h5" className={classes.title}>
            Awards
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.research}>
            - Awarded Japanese Government Mext Scholarship for the years 2020 - 2022 
          </Typography>
          <Typography variant="body1" className={classes.research}>
          - Toastmasters Competent Leader Award (2017): For exhibiting exemplary leadership skills and completing 10 projects on
the leadership track
          </Typography>
          <Typography variant="h5" className={classes.title}>
            CV/Resume
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            You can find my complete CV{" "}
            <a href={cv} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </div>
        </div>
        <div className={classes.img}>
          <Card>
            <CardMedia
              style={{ height: 400 }}
              //className={classes.media}
              image={pp}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
