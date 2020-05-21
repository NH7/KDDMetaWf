import React,{useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import {
infoColor, roseColor
} from "assets/jss/material-dashboard-react.js";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([...props.checkedIndexes, props.index]);

  const [exceptionworkflows, setExceptionWorkflows] = React.useState([]);

  const [metaworkflows, setMetaWorkflows] = React.useState([]);


  const onExecuteWorkflow = ((workflowID) => {
    // const opts = {name: 'Wf22', description: 'WfDesc22'};
    // console.log(JSON.stringify(opts));
    fetch('http://localhost:8888/process',{
    })
    .then(response => console.log('responsee::', response)
      // response.json()
    )
    // .then(data => {
    //   console.log('data',data);
    //   props.onExecute(data);
    // })
    .catch(function() {
        console.log("error")});
  });

  useEffect(()=> {
    fetch('http://localhost:8888/exceptionworkflow')
    .then(response =>
       response.json()

    )
    .then(data => {
      setExceptionWorkflows(data);
    });
  },[setExceptionWorkflows]);


  useEffect(()=> {
    fetch('http://localhost:8888/metaworkflow')
    .then(response => response.json())
    .then(data => {
      setMetaWorkflows(data);
    });
  },[setMetaWorkflows]);


  const displayWfDetails= ((workflow) => {
    const idDiv = props.index===1? (<div>     <p> workflow id : {workflow._id} </p>
        <h4> Failed with MEW : </h4> <p> Meta Execution Workflow 1 </p>
        <p>MEW id: 5ebc7d023d8bb7f393bcdd44 </p></div>) : null;
    return (<div>
      <h3>{workflow.name}
      </h3>
      <p> {workflow.description} </p>
{idDiv}
    </div>);
  });

  const myIcon = ((index)=> {
    return index==1 ? {
        width: "40px", height:"40px", color: "#ef5350"
    } : {
        width: "40px", height:"40px", color : "#4dd0e1"
    }
  });


  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const { tasksIndexes, tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });
   const workflowTypes = props.index===1? exceptionworkflows: metaworkflows;
   const iconType = props.index===1? "icon": "icon2";
  return (
    <Table className={classes.table}>
      <TableBody>
        {workflowTypes.map( (workflow, index) => { return (
          <TableRow key = {index} className={classes.tableRow} selected={index==0?true: false}>
            <TableCell className={tableCellClasses}>{displayWfDetails(workflow)} </TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id="tooltip-top"
                title="Execute Workflow"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                    onClick = {()=> {onExecuteWorkflow(workflow.id)}}
                    >
                      <PlayCircleFilled
                         style={myIcon(props.index)}
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  Tasks.propTypes = {
    tasksIndexes: PropTypes.arrayOf(PropTypes.number),
    tasks: PropTypes.arrayOf(PropTypes.node),
    rtlActive: PropTypes.bool,
    checkedIndexes: PropTypes.array
  };
