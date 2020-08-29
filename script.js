//objectives
//get the number of days in a month
//new Date()
//Date()is a javascript constructor function
//remember js index starts with 0, so it will return 11 months not 12
let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function getNumberOfDays(year, month){
   let numDays = new Date(year, month + 1, 0).getDate();
   return numDays;
}

function renderCal(getNumDays, newYear, newMonth){
    let yearPTag = document.getElementById('year');
    yearPTag.innerText = newYear;
    let monthName = months[newMonth];
    let monthPTag = document.getElementById('month');
    monthPTag.innerText = monthName;
    let dayColumns = document.getElementsByClassName('day-column');
    for (let otherIndex = 0; otherIndex < dayColumns.length; otherIndex++){
        dayColumns[otherIndex].innerHTML = "";
    }
    let firstDay = monthName + '1,' + newYear;
    let firstDayOfMonth = new Date(firstDay).getDay();
    for (let anotherIndex = 0; anotherIndex < firstDayOfMonth; anotherIndex++){
        let blankPTag = document.createElement('p');
        let blankText = document.createTextNode(' ');
        blankPTag.style.padding = "14px";
        blankPTag.appendChild(blankText);
        let dayColumn = document.getElementById(anotherIndex.toString());
        dayColumn.appendChild(blankPTag);
    }
    for (let i = 1; i <= getNumDays; i++) {
        let dayPTag = document.createElement('p');
        dayPTag.style.fontSize = '20px';
        let dayText = document.createTextNode(i.toString());
        dayPTag.appendChild(dayText);
        let date = monthName + " " + i.toString() + ", "+ newYear;
        dayPTag.addEventListener('click',function(){
            return getDateFromCalendar(date);
        }) 
        let dayOfWeek = new Date(date).getDay();
        document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);
    }
}

function changeMonth(addMinus){
if (addMinus === 'minus'){
    if (monthChosen !== 0) {
        monthChosen -= 1;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    } else {
       monthChosen = 11;
       yearChosen -= 1;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    }
} else {
    if (monthChosen !== 11){
        monthChosen += 1;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    }
    else {
        monthChosen = 0;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    }
  }
}

function changeYear(addMinus){
    if (addMinus === 'minus'){
        yearChosen -= 1;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
    } else {
        yearChosen += 1;
        renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
        }
      
}

function getDateFromCalendar(date){
document.getElementById('date-display').innerText = date;
}
renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
