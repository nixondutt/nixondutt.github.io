import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./academicProjectStyle";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";
// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
// };

class AcademicProject extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Software Projects
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                 Network simulator using distance vector routing protocol
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: JAVA{" "}
                </b>
                <Typography variant="body1" className={classes.body}>
                Made a network simulator using distance vector routing protocol by JAVA based on Bellman Ford Algorithm under the
                guidance of Prof. Pinaki Karmakar. The network simulator tests algorithm as it is not feasible to test algorithms in real
                world networks. It takes configurations of the subnet as input and provides multiple statistics of the routers and links as
                outputs. The simulation helps to achieve an optimal path that reduces the cost of routing.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Twitter Sentiment Analysis
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: Python{" "}
                </b>
                <Typography variant="body1" className={classes.body}>
                The project aims at predicting sentiment for the given tweet using python. 
                It classifies the polarity (positive or negative or neutral) of the  tweet. If the tweet has both positive and negative elements,
                 the more dominant sentiment is picked as the final label. 
                Utilised both bag of  words and word2vec representations and applied Extreme Gradient Boosting algorithm.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Mix and match web application
                  <br />
                </b>
                <b className={classes.writings2}>Technology: Perl </b>
                <Typography variant="body1" className={classes.body}>
                The objective of the project is to create a RIA (rich internet application) offering ease-of-use, efficiency and aesthetics in user experience.
                 The application is a tool where, different components are selected and assembled in a mix-and-match fashion. User's designs can be stored as CLOB in RDBMS. 
                This application enable user to create, save and view his designs. 
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Implementation of a Secure File Transfer Service using ARQ Protocols 
                  <br />
                </b>
                <b className={classes.writings2}>Technology: Java </b>
                <Typography variant="body1" className={classes.body}>
                Stop – and –Wait Protocol, Go – back – N protocol and Selective Repeat protocol 
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Flight Reservation System Using Java 
                  <br />
                </b>
                <b className={classes.writings2}>Technology: Java </b>
                <Typography variant="body1" className={classes.body}>
                Built a flight Reservation System using Java, implementing the given design in course. 
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}

AcademicProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AcademicProject);
