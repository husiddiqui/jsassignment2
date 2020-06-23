//chapter 21 - 25
//Task 1
// var a = prompt("Enter First Name");
// var b = prompt("Enter Second Name");
// var c = a +" "+ b;
// document.write("Welcome "+ " "+c);

//Task 2
// var a =prompt("Please Enter The Mobile Model");
// var c = a.length;
// document.write("My Favourite Mobile is:"+" "+a+"Length of string is"+" "+c);


//Task 3
// var a= "Pakistani";
// var b = a.indexOf('n');
// document.write("String :"+a+" "+"index of :"+" "+b);

//Task 4
// var a= "Hello World";
// var b = a.lastIndexOf('l');
// document.write("String :"+a+" "+"Last index of :"+" "+b);

//Task 5
// var a= "Pakistani";
// var b = a.charAt(3);
// document.write("String :"+a+" "+"Character at index  3:" +" "+b);

//Task 6
// var a = prompt("Enter First Name");
// var b = prompt("Enter Second Name");
// var c = a.concat(b);
// document.write("Welcome "+ " "+c);


//Task 7







//task 8




//task 9

// var a ="472";
// var c= typeof(a);
// var b = parseInt(a);
// var d = typeof(b);
// document.write("Value "+a+" "+"Type is"+" " +c+"Value :" +a+"type is "+" "+d)

 // tASK 10
// var a =prompt("Enter any number in small  letters");
// var b = a.toUpperCase();
// document.write(b);

//Task 11
// var a = prompt("Enter any string");
// var t = a.charAt(0).toUpperCase()+a.slice(1);
// document.write(t);

//task 12
// var a = 35.6;
// var b = a.toString();
// document.write(b);












//Chapter 26-30
//Task 1
// var a = prompt("Enter any number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("Number"+a+"<br>"+"round"+b+"<br>"+"floor"+c+"<br>"+"Ceil"+d);

//Task 2
// var a = prompt("Enter any negative number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("Number"+a+"<br>"+"round"+b+"<br>"+"floor"+c+"<br>"+"Ceil"+d);

//task 3

// var a = -4;
// var b = Math.abs(a);
// document.write("The absoulute value of  " +a+" "+ "is"+" "+b);

// task 4
//var a = Math.floor( Math.random() * 7 );
// document.write("Random Dice Value :"+a);


// // task 5
// var a = Math.floor( Math.random() * 3 );
// if (a==1){
//     document.write("HEad :"+a);    
// }else if(a == 2){
//     document.write("Tails :"+a);
// }


//task 6
//var a = Math.floor( Math.random() * 101 );
// document.write("Random Number is :"+a);



//Task 8
// var a = prompt("Enter Secret Number"); 
// b = Math.round( Math.random() * 11 );

// if(a == b){
// document.write("Congratulations");}
// else{
//     document.write("Sorry");
// }


//Chapter 31-34
//task 1
// var a = new Date();
// document.write(a);

// task 2
// var a = new Date();
// var b = a.getMonth();
// document.write(b);

//task 3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// document.write(c);

//task 4
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// if(c == "Sat" || c == "Sun")
// {
//     document.write("Its funday!!");
// }
// else
// document.write("its"+" "+c);

//task 5
// var a = new Date();
// var b = a.getDay();
// var c = b.toString();
// document.write(b)
// if(b <= 15)
// {
//     document.write("first 15 days")
// }
// else {
//     document.write("last 15 days")
// }


//task 7
// var a = new Date();
// var b = a.getHours();
// var c = b.toString();
// if(b >  '0')
// document.write("PM");
// else {
//     document.write("AM");
// }


//task 8




















//Chapter 35-38
//task 1

// function date()
// {
//     var a = new Date();
//     document.write(a);
// }
// date();


//task 2

// function yourname(){
//     var a = prompt("Enter first nae");
//     var b = prompt("Enter last name nae");
//     document.write(a+b);
    
// }
// yourname();


//task 3
// function add(){
//     var a = prompt("Enter first number");
//      var b = prompt("Enter second no");
//      var c = +a + +b;
//      document.write(c);
// }
// add();

//task 5 

// function sqre(  a ){
//     var b = a*a;
//     document.write(b);

// }
// sqre(8);

//task 6

// function rFact(num)
// {
//     if (num === 0)
//       { return 1; }
//     else
//       { return num * rFact( num - 1 ); }
// }
// rFact(6);

//task 7

// function count()
// {
//     var a = prompt("enter 1 no");
//     var b = prompt("enter 2 no");
//     for(var i = a; i<=b ; i++)
//     {
//         document.write(i+"<br>");
//     }
// }
// count();


//task 8