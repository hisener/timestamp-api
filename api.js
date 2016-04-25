module.exports = (param) => {
  var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  // new Date object with parameter
  var date = new Date(param);
  
  // if parameter is numeric replace Date object
  if(/^(\-|\+)?([0-9]+)$/.test(param))
    date = new Date(parseInt(param, 10) * 1000);
    
  var unix = date.getTime() / 1000;
  var natural = months[date.getMonth()] + " " + date.getDate()
      + ", " + date.getFullYear();

  // if parameter is not valid
  // make natural null. unix is already null.
  if(isNaN(date.getDate()))
    natural = null;

  return {
    "unix": unix,
    "natural": natural
  };
};
