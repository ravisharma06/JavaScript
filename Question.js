// 21. Calculate an electricity bill using these rates: 
// up to 100 units = ₹4.2/unit,
//  101–200 = ₹6/unit,
//  201–400 = ₹8/unit,
//  above 400 = ₹13/unit.



const prompt = require('prompt-sync')();
const unit = Number(prompt("enter your unit "))
if (unit > 0 && unit <= 100) console.log(unit * 4.2)
else if (unit > 100 && unit <= 200) console.log((100 * 4.2) + (unit - 100) * 6)
else if (unit > 200 && unit <= 400) console.log((100 * 4.2) + (100 * 6) + (unit - 200) * 8)
else if (unit > 400) console.log((100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13)


