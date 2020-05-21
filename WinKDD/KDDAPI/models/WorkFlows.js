const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkflowsSchema = new Schema({
  name:{
    type: String,
    required : [true, 'Workflow Name is required']
  },
  description:{
    type: String,
    required : [true, 'Workflow Description is required']
  },
  dataFile:{
    type: String,
    required : [true, 'Input Data File in CSV is required']
  },
  processFile:{
    type: String,
    required : [true, 'Workflow definition file in XML is required']
  },

});

const Workflows = mongoose.model('Workfkows',WorkflowsSchema);
module.exports = Workflows;
