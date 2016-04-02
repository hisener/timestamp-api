module.exports = (param) => {
  var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var test = new Date(param);
  
  if(/^(\-|\+)?([0-9]+)$/.test(param))
    test = new Date(parseInt(param, 10) * 1000);
    
  var unix = test.getTime() / 1000;
  var natural = months[test.getMonth()] + " " + test.getDate()
      + ", " + test.getFullYear();
  if(isNaN(test.getDate()))
    natural = null;

  return {
    "unix": unix,
    "natural": natural
  };
};