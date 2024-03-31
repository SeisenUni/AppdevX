let month = '1';
let lock ='1';
let weeks ='1';
let canbuild = false;
let startday =0;
let know =0;
export const startd=(value)=>
{
    startday = value;
}
export const stacked=(value)=>
{
    know = know +value;
}
export const dequeue=()=>
{
    return know;
}
export const gettd =()=>
{
    return startday;
}
export const gotcommand =(value) =>
{
    return canbuild;
}
export const sendcomand =()=>
{
    canbuild = value;
}
export const choose = (value) => 
{
    month = value; 
}
export const target =(value) =>
{
    lock = value;
    month = lock;
    console.log("glow target");
    console.log(lock);
}
export const week =(value)=>
{
    weeks = value;
    console.log("glow week");
    console.log(weeks)
}
export const getweek =()=>
{
    return weeks;
}
export const gotmonth=()=>
{
    switch(month) {
        case '1': return '01';
        case '2': return '02';
        case '3': return '03';
        case '4': return '04';
        case '5': return '05';
        case '6': return '06';
        case '7': return '07';
        case '8': return '08';
        case '9': return '09';
        case '10': return '10';
        case '11': return '11';
        case '12': return '12';
        default: return 0;
    }
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
        case '3': return 34;
        case '4': return 29;
        case '5': return 32;
        case '6': return 34;
        case '7': return 30;
        case '8': return 33;
        case '9': return 28;
        case '10': return 31;
        case '11': return 33;
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
    switch(month) {
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
export const maxmonth =()=>
{ // 1 have 31 2 have 29, 0 have 30 
    switch(month)
    {
        case '1': return '1';
        case '2': return '2';
        case '3': return '1';
        case '4': return '0';
        case '5': return '1';
        case '6': return '0';
        case '7': return '1';
        case '8': return '1';
        case '9': return '0';
        case '10': return '1';
        case '11': return '0';
        case '12': return '1';
        default: return '1';
    }
}

//////Function of gen week zone//////////

export const stoldd=()=>
{
    switch(month) {
        case '1':switch(weeks)
        {
            case '1': return '31';
            case '2': return '6';
            case '3': return '13';
            case '4': return '20';
            case '5': return '27';
            default: return '31';
        };
        case '2':switch(weeks)
        {
            case '1': return '28';
            case '2': return '3';
            case '3': return '10';
            case '4': return '17';
            case '5': return '24';
            default: return '28';
        };
        case '3':switch(weeks)
        {
            case '1': return '25';
            case '2': return '2';
            case '3': return '9';
            case '4': return '16';
            case '5': return '23';
            case '6': return '30';
            default: return '25';
        };
        case '4':switch(weeks)
        {
            case '1': return '31';
            case '2': return '6';
            case '3': return '13';
            case '4': return '20';
            case '5': return '27';
            default: return '31';
        };
        case '5':switch(weeks)
        {
            case '1': return '28';
            case '2': return '4';
            case '3': return '11';
            case '4': return '18';
            case '5': return '25';
            default: return '28';
        };
        case '6':switch(weeks)
        {
            case '1': return '26';
            case '2': return '1';
            case '3': return '8';
            case '4': return '15';
            case '5': return '22';
            case '6': return '29';
            default: return '26';
        };
        case '7':switch(weeks)
        {
            case '1': return '30';
            case '2': return '6';
            case '3': return '13';
            case '4': return '20';
            case '5': return '27';
            default: return '30';
        };
        case '8':switch(weeks)
        {
            case '1': return '28';
            case '2': return '3';
            case '3': return '10';
            case '4': return '17';
            case '5': return '24';
            default: return '28';
        };
        case '9':switch(weeks)
        {
            case '1': return '1';
            case '2': return '7';
            case '3': return '14';
            case '4': return '21';
            case '5': return '28';
            default: return '1';
        };
        case '10':switch(weeks)
        {
            case '1': return '29';
            case '2': return '5';
            case '3': return '12';
            case '4': return '19';
            case '5': return '26';
            default: return '29';
        };
        case '11':switch(weeks)
        {
            case '1': return '27';
            case '2': return '2';
            case '3': return '9';
            case '4': return '16';
            case '5': return '23';
            default: return '27';
        };
        case '12':switch(weeks)
        {
            case '1': return '1';
            case '2': return '7';
            case '3': return '14';
            case '4': return '21';
            case '5': return '28';
            default: return '1';
        };
        default:
        switch(weeks)
        {
            case '1': return '31';
            case '2': return '7';
            case '3': return '14';
            case '4': return '21';
            case '5': return '28';
            default: return '31';
        };
    }
}

export const limitold =()=>
{
    switch(month) 
    {
        case '1': return '1';
        case '2': return '4';
        case '3': return '5';
        case '4': return '1';
        case '5': return '3';
        case '6': return '6';
        case '7': return '1';
        case '8': return '4';
        case '9': return '0';
        case '10': return '2';
        case '11': return '5';
        case '12': return '0';
        default: return 1;
    }
}
