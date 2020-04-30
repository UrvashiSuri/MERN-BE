const fs = require("fs");

function returnStatus(data) {
  var dataSchema = new mongoose.Schema({
    data: String,
  });
  var User = mongoose.model("User", nameSchema);
}

module.exports = {
  returnStatus,
};
