
function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = `go to the office`) {

    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(m = "*") {

    return function (name = "special") {
        return `You are ${m}${name}${m}!`;
    }
}
