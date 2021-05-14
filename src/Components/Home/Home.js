import React from "react";
import pp from "../../Assets/pp.jpg";
import { CardMedia, Card, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./homeStyle";
import PropTypes from "prop-types";

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.img}>
          <Card>
            <CardMedia
              style={{ height: 360 }}
              //className={classes.media}
              image={pp}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
        <div className={classes.writings}>
          <Typography variant="h5" className={classes.title}>
            About Me
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.writings1}>
          My name is Nixon Dutta. Currently, I am 2nd year Master's student in {" "}
          <a
              href="https://www.iwate-pu.ac.jp/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Iwate Prefectural University, Japan.
            </a>{" "}
           I am also working as a system developer at an
            IT company namely {" "}
            <a
              href="https://cybercore.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Cybercore
            </a>
            
            , which works in the fields of image processing, image recognition and artificial  intelligence. My job in Cybercore is to use deep learning 
             algorithms  to solve real world problems in the field of computer vision.
             </Typography> 

             <Typography variant="body1" className={classes.writings1}>
             After completing my Bachelor degree in Computer science and Engineering from 
              Institute of Engineering & Management, India, I came to Japan to pursue my masters degree under
            the supervision of Prof. Basabi Chakraborty.
          
          My current research work involves, trying to find the best algorithms for the detection and classification of breast lesions on digital breast tomosynthesis images.
             

             Some of my work can be found in my github profile{" "}
            <a
              href="https://github.com/nixondutt"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>
            </Typography>
          <Typography variant="body1" className={classes.writings2}>
            Apart from academic life, my newly found passion is learning new languages. Currently I am trying to pick up Japanese. In my free time I like to cook or go for swimming,
            research about blockchain and stock market.
          </Typography>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
