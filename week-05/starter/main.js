/*** Arrays - basics ***/

//Create an list of two courses
const courses = ['Math', 'Design']
//Target one element
// console.log (courses[0])
//Reassign the value of the targeted element
courses[0] = 'WDI'
//Add a new element; warning!
// courses[5] = 'WDII'


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'
courses.push('WDII', 'WDIII')
//Remove the last element of the array and save it in a variable.
let course = courses.pop()
//Remove the first element on the array and save it in a variable.
console.log(courses)
    //['WDI], ['Design'], ['WDII']
course = courses.shift()
//Add a new element to the beginin of the array
courses.unshift('WDIV')
    //['WDIV', 'Design', 'WDII']

//Removes the first item, and Inserts a new one using the same function. 
console.log(courses.splice(0, 1, 'WDV' ))  //['WDIV']
// courses.splice(0, 1, 'WDV' ) //['WDV', 'Design', 'WDII']



/*** Array - Sorting ***/
console.log(courses)
//Sort the array 
courses.sort() //['Design', 'WDII', 'WDV']

const grades = [2,5,8,1,4,11,200]
// console.log( grades.sort(function(a, b){
//     return a-b
// }) ) //[1, 2, 4, 5, 8, 11, 200]

console.log( 
    grades.sort( (a, b) => a-b ) //( the result same above : (parameter) => statement) [1, 2, 4, 5, 8, 11, 200]

)


/*** Array - concatenation ***/

//Create the 'students' array that contains an object with the following properties: studentNumber, name, userName, email.
const student = [
    {
        studentNumber: 0123456, 
        name: 'Wirunput Siribunpotkul',
        userName: 'siriwi',
        email: 'siriwi@abc.com'
    }
]

// create a new array 'students' that combine 'users' and 'student' array
const students = student.concat(users)

//Create a string variable that contains all the elements of the 'courses' array
const coursesAC = courses.join('|') //Design|WDII|WDV'


//Determine if the variable has an array
// console.log( Array.isArray(coursesAC)) //false
console.log( Array.isArray(students)) //true



/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'WDII'
const targetCourse = courses.indexOf('WDII') //1

//Check if the  array includes the element 'WD'
courses.includes('WD') //'true'  that include in the array

//Find and save the student with your studentNumber; use the 'students' array

const studentAC = students.find( student => student.studentNumber === 0123456)
//{studentNumber: 42798, name: 'Wirunput Siribunpotkul', userName: 'siriwi', email: 'siriwi@abc.com'}




/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all names; use the 'students' array.
for(
    let index=0;
    index < students.length;  // giving the total value in this array is 11 or using index < 11; 
    index++
) {
    console.log( students[index].name) //targeting every element in this array in "name"
} //Wirunput Siribunpotkul,........

//Use a for...of to display the 'userName' and 'studentNumber' from 'students' array
for( const student of students ) {
    console.log( `name: ${student.userName} | number: ${student.studentNumber}`) //using `` for using ${} we can adding text before value
} //name: siriwi | number: 42798,........


//Use a for...in to display all the properties of any object
// for ( const key in students[0]) {
//     console.log( students[0][key] + ' '+key)
    
// } 
//42798 studentNumber ,Wirunput Siribunpotkul name, siriwi userName, siriwi@abc.com email

for ( const key in studentAC) {
    console.log( students[0][key] + ' '+ key)
} // same result
//Use a for...of and a for...in to display all the properties of every student from the 'students' array

for ( const student of students) {
    console.log('**********')  //using for seperate in the line

    for ( const key in student )
    console.log( students[0][key] + ' '+ key)

}


/*** Practice ***/


const $container =  document.getElementById('blogsContainer')

for (const student of students){
    $container.innerHTML += `
    <div class="col-md-6">
        <div class="ac-card">
        <div class="ac-card-image"></div>
        <div class="ac-card-info">
            <p>
                <strong id="name">${student.name}</strong><br>
                <span id="studentNumber">${student.studentNumber}</span>
            </p>
            <p id="partTime" class="hide">PART TIME</p>
            <p id="date" class="ac-card-date">${student.email}</p>
        </div>
        <img class="ac-icon" src="https://imdac.github.io/images/codepen/AC_ICON_1C_BLK_70x58.png">
        <div class="ac-card-footer">
            <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
        </div>
        </div>
    </div>
    `

}