// completed 10-15-2016

// You are running a part-time dog-walking business. 
// You work from Monday to Thursday, from 9am to 3pm. Each walking slot starts on the hour, and is an hour long. 
// You only walk 1 dog per slot.
// Write a program that prints out your schedule in a tidy tabular format:

//       Mon     Tue     Wed     Thu
// 9am
// 10am  Bowser
// 11am          Fifi
// 12pm                  Spike
// 1pm
// 2pm   LadyKiller

// Soltuion //

// Declare a schedule object that has keys referencing the days of the week. 
// Each day is also an object with keys for the time slots. 
var sched = {
  mon: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  tue: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  wed: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
  thr: {
    nine: '',
    ten: '',
    elev: '',
    noon: '',
    one: '',
    two: '',
  },
}
// Here I juat print to the console while accessing the appropriate data for each day and time
function schedulePrinter() {
  console.log('       Mon     Tue       Wed       Thur')
  console.log('9am  ' + sched.mon.nine +  '		     ' + sched.tue.nine + '          ' + sched.wed.nine +  '          ' + sched.thr.nine);
  console.log('10am  ' + sched.mon.ten +  '          ' + sched.tue.ten +  '          ' + sched.wed.ten +   '          ' + sched.thr.ten);
  console.log('11am  ' + sched.mon.elev + '          ' + sched.tue.elev + '          ' + sched.wed.elev +  '          ' + sched.thr.elev);
  console.log('12pm  ' + sched.mon.noon + '          ' + sched.tue.noon + '          ' + sched.wed.noon +  '          ' + sched.thr.noon);
  console.log('1pm  ' + sched.mon.one +   '          ' + sched.tue.one +  '          ' + sched.wed.one +   '          ' + sched.thr.one);
  console.log('2pm  ' + sched.mon.two +   '          ' + sched.tue.two +  '          ' + sched.wed.two +   '          ' + sched.thr.two);
}
