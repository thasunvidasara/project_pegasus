/*theme-changer */
const themeToggleBtn = document.querySelector(".theme-toggler");
const app = document.querySelector(".app");
const mainMenu = document.querySelector(".main-menu");
const mainIcon = document.querySelector(".main-icon");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  app.classList.toggle("dark");
  mainMenu.classList.toggle("dark");
  mainIcon.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};



/*calender*/
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}


/*get-advice*/
let adviceToggler = document.querySelector('.get-advice');
let adviceBox = document.querySelector('.get-advice-open');

adviceToggler.onclick = () =>{

    adviceBox.classList.toggle('active');

    if(adviceBox.classList.contains('active')){
        document.adviceBox.classList.add('active');
    }else{
        document.adviceBox.classList.remove('active');
    }

}


/*body-nature*/
let natureToggler = document.querySelector('.container .app .main__container .charts .charts__right .charts__right__cards .card1 .p7');
let natureBox = document.querySelector('.container .app .body-nature');

natureToggler.onclick = () =>{

    natureBox.classList.toggle('active');

    if(natureBox.classList.contains('active')){
        document.natureBox.classList.add('active');
    }else{
        document.natureBox.classList.remove('active');
    }

}


/*click-effect*/
const buttons = document.querySelector('.btn');
    buttons.forEach(btn => {
        btn.addEventListner('click',function(e){
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientX - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            },1000);
        })
    })

