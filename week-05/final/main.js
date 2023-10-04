/*** Arrays - basics ***/

//Create an list of two courses
const courses = ['Math', 'Algebra']
//Target one element
console.log( courses[0] ) 
//Reassign the value of the targeted element
courses[0] = 'Design'
//Add a new element; warning!
// courses[5] = 


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'
courses.push('WDI', 'X')
//Remove the last element of the array and save it in a variable.
const item = courses.pop()
//Remove the first element on the array and save it in a variable.
courses.unshift('WDII', 'WDIII')
//Add a new element to the beginin of the array
const course = courses.shift()


//Removes the first item, and Inserts a new one using the same function.
courses.splice(0,1, 'WDIV' )



/*** Array - Sorting ***/
// ['WDIV', 'Design', 'Algebra', 'WDI']
//Sort the array 
courses.sort()


/*** Array - concatenation ***/

//Create the 'student' array that contains an object with the following properties: studentNumber, name, userName, email.
const student = [
    {
        studentNumber: 33,
        name: 'David P',
        userName: 'platara',
        email: 'platard@algonquincollege.com'
    }
]

// create a new array 'students' that combine 'users' and 'student' array
const students = student.concat(users)

//Create a string variable that contains all the elements of the 'courses' array

console.log( courses.join(' ')  )


//Determine if the variable has an array
console.log( Array.isArray( courses.join() ) )




/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'WDII'
//['Algebra', 'Design', 'WDI', 'WDIV']
console.log( courses.indexOf('WDI') )

courses[courses.indexOf('WDI')] = 'Web Apps'

//Check if the  array includes the element 'WD'
console.log(courses.includes('WDI'))

//Find and save the student with your studentNumber; use the 'students' srray

// const studentAC = students.find( function (item){ return item.studentNumber === 4 } )

const studentAC = students.find( item => item.studentNumber === 4 )



/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all names; use the 'students' array.
for( let i = 0; i < students.length; i++  ) {
    console.log(students[i].name)
}

//Use a for...of to display the 'userName' and 'studentNumber' from 'students' array
for(const student of students){
    console.log(student.name + ' ' + student.studentNumber)
}




//Use a for...in to display all the properties of any object
const studentA = {
    studentNumber: 33,
    name: 'David P',
    userName: 'platara',
    email: 'platard@algonquincollege.com'
}

for( const key in studentA ) {
    console.log(key)
    console.log(studentA[key])
}

//Use a for...of and a for...in to display all the properties of every student from the 'students' array

for(const student of students){

    for( const key in student ) {
        console.log(key +' '+ student[key] )
    }

}


/*** Practice ***/

const $blogsContainer = document.getElementById('blogsContainer')
$blogsContainer.innerHTML = ''

for(const student of students){

    $blogsContainer.innerHTML += `
    <div class="col-md-6">
        <div class="ac-card">
        <div class="ac-card-image"></div>
        <div class="ac-card-info">
            <p>
                <strong id="name">${student.name}</strong><br>
                <span id="studentNumber">${student.studentNumber}</span>
            </p>
            <p id="partTime" class="hide">PART TIME</p>
            <p id="date" class="ac-card-date"></p>
        </div>
        <img class="ac-icon" src="https://imdac.github.io/images/codepen/AC_ICON_1C_BLK_70x58.png">
        <div class="ac-card-footer">
            <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
        </div>
        </div>
    </div>`

}
