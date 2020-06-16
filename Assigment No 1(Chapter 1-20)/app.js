//Chapter No 1 (Alerts)

//Task N0 1
 alert("WELCOME")

//Task N0 2
alert("Error! Please Enter Valid Password")

//Task N0 3
alert("Welcome To Js Land... \nHappy Coding")

//Task N0 4
alert("Welcome To Js Land...")
alert("Happy Coding!")

//Task N0 5
a=prompt("Enter Your Name ")
alert("Hello... I can run Throug my web console")
document.write("<h1>WELCOME "+a.toUpperCase()+"<h1>")

//Task N0 6
alert("My First Project In Web And Mobile Courses")

//Task N0 7

//Chater 2  (Variables for Strings)

//Task N0 1
var username
var MyName="Muhammad Zubair Minhas"

var message="Hello World"

alert(message)
var age=20
var cer="Certified Mobile Aplication Development"
alert(MyName)
alert(age+" Year Old")
alert(cer)
document.writeln("NAME :"+MyName)
document.writeln("<br> Age :"+age)
document.writeln("<br>Certified :"+cer)

//Task N0 2
var z="PIZZA"
alert(z.slice(0,5)+"\n"+z.slice(0,4)+"\n"+z.slice(0,3)+"\n"+z.slice(0,2)+"\n"+z.slice(0,1))

//Task N0 3
var email = "mzhassan111@gmail.com"
alert("my email address :"+email)

//Task N0 4
var book="A smater Way To Learn JavaScript"
alert("I am Trying To Learn This Book."+book)


//Task N0 5
document.write("Yah! I Can Write Html Content Through Javascript")

 //Task No 6
mes="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(mes)

//chapter No 3()
 //Task No 1
var a = 20;
alert("I am "+a+" Year Old")

 //Task No 2
var t = 5;
alert("You Have Visited This sities  "+t+" Times")


 //Task No 3
var by=1999
var ty=typeof(by)
document.write("My Birth Year is :"+by)
document.writeln("<br> Data Type Of My Declare Variable is :"+ty)

 //Task No 4
var name = "john Doe"
var pt = "T-Shirt"
var q = 5
document.writeln( name + " ordered " + q + " " + pt + " on Xyz Clothing Store")

//Chapter 4()

 //Task No 1
var name="john Doe" ,pt="T-S ", q=5
document.writeln(+name+" ordered "+q+" "+pt+"on Xyz Clothing Store")

 //Task No 2
//legal Variable

a = 5
var _b = "new"
var  a1= 2.34
var  myvar="first Variable"
var _a6=23

//Illegal Variable


 //Task No 3
document.writeln("Rules for naming JS variables")

document.write("Variable names can only contain , numbers , $ and _.For example: $my_1stVariable")
document.write("<br>Variable must begin with a letter, $ or _.For example : $name,_name or name")
document.write("<br>Variable names are case sensitive")
document.write("<br>Variable names should not be Js Keywords")

//CHAPTER NO 5()
 //Task No 1
a = eval(prompt("Enter First Number :"))
b = eval(prompt("Enter Second Number"))
document.write("Sum Of " + a + " and " + b + " is :" + (a + b) )

 //Task No 2
a=eval(prompt("Enter First Number :"))
b=eval(prompt("Enter Second Number"))
document.write("Subtraction Of "+a+" and "+b+" is :"+(a-b))
document.write("Multiplication Of "+a+" and "+b+" is :"+(a*b))
document.write("Division Of "+a+" and "+b+" is :"+(a/b))
document.write("Modulas Of "+a+" and "+b+" is :"+(a%b))

 //Task No 3
var n
document.write("<h1>")
document.write("Value after variable declaration is " + n)
n = 5
document.write("<br> Initial Value : " + n)
n += 1
document.write("<br>Value after increment is : " + n)
n = n + 7
document.write("<br>Value After Addition is : " + n)
n -= 1
document.write("<br>Value after decrement is : " + n)
n = n % 3
document.write("<br>The remainder is : " + n) 

 //Task No 4
a=600
quan=eval(prompt("Enter Quantity To Buy Ticket :"))
total=a*quan
document.write("Total cost to buy "+quan+" tickets to a movie is  "+total+"PKR")

 //Task No 5
a = eval(prompt("Enter Number To Display Table :"))
c = 1
document.write("<h1>Table of :" + a)
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)
c = c + 1
document.write("<br>" + a + " * " + c + " = " + a * c)

 //Task No 6
var c =prompt("Enter Temperature in Celuis :")
f = (c*9/5)+32
document.write(+c+"C is "+f+"F")

var f = 70
cel = (f-32)*5/9
document.write("<BR>"+f+"F is "+cel+"C ")

 //Task No 7
const p1 = 650
const p2 = 100
var shp = 100
q1 = eval(prompt("Enter Quantity Of Item 1 is :"))
q2 = eval(prompt("Enter Quantity Of Item 2 is :"))
t1 = p1 * q1
t2 = p2 * q2
total = t1 + t2 + shp
document.write("Shoping Cart ")
document.write("Price Of item 1 is : " + p1 )
document.write("Quantity Of item 1 is : " + q1 )
document.write("Price Of item 2 is : " + p2 )
document.write("Quantity Of item 2 is : " + q2 )
document.write("Shipping charges : " + shp )


document.write("<br><h1 style='color:brown;'>Total Cost of your order is  : " + total )

 //Task No 8
const US1 = 104.80
const SR = 28
a = 10
var b = 25
t1 = US1 * a
t2 = SR * b
total = t1 + t2
document.write("Currency Converter ")
document.write("<br>Total Currency in PKR : " + total )


 //Task No 9
a=2
a = (a+5)*10/2
document.write("Result of  (a+5)*10/2 This Equation is :"+a)

 //Task No 10
document.write("<h1 style='color:red;font-size:80px'>Age Calculator </h1>")
cy = eval(prompt("Enter Current Year :"))
by = eval(prompt("Enter Birth Year :"))
age = cy - by
document.write("<br>Current Year :" + cy )
document.write("<br>Birth Year :" + by )
document.write("<br>Your Age is  :" + age)

 //Task No 11
var radius = eval(prompt("Enter Radius :"))
const pi = 3.142
c = 2 * pi * radius
A = pi * radius ** 2
document.write("<br>The Geometrizer ")
document.write("<br>Radius Of a Circle :" + radius )
document.write("<br>The Circumference Of a Circle is  :" + c )
document.write("<br>Area Of a Circle :" + A )

 //Task No 12
a = prompt("Enter Favourite Snack :")
var age = eval(prompt("Enter Current Age :"))
var maxage = eval(prompt("Enter Maximum Age :"))
var snpd = eval(prompt("Enter Amount Of Snacks Per day :"))
tage=maxage-age
need = tage*snpd

document.write("<font color='blue'><h1 style='color:red;font-size:80px'>The Lifetime Suly Calculator </h1>")
document.write("Favourite Snacks :"+a)
document.write("<br>Calculate Age  :"+age)
document.write("<br>Estimated Maximum Age  :"+maxage)
document.write("<br>Amount of snacks per day  :"+snpd)
document.write("<br>You Will need  :"+need+" "+a+" To last you Until The Rie old age of "+ maxage)


 //Task No 13
document.write("<H1 style='color:red;font-size:80px'>Mark Sheet</h1>")
tm=eval(prompt("Enter Total Marks :"))
obmark=eval(prompt("Enter Obtainer Marks :"))
per=(obmark/tm)*100
document.write("<br>Total Marks : "+tm)
document.write("<br>Marks Obtained : "+obmark)
document.write("<br>Percentage : "+per)

//CHAPTER 6 TO 9
 //Task No 1
 a = 10
document.write("Result :")
document.write("<br>The Value of a is :"+a)
document.write("<br>******************")
document.write("<br>The Value of ++a is :"+ ++a)
document.write("<br>The Value of a is :"+ a)
document.write("<br>******************")
document.write("<br>The Value of a++ is :"+ a++ )
document.write("<br>The Value of a is :"+ a)
document.write("<br>******************")
document.write("<br>The Value of --a is :"+ --a )
document.write("<br>The Value of a is :"+ a)
document.write("<br>******************")
document.write("<br>The Value of a++ is :"+ a-- )
document.write("<br>The Value of a is :"+ a)
document.write("<br>******************")

 //Task No 2
a=2,b=1;
document.write("<br>Value Of a and b is :"+a+','+b)
a = --a
document.write("<br>Result Of --a :"+ a+"")
b = --b
c = a - b
document.write("<br>Result of  --a - --b : " + c+"")
b = ++b
d =  c + b
document.write("<br>Result of  --a - --b + ++b : "+ d+"")
b = b--
e = d + b
document.write("<br>Result of --a - --b + ++b + b-- :"+e+"")
document.write("<br>******************************************************************</h>")
document.write("<br> After Execution All Equation value of a :" + a+"")
document.write("<br> After Execution All Equation Value of b :" + b+"")

document.write("<br> After Execution All Equation Result :" + e)

 //Task No 3
var user=prompt("Enter Your Name :")
alert("Welcome "+user )
document.write("<br>Welcome "+user +" "+" To Visit My Website ")

 //Task No 4
a=eval(prompt("Enter Number To Display Table :"))
if (a != undefined){
   c=1
document.write("Table of :"+a)
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)

}
else 
{
    a=5
   c=1
document.write("Table of :"+a)
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)
c=c+1
document.write("<br>"+a+" * "+ c +" = "+a*c)


}



 //Task No 5
m1=eval(prompt("Enter English Subject Marks :"))
m2=eval(prompt("Enter Math Subject Marks :"))
m3=eval(prompt("Enter Urdu Subject Marks :"))
document.write("<center><table border='1'>")
document.write("<tr><th><font color='red' size='5'>Student</font></th><th><font color='red' size='5'>Total Marks</font></th><th><font color='red' size='5'>Obtained Marks</font></th><th><font color='red' size='5'>Percentage</th></tr></font>")

document.write("<tr>")
document.write("<td align='center'><font color='blue' size='5' >English</td></font>")
document.write("<td align='center'><font color='blue' size='5' >100</td>")
document.write("<td align='center'><font color='blue' size='5' >"+m1+"</td>")
document.write("<td align='center'><font color='blue' size='5' >"+(m1/100)*100+"%</td></tr>")

document.write("<tr>")
document.write("<td  ><font color='blue' size='5'>Math</td>")
document.write("<td  align='center'><font color='blue' size='5' >100</td>")
document.write("<td  align='center'><font color='blue' size='5' >"+m2+"</td>")
document.write("<td align='center'><font color='blue' size='5' >"+(m2/100)*100+"%</td></tr>")

document.write("<tr>")
document.write("<td><font color='blue' size='5' align='center'>Urdu</td>")
document.write("<td  align='center'><font color='blue' size='5'>100</td>")
document.write("<td  align='center'><font color='blue' size='5' >"+m3+"</td>")
document.write("<td  align='center'><font color='blue' size='5' >"+(m3/100)*100+"%</td></tr>")

document.write("<tr>")
document.write("<td></td>")
document.write("<td><font color='blue' size='5' style='margin-left:70px'>"+300+"</td>")
document.write("<td><font color='blue' size='5' style='margin-left:90px' >"+ eval(m1+m2+m3) +"</td>")
document.write("<td><font color='blue' size='5' style='margin-left:80px' >"+(eval(m1+m2+m3)/300)*100+"%</td></tr></center>")

 //CHAPTER 9 TO 11
 //Task No 1

city = prompt("Enter City :")
if (city.toLowerCase() == "karachi"){
    document.write("<br> Welcome To City Of Lights ")
}


 //Task No 2
gen = prompt("Enter Gender :")
if (gen.toLowerCase() == "male"){
    document.write("<br>Good Morning Sir ")
}
if (gen.toLowerCase() == "female"){
    document.write("<br>Good Morning Ma'am ")

}

 //Task No 3
lg = prompt("Enter Traffic Signal :")
if (lg.toLowerCase() == "red") {
    document.write("<br>Must Stop ")
}
if (lg.toLowerCase() == "green") {
    document.write("<br>Move Now ")

}
if (lg.toLowerCase() == "orange") {
    document.write("<br>Ready To Move ")

} 

 //Task No 4
a = eval(prompt("Enter Input Remaining Fuel In Car :"))
if (a <0.25){
    document.write("Please Refill The Fuel In Your Car ")
}
else
{
    document.write("Your Petrol Is More Than 0.25 Litre ")
}

 //Task No 5
a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


 //Task No 6
obmark = eval(prompt("Enter Obtained Marks :"))
tmak = 300
per = obmark / tmak * 100
document.write("Marks Sheet")
document.write("<br>Total Mark : " + tmak )
document.write("<br>Obtained Mark : " + obmark )
document.write("<br>Percentage : " + per )

if (per >= 80) {
    document.write("<br>Grade : A-one")
    document.write("<br>Remark : Excellent")
}
else if (per >= 70) {
    document.write("<br>Grade : A")
    document.write("<br>Remark : Good")

}
else if (per >= 60) {
    document.write("<br>Grade : B")
    document.write("<br>Remark : You need to Improve")

}
else {
    document.write("<br>Grade : F")
    document.write("<br>Remark : Sorry")

}

 //Task No 7
a = 4
sel = eval(prompt("Enter Number :"))
if (a == sel){
    alert("Correct Anwer :")

}
else if (++sel == a){
   
    alert("good")
}
else{
    alert("WORNG")
}

 //Task No 8
num = (prompt("Enter  Number"))
if (eval(num) % 3 == 0){
    alert("Your Number "+num +" is divisible by 3")
    document.write("<h1 style='color:green'>Your Number "+num +" is divisible by 3</h1>")
}
else{
    alert("Your Number "+num +" is not divisible by 3")
    document.write("<h1 style='color:red'>Your Number "+num +" is not divisible by 3</h1>")

}

 //Task No 9
num = (prompt("Enter  Number"))
if (eval(num) % 2 == 0) {
    alert("Your Number " + num + " is Even Number")
    document.write("<h1 style='color:green'>Your Number " + num + " is Even Number</h1>")
}
else {
    alert("Your Number " + num + " is odd Number")
    document.write("<h1 style='color:red'>Your Number " + num + " is odd Number</h1>")

}

 //Task No 10
t = eval(prompt("Enter Temperature :"))
if (t>=40){
    alert("It is too Hot Outside")
    document.write("<h1 style='color:red'>It is too Hot Outside</h1>")
}
else if(t >=30){
    alert("The Weather today is Normal")
    document.write("<h1 style='color:red'>The Weather today is Normal</h1>")
}
else if (t >=20){
    alert("Today's Weather is cool")
    document.write("<h1 style='color:red'>Today's Weather is cool</h1>")
}
else if(t >=10){
    alert("OMG Today's Weather is so cool")
    document.write("<h1 style='color:red'>OMG Today's Weather is so cool</h1>")

}
else{
    alert("OMG Today's Weather is so cool")
    document.write("<h1 style='color:red'>OMG Today's Weather is so cool</h1>")

}

 //Task No 11
n1 = eval(prompt("Enter First Number :"))
n2 = eval(prompt("Enter Second Number :"))
op = prompt("(+ , - , * , /, % ) \n SELECT OPERATOR ")
if (op == "+"){
    document.write("<h1 style='color:green'>You Select Addition Operation</h1>")
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
}
else if (op == "-"){
    document.write("<h1 style='color:green'>You Select Subtraction Operation</h1>")
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
}
else if (op == "*"){
    document.write("<h1 style='color:green'>You Select Multiplication Operation</h1>")
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
}
else if (op == "/"){
    document.write("<h1 style='color:green'>You Select Division Operation</h1>")
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
}
else if (op == "%"){
    document.write("<h1 style='color:green'>You Select Moldule Operator</h1>")
    document.write("<h1 style='color:red'>Result of "+n1+" "+op+" "+ n2 + ": "+ eval(n1+op+n2)+"</h1>")
}
else{
    document.write("<h1 style='color:green'>You Select Incorrect Operator</h1>")
    
}

 //CHAPTER 12 To 13
 //Task No 1
a = prompt("Enter Character :")

b = a.charCodeAt(0)

if (a.length == 1){
    
if (b>=65 && b<=90){
    document.write("<h1 style='color:red'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
    document.write("<h1 style='color:green'>You Enter Capital Alphabet </h1>")
}
else if (b>=97 && b<=122){
    document.write("<h1 style='color:red'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
    document.write("<h1 style='color:green'>You Enter Small Alphabet </h1>")

}
else if (b>=49 && b<=57){
    document.write("<h1 style='color:red'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
    document.write("<h1 style='color:green'>You Enter Digit </h1>")

}
else if(b>=0 && b<=47){
    document.write("<h1 style='color:red'>CHAR : "+a+"<br>ASCII VALUE :"+b+"</h1>")
    document.write("<h1 style='color:green'>You Enter Special Character </h1>")
}
else{
    
    document.write("<h1 style='color:green'>You Enter Unknow Charcter </h1> ")

}
}
else{
    document.write("<h1 style='color:red'>The Length Of Character Is Greater Than One</h1>")
}

 //Task No 2
a = eval(prompt("Enter First Integer Number :"))
b = eval(prompt("Enter Second Integer Number :"))

document.write("<h1 style='color:red'>First Value  : "+a+"<br>Second  VALUE :"+b+"</h1>")

if (a > b){
   
    document.write("<h1 style='color:green'>The Value Of A is Greater Than B</h1>")

}
 else if (b > a){
    document.write("<h1 style='color:blue'>The Value Of B is Greater Than A</h1>")
 }
else if (b == a){
    document.write("<h1 style='color:green'>A and B Both Equal</h1>")
 }

 //Task No 3
num = prompt("Enter Integer Number :")
if (num == 0){
    document.write("<h1 style='color:green'>YOUR INPUT NUMBER EQUAL TO ZERO</h1>")
}
else if (num> 0){
    document.write("<h1 style='color:green'>YOUR INPUT NUMBER "+num +"  IS POSITIVE NUMBER </h1>")

}
else if (num <0){
    document.write("<h1 style='color:green'>YOUR INPUT NUMBER "+num +" IS NEGATIVE NUMBER </h1>")
}
else{
    document.write("<h1 style='color:green'>YOUR INPUT NUMBER "+num +" IS Not EQUAL ZERO OR NOT POSTIVE NUMBER OR NOT NEGATIVE NUMBER </h1>")

}

 //Task No 4
a = prompt("Enter Charcter :")

if(a.length == 1){
if (a.toLowerCase() == "a" || a.toLowerCase() == "e" || a.toLowerCase() == "i" || a.toLowerCase() == "o" || a.toLowerCase() == "u"){
    document.write("<h1 style='color:green'>Your Enter Character  Is Vowel  </h1>")
} 
else{
    document.write("<h1 style='color:green'>Your Enter Character  Is Not a Vowel  </h1>")
}}
else{
    document.write("<h1 style='color:green'>Your Enter Character Length Greater Than One </h1>")

}

 //Task No 5
const psd = "Zubair"
a = prompt("Enter Password : ")
if (a == "")
{
    document.write("<h1 style='color:red'>Please Enter Your  Password </h1>")
}
else{
    if (a === psd){
        document.write("<h1 style='color:green'>You Enter Correct Password </h1>")
    }
    else{
        document.write("<h1 style='color:red'>You Enter InCorrect Password </h1>") 
    }
}

 //Task No 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting)}
else{
greeting = "Good evening";
document.write(greeting)
}

 //Task No 7
var time
time = prompt("Enter Time In 24 Hours Clock Format :")
if (time >= 0000 && time <1200){
    document.write("Good Morning")
}
else if (time >= 1200 && time< 1700){
    document.write("Good Afternoon")
}
else if (time >= 1700 && time <2100){
    document.write("Good Evening")
}
else if (time >= 2100 && time<=2359){
    document.write("Good Night")
}

//CHAPTER 14 To 16
 //Task No 1
var std = []
var std2 = new Array(100)
var str = ["mon","tue","wed","thur","fri","sat","sun"]
var num =[1,2,3,4,5,6]
var boolean=[true,false]
var marray=["zubair","new",true,1,2,4.5,"Minhas"]
var edupk =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
for (i= 0 ;i<edupk.length;i++){
    if (i == 0){
        document.write("<font size='7' color='red' style='font-weight:bold'> QUALIFICATION :</font><br>")
    }
    document.write("<font size='6' color='blue' style='font-weight:bold'>"+(i+1)+")  "+edupk[i]+"<br></font>")
}


 //Task No 2
stdname = ["ZUBAIR","MUHAMMAD ALI","ZUNAIB AFZAL"]
stdscore = [320,230,480]
marray = []
tmark = 500

for (i=0;i<stdname.length;i++){
    per = (stdscore[i]/tmark)*100
    
    document.write("<font size='6' color='red' style='font-weight:bold'>Score Of "+stdname[i].charAt(0).toUpperCase() + stdname[i].slice(1).toLowerCase()+" is "+stdscore[i]+"."+"Percentage : "+per+"%</font><br>")
}

 //Task No 3
var color =["red","black","blue"]
document.write("<font size='6' color='green' style='font-weight:bold'>Original Array :["+color+"]</font>")
val = prompt("Enter Which Color Added At beginning")   
color.unshift(val)

document.write("<font size='6' color='#9E0B0B' style='font-weight:bold'><br><br>Added One Color At Beginning <br> Added Color Name : " +val+"<br>Added New Color Now Array Updated : ["+color+"]</font><br>")

val = prompt("Enter Which Color Added At End")
color.push(val)

document.write("<br><br><font size='6' color='#F71366 ' style='font-weight:bold'>Added One Color At End <br> Added Color Name : " +val+"<br>Added New Color Now Array Updated : ["+color+"]</font><br>")

val =prompt("Add More Two Color At beginning")
val1 =prompt("Add More Two Color At beginning")
color.unshift(val,val1)

document.write("<br><br><font size='6' color='#F004FB ' style='font-weight:bold'>Added Two Color At Begining <br> Added Color Names : " +val+" "+val1+"<br>Added New Colors Now Array Updated : ["+color+"]</font><br>")

val = color.shift()
document.write("<br><br><font size='6' color='#35FB04 ' style='font-weight:bold'>Remove First Color From Array<br> Remove First Color From Array  : " +val+"<br>Delete First Color Now Array Updated : ["+color+"]</font><br>")

val = color.pop()
document.write("<br><br><font size='6' color='#F76410' style='font-weight:bold'>Remove Last Color From Array<br> Remove Last Color From Array  : " +val+"<br>Delete Last Color Now Array Updated : ["+color+"]</font><br>")

val = prompt("Enter Index To Add new Color :")
val1 = prompt("Enter How Many Color  Delete :")
val2=prompt("Enter Value To Add New Color :")
color.splice(val,val1,val2)
document.write("<br><br><font size='6' color='#02CCFD ' style='font-weight:bold'>Add New Color Specific Position <br> Add New Color Index  : " +val+"<br> How Many Color Delete : "+val1+"<br>Add New Color :"+val2 +"<br> Now Array Updated : ["+color+"]</font>")

val = prompt("Enter Index To Start  Delete Color :")
val1 = prompt("Enter Index To END  Delete Color :")
color.splice(val,val1)
document.write("<br><br><font size='6' color='#0714E9 ' style='font-weight:bold'>Add Remove Color Specific Position <br> Start Index  Delete Color : " +val+"<br> End Index  Delete Color: "+val1+"<br>  Now Array Updated : ["+color+"]</font>")


document.write("<font size='6' color='#9E0f0B' style='font-weight:bold'><br><br>NOW REMAINING ARRAY IS : ["+color+"]</font>")



 //Task No 4
var std = [320,230,480,120]
document.write("<font size='6' color='#0714E9 ' style='font-weight:bold'>Scores Of Students : [" +std+"]<br>")
document.write("<font size='6' color='#F94009 ' style='font-weight:bold'>Ordered Scores Of Students : [" +std.sort()+"]<br>")



 //Task No 5
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var sel = cities.slice(0,2)
document.write("<font size='6' color='#0714E9 ' style='font-weight:bold'> Cities List :<br>["+cities+"]</font><br><br>")
document.write("<font size='6' color='#F94009' style='font-weight:bold'> Selected Cities List :<br>["+sel+"]</font><br>")



 //Task No 62
var arr =["This ","is"," my"," cat"]
var str = arr.join(" ")
document.write("<font size='7' color='#F94009 ' style='font-weight:bold'> Array :<br>"+arr+"</font>")
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'><br> String :<br>"+str+"</font>")


 //Task No 6
var arr=["Keyboard","mouse","printer","monitor"]

document.write("<font size='7' color='#F94009 ' style='font-weight:bold'> Devices :<br>"+arr+"</font>")

val = arr.shift()
document.write("<br><font size='7' color='#0714E9' style='font-weight:bold'> First In First Out <br><br> OUT :<br>"+val+"<br>")

val = arr.shift()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

val = arr.shift()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

val = arr.shift()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

 //Task No 7
var arr=["Keyboard","mouse","printer","monitor"]

document.write("<font size='7' color='#F94009 ' style='font-weight:bold'> Devices :<br>"+arr+"</font>")

val = arr.pop()
document.write("<br><font size='7' color='#0714E9' style='font-weight:bold'> First In Last Out <br> <br> OUT :<br>"+val+"<br>")

val = arr.pop()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

val = arr.pop()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

val = arr.pop()
document.write("<font size='7' color='#0714E9 ' style='font-weight:bold'> OUT :<br>"+val+"<br>")

//Chapter No 17 To 20
 //Task No 1
var myarray=new Array(3);  

for (i=0; i <=2; i++)  {        
myarray[i]=new Array(3) ;
}


myarray[0][0]=0 ;       
myarray[0][1]=1  ;      
myarray[0][2]=2 ; 
myarray[0][3]=3 ;       
myarray[1][0]= 1  ;     
myarray[1][1]=0   ;    
myarray[1][2]=1    ;    
myarray[1][3]=2  ;
myarray[2][0]=2 ;       
myarray[2][1]=1  ;      
myarray[2][2]=0 ;
myarray[2][3]=1 ;  

 


document.write("<font color='red' size='7'> 2D MATRICES<h1></font><font color='blue' size='7'>")

for (i=0;i<myarray.length;i++){{
    document.write(myarray[i].join(" "))}
    document.write("<br>")
}
document.write("</font>")


 //Task No 2
document.write("<font color='red' size='7'>Numeric Counting Range 1 to 10 <h1></font><font color='blue' size='7'>")
for (i=1;i<=10;i++){
    document.write(i+"<br>")
}
document.write("</font>")


 //Task No 3
num = eval(prompt("Enter a number to show its multiplication table : "))
rng =eval(prompt("Enter Length multiplication table :"))
for (i=1;i<=rng;i++){
    if(i==1){
        document.write("<font color='red' size='7'>Multiplication table of :"+ num+" <h1></font><font color='blue' size='7'>Length Of Table :"+rng+"<br>")
        document.write("<br><font color='green' size='6'>"+num+"*"+i+"="+num*i+"</font>")

    }
    else{
        document.write("<br><font color='green' size='6'>"+num+"*"+i+"="+num*i+"</font>")
    }

}

 //Task No 4
var fruits=["apple","banana","mango","orange","strawberry"]
document.write("<br><font color='red' size='6'>Array : ["+ fruits+" ] <br></font>")

for (i=0;i<fruits.length;i++){ 
    document.write("<font color='blue' size='6'> "+fruits[i] +" <br></font>")
}

for (i=0;i<fruits.length;i++){ 
    document.write("<br><font color='green' size='6'> Element at index "+ i+" is "+ fruits[i] +"</font>")
}

 //Task No 5
document.write("<br><font color='red' size='6'>Counting : <br></font>")
for(i=1;i<=15;i++){
    document.write("<font color='blue' size='6'> "+i +",</font>")
}

document.write("<br><br><font color='red' size='6'>Reverse Counting : <br></font>")
for(i=10;i>=1;i--){
    document.write("<font color='blue' size='6'> "+i +",</font>")
}

document.write("<br><br><font color='red' size='6'>Even : <br></font>")
for(i=0;i<=20;i++){
    if(i %2 ==0){
    document.write("<font color='blue' size='6'> "+i +",</font>")
}}

document.write("<br><br><font color='red' size='6'>Odd : <br></font>")
for(i=0;i<=20;i++){
    if(i %2 !=0){
    document.write("<font color='blue' size='6'> "+i +",</font>")
}}

document.write("<br><br><font color='red' size='6'>Series : <br></font>")
for(i=2;i<=20;i=i+2){
    
    document.write("<font color='blue' size='6'> "+i +"k,</font>")
}



 //Task No 5
A=["cake","apple pie","cookie","chip","patties"]

inp =prompt("Welcome To ABC Bakery .What do you want to order sir/ma'am?")
document.write("<br><font color='red' size='6'>Present Items In Bakery  : <br></font>")
for (i=0;i<A.length;i++){
    document.write("<font color='blue' size='6'>"+A[i]+"</font><br>")
}

document.write("<br><font color='red' size='6'>You Search  : "+inp+"<br></font>")

a=0
for (i=0;i<=A.length;i++){
    if(A[i] ==inp.toLowerCase()){
        document.write("<br><font color='green' size='6'> "+inp+" is avaible at index "+i+" in our bakery</font>")
        a=1
    }


}
if (a==0){
    document.write("<br><font color='orange' size='6'> we are sorry."+inp+" is not available in our bakery </font>")

}

 //Task No 6
var A =[24,53,78,91,12]
lg =A[0]

document.write("<br><font color='red' size='6'>Array Element  : ["+ A+"] <br></font>")
for (i=0;i<A.length;i++){
    if(lg<A[i]){
        lg=A[i]
    }
}

document.write("<br><font color='blue' size='6'>The Largest Number Is  : "+lg +"<br></font>")

 //Task No 7
var A =[24,53,78,91,12]
var sm= A[0]

document.write("<br><font color='red' size='6'>Array Element  : ["+ A+"] <br></font>")
for (i=0;i<=A.length;i++){
    if(sm>A[i]){
        sm=A[i]
    }
}

document.write("<br><font color='blue' size='6'>The Smallest Number Is  : "+lg +"<br></font>")

 //Task No 8
a=5
n=100
for(i=1;i<=20;i++){
    document.write("<font color='red' size='6'> "+ a*i+",</font>")
}
