var obj = {
    unix: null,
    natural: null
  };

module.exports.timeConvert = (input) => {
  inputToObj(input);
  return obj;
}

// Get natural time
var getNatural = (time) => {
  var year = time.getFullYear();
  var month = time.getMonth();
  var date = time.getDate();
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  return `${months[month]} ${date}, ${year}`;
};

// Get UNIX time
var getUnix = (time) => {
    return time.getTime() / 1000;
};

// Convert input to number if it conntains only numbers (UNIX)
var convert = (input) => {
  var re = /\D/;
  if (input.search(re) === -1) {
    input = parseInt(input) * 1000;
  }
  return input;
};

// Controller function
var inputToObj = (input) => {
  var convertedInput = convert(input);
  // Parse converted input into Date object
  var time = new Date(convertedInput);
  // Check if time is valid date
  if (isNaN(time.getTime())) {
    // It's not a valid date
  } else {
    // It is valid date
    obj.natural = getNatural(time);
    obj.unix = getUnix(time);
  }
};