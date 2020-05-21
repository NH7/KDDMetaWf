const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetaWorkflowsSchema = new Schema({
  name:{
    type: String,
    required : [false, 'Meta Workflow Name is required']
  },
  description:{
    type: String,
    required : [false, 'Meta Workflow Description is required']
  }

});

const MetaWorkflows = mongoose.model('MetaWorkfkows',MetaWorkflowsSchema);
module.exports = MetaWorkflows;
