import React, {useCallback} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import List from "@material-ui/icons/List";
import Assessment from "@material-ui/icons/Assessment";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import Tasks2 from "components/Tasks/Tasks2.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "@material-ui/core/Button";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {

  const [executionResult, setExecutionResult] = React.useState('');
  const onExecute = useCallback( (updatedResult) => {
    console.log('back in Dashboard',updatedResult);
    setExecutionResult(updatedResult);
    console.log('updated executionResult to :',executionResult);
  },[setExecutionResult]);



  const displayExecutionResults= ((result) => {
    return (<div>
      <p>{result.Result}
      </p>
    </div>);
  });

  const displayExecutionResultsStatic= ((result) => {
    return (<div>
      <div>
        <h4> Workflow 1 </h4>
        <p>accuracy: 0.659  classification_error:0.341 </p>
      </div>
      <div>
        <h4> Workflow 2 </h4>
        <p>accuracy: 0.518  classification_error:0.482 </p>
      </div>
      <div>
        <h4> Workflow 3 </h4>
        <p>accuracy: 0.401  classification_error:0.599 </p>
      </div>
      <div>
        <h4> Workflow 4 </h4>
        <p>accuracy: 0.458  classification_error:0.542 </p>
      </div>
      <div>
        <h4> Workflow 5 </h4>
        <p>accuracy: 0.751  classification_error:0.249 </p>
      </div>
      <div>
        <h4> Workflow 6</h4>
        <p>accuracy: 0.624  classification_error:0.376 </p>
      </div>
    </div>);
  });

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Exceptions:"
            headerColor="danger"
            tabs={[
              {
                tabName: "",
                tabIcon: List,
                tabContent: (
                  <Tasks2
                    index={1}
                     checkedIndexes={[]}
                    // tasksIndexes={[0, 1, 2]}
                    tasks={server}
                    onExecute={onExecute}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Choose Meta Execution Workflow:"
            headerColor="info"
            tabs={[
              {
                tabName: "",
                tabIcon: List,
                tabContent: (
                  <Tasks2
                    index={2}
                    checkedIndexes={[]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                    onExecute={onExecute}
                  />
                )
              }
            ]}
          />
        </GridItem>


      </GridContainer>
    </div>
  );
}
