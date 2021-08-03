const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove leading white space
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  },
  attachmentUrl: {
    type: String,
    trim: true //remove leading white space
  }
});

module.exports = { Todo };
