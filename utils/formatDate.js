const moment = require('moment');

const formatDate = (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a');

module.exports = formatDate;