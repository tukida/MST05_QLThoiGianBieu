var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    eventname: {type: String, required: true, minlength:[3, "ít nhất 3 ký tự"], maxlength: [10, "nhiều nhất 10 ký tự"] },
    from: {type: Date, required: true},
    where: {type: String, required: true, minlength: [2, "ít nhất 2 ký tự"], maxlength: [20, "nhiều nhất 20 ký tự"]},
    descript: {type: String, required: true, minlength: [2, "ít nhất 2 ký tự"], maxlength: [20, "nhiều nhất 20 ký tự"]},
    file: {type: file, required: true}

});
module.exports = mongoose.model('Event', eventSchema);

