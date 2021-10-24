const moment =require('moment');

exports.formattedDate = () => {
    moment().format('MMMM Do YYYY, h:mm:ss a');
}