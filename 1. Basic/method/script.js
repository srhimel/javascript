var john ={
    name: "John",
    yearOfBirth: 1994,
    currentAge: function(){
        console.log(this);
        console.log(2020-this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction()
        */
    }

}
john.currentAge();

/* Method Borrowing */

var mike ={
    name: "Mike",
    yearOfBirth: 1997
}
mike.currentAge = john.currentAge;
mike.currentAge();