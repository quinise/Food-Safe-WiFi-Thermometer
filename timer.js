/* file: timer.js
 * date: 5/18/14
 * author: David Weinman
 *
 * description: functions
 * which together can model
 * the functionality of a
 * kitchen timer.
*/

function checkTime(i) {

	if (i < 0) {
		i = i * (-1);
	};
	return i;

}

function checkTens(i) {

	if (i < 10) {
		i = "0" + i;
	};
	return i;

}

function getTimeSince(starting_time) {

	var now = new Date();
	var h = now.getHours() - starting_time.getHours();
	var m = now.getMinutes() - starting_time.getMinutes();
	var s = (starting_time.getSeconds() - now.getSeconds()) % 60;
	return checkTens( checkTime(h) ) + ":" + checkTens( checkTime(m) ) + ":" + checkTens( checkTime(s) );

}

function hasPassed(starting_time, duration) {

	var curTime = new Date();
	var ending_times = duration.split(":");
	var ending_hrs = ending_times[0] * 1;
	var ending_min = ending_times[1] * 1;
	var ending_sec = ending_times[2] * 1;
	if (((curTime.getHours() - starting_time.getHours()) >= ending_hrs) && ((curTime.getMinutes() - starting_time.getMinutes()) >= ending_min) && ((curTime.getSeconds() - starting_time.getSeconds()) >= ending_sec)) {
		return true;
	}
	return false;

}

