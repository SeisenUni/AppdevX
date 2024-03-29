let month = '1';
let lock ='1';
let weeks ='1';
export const choose = (value) => 
{
    month = value; 
}
export const target =(value) =>
{
    lock = value;
    month = lock;
    console.log(lock);
}
export const week =(value)=>
{
    weeks = value;
    console.log(weeks)
}
export const oldd = () => {
    switch(month) {
        case '1': return 1;
        case '2': return 4;
        case '3': return 5;
        case '4': return 1;
        case '5': return 3;
        case '6': return 6;
        case '7': return 1;
        case '8': return 4;
        case '9': return 0;
        case '10': return 2;
        case '11': return 5;
        case '12': return 0;
        default: return 0;
    }
}

export const newm = () => {
    switch(month ) {
        case '1': return 30;
        case '2': return 31;
        case '3': return 33;
        case '4': return 29;
        case '5': return 31;
        case '6': return 34;
        case '7': return 30;
        case '8': return 33;
        case '9': return 28;
        case '10': return 30;
        case '11': return 35;
        case '12': return 29;
        default: return 29;
    }
}

export const oldm = () => {
    switch(month) {
        case '1': return 31;
        case '2': return 31;
        case '3': return 29;
        case '4': return 31;
        case '5': return 30;
        case '6': return 31;
        case '7': return 30;
        case '8': return 31;
        case '9': return 31;
        case '10': return 30;
        case '11': return 31;
        case '12': return 30;
        default: return 30;
    }

}
export const getmonth = () => {
    switch(weeks) {
        case '1': return 'January';
        case '2': return 'February';
        case '3': return 'March';
        case '4': return 'April';
        case '5': return 'May';
        case '6': return 'June';
        case '7': return 'July';
        case '8': return 'August';
        case '9': return 'September';
        case '10': return 'October';
        case '11': return 'November';
        case '12': return 'December';
        default: return 'January';
    }
}
export const renderMonth = () => {
    switch(month ) {
        case '1': return 'January';
        case '2': return 'February';
        case '3': return 'March';
        case '4': return 'April';
        case '5': return 'May';
        case '6': return 'June';
        case '7': return 'July';
        case '8': return 'August';
        case '9': return 'September';
        case '10': return 'October';
        case '11': return 'November';
        case '12': return 'December';
        default: return getmonth();
    }
}
export const renderweek =()=>
{
    switch(weeks)
    {
        case '1': return '0';
        case '2': return '0';
        case '3': return '99';
        case '4': return '0';
        case '5': return '0';
        case '6': return '99';
        case '7': return '0';
        case '8': return '0';
        case '9': return '0';
        case '10': return '0';
        case '11': return '0';
        case '12': return '0';
        default: return '0';
    }
}
