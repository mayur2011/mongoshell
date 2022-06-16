var currentDate = new Date()
var date = currentDate.getDate()
var month = currentDate.getMonth()
var year = currentDate.getFullYear()

var hours = currentDate.getHours()
var minutes = currentDate.getMinutes()
var seconds = currentDate.getSeconds()

function pad(n) {
        return n<10 ? '0'+n : n;
}

try {
var dateString = pad(year)+"-"+pad(month+1)+"-"+pad(date)+"T"+pad(hours)+":"+pad(minutes)+":"+pad(seconds)
console.log("DT:"+dateString)
}
catch(err) {
console.log("Error:\n"+err)
}