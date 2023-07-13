/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

let season = prompt('Enter the month to check the season');

// let season = 'july';

if(season == typeof(Number)) {
  console.log('please enter a valid month');
}
else if(season == 'september' || season == 'october' || season == 'november') {
  console.log('Autumn');
}
else if(season == 'december' || season == 'january' || season == 'february') {
  console.log('winter');
}
else if(season == 'march' || season == 'april' || season == 'may') {
  console.log('spring');
}
else if(season == 'june' || season == 'july' || season == 'august') {
  console.log('spring');
}