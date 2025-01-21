
/*
dates counter 

*/


const datesCounter = (date1,date2) => {

  date1 = date1 instanceof Date ? date1 : new Date(date1);
  date2 = date2 instanceof Date ? date2 : new Date(date2);

  const diferentMlliSec = Math.abs(date1.getTime() - date2.getTime());

  const days = diferentMlliSec / (1000 * 60 * 60 * 24);

  return days;

}


console.log(datesCounter('Dec 1, 2025','Dec 24, 2025'));