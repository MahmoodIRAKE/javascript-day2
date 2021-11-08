function leapYear(leap_year) {
    if (leap_year % 4 !== 0 || (leap_year % 100 === 0 && leap_year % 400 !== 0)) {
        console.log("This is not a leap year.");
        return;
    }
    console.log("It is indeed a leap year");
}

leapYear(2400);
leapYear(1600);
leapYear(1500);
leapYear(1444);