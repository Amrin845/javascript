let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let newDays = [];

for (let i = 0; i < days.length; i++) {
    let newDay = days[i].substring(0, 3);
    newDays.push(newDay);
}

console.log(newDays);
