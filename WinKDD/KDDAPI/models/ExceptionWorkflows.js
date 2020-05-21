const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExceptionWorkflowsSchema = new Schema({
  name:{
    type: String,
    required : [false, 'Meta Workflow Name is required']
  },
  description:{
    type: String,
    required : [false, 'Meta Workflow Description is required']
  }
});

const ExceptionWorkflows = mongoose.model('ExceptionWorkflows',ExceptionWorkflowsSchema);
module.exports = ExceptionWorkflows;
