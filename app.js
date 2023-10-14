const dayIndex = new Date().getDay();
const getDayName = (dayIndex) =>{
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[dayIndex];
}
const dayName = getDayName(dayIndex)
var today = new Date();

function getdate(){
console.log(today.getDay()); // sunday = 0, monday = 1, etc..
}
