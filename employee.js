//uc-6
const Num_of_working_days = 20;
const Max_hour_in_month = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let emphr = 0;

let empDailyWageArr=new Array();

while (totalEmpHrs <= Max_hour_in_month &&
    totalWorkingDays < Num_of_working_days)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    emphr= getWorkingHours(empCheck);
    totalEmpHrs +=emphr;
    empDailyWageArr.push(CalcDailyWage(emphr))
}
function CalcDailyWage(emphr){
    return emphr*wage_per_hour;
}

let empWage = CalcDailyWage(totalEmpHrs);

console.log("UC-6 Total Days: "+totalWorkingDays+" Total hours : "+totalEmpHrs+" Emp Wage : "+empWage);