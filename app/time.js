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
  var month = time.getMonth() + 1;
  var date = time.getDate();
  
  switch (month) {
    case 1:  month = 'January';   break;
    case 2:  month = 'February';  break;
    case 3:  month = 'March';     break;
    case 4:  month = 'April';     break;
    case 5:  month = 'May';       break;
    case 6:  month = 'June';      break;
    case 7:  month = 'July';      break;
    case 8:  month = 'August';    break;
    case 9:  month = 'September'; break;
    case 10: month = 'October';   break;
    case 11: month = 'November';  break;
    case 12: month = 'December';  break;
               }
  return `${month} ${date}, ${year}`;
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