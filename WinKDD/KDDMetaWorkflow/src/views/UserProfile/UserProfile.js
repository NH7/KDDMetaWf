import React, {useCallback, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import avatar from "assets/img/LinearRegressionKDD.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [visibleWorkflow, setVisibleWorkflow] = useState(false);
  const onSubmit = ( () =>
  {
    const opts = {name: 'Wf22', description: 'WfDesc22'};
    console.log(JSON.stringify(opts));
    fetch('http://localhost:3000/users',{
      // method: 'POST',
      // body: JSON.stringify(opts)
    })
    .then(response => response.json())
    .then(data => {
      console.log('data',data)
    });
    setVisibleWorkflow(true);
  });

  const lowerGrid =  visibleWorkflow === true ? (<GridItem xs={12} sm={12} md={8}>
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>View Workflow</h4>
        {/* <p className={classes.cardCategoryWhite}>Enter Workflow Details</p> */}
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="KDD Workflow Name"
              id="company-disabled"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="KDD Workflow Description"
              id="first-name"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter>
        <Button color="primary" onClick={()=> {onSubmit()}}>Complete KDD Workflow
        </Button>
      </CardFooter>
    </Card>
  </GridItem>
): null;

return (
  <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Enter KDD Workflow Details</h4>
            {/* <p className={classes.cardCategoryWhite}>Enter Workflow Details</p> */}
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="KDD Workflow Name"
                  id="company-disabled"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="KDD Workflow Description"
                  id="first-name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>  <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Input Data File"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button color="primary" variant="contained"
                    component="label">Upload File
                    <input
                      type="file"
                      style={{ display: "none" }}
                    />
                  </Button>
                </GridItem>
              </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="KDD Workflow XML File"
                  id="city"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" variant="contained"
                  component="label">Upload File
                  <input
                    type="file"
                    style={{ display: "none" }}
                  />
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={()=> {onSubmit()}}>Create New Workflow
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      {lowerGrid}
      {/* <Box
        // component={Grid}
        // className={classes.gridItem}
        item
        xs={12} sm={12} md={4}
        display={{ xs: "none", lg: "inline" }}
        >
        <span
        display={'none'}>{lowerGrid}</span>
      </Box> */}

      <GridItem xs={12} sm={12} md={4} >
        <Card profile>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." height="100"/>
            </a>
          </CardAvatar>
          <CardBody profile>
            <h6 className={classes.cardCategory}>KDD Workflow</h6>
            {/* <h4 className={classes.cardTitle}>Alec Thompson</h4> */}
            <p className={classes.description}>
              Specify your own KDD Workflow here which can be later instantiated for execution.
              To Learn More about KDD specification, click here <a href=""> Learn More </a>
            </p>
            {/* <Button color="primary" round>
            Follow
          </Button> */}
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
</div>
);
}
