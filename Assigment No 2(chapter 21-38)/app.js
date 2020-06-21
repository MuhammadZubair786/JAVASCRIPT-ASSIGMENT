//*****************************************Chapter 21-25**************************************

//=======>TASK NO 1

// var fname=prompt("Enter First Name :")
// var Lname=prompt("Enter Last Name :")
// fullname=fname+" "+Lname
// document.write("<h3 style='color:blue;'>TASK NO 1:<br>Welcome "+fullname+"</h3>")

//========>Task  No 2

// var fmobile=prompt("Enter Favourite Phone :")
// var flen=fmobile.length;
// document.write("<h3 style='color:green;'>TASK NO 2:<br>My Favourite Phone is : "+fmobile+"<br>Length Of String : "+flen+"</h3>")


//========>Task No 3

// var str="Pakistani"
// var ind=str.indexOf('n')
// document.write("<h3 style='color:purple;'>TASK NO 3:<br>String :"+str+"<br>Index Of 'n' : "+ind+"</h3>")


//========>Task N0 4

// var str="Hello World"
// var ind=str.lastIndexOf('l')
// document.write("<h3 style='color:red;'>TASK NO 4:<br>String :"+str+"<br>Index Of 'n' : "+ind+"</h3>")


//========>Task No 5

// var str="Pakistani"
// var ind=str.charAt(3)
// document.write("<h3 >TASK NO 5:<br>String :"+str+"<br>Character At Index 3 : "+ind+"</h3>")


//========>Task 6

// var fname=prompt("Enter First Name :")
// var Lname=prompt("Enter Last Name :")
// fullname=fname.concat(Lname)
// document.write("<h3 >TASK NO 6:<br>String :"+fullname+"</h3>")


//========>Task 7

// var city="Hyderabad"
// name=city.replace("Hyder","Islam")
// document.write("<h3 style='color:brown'>TASK NO 7:<br>City :"+city+"<br>After Relacement  : "+name+"</h3>")


//========>Task 8

// var message="Ali and Sami are best Friends.They lay Cricket and Football Together"
// rep=message.replace(/and/g,"&")
// document.write("<h3 style='color:blue'>TASK NO 8:<br>Message  :"+message+"<br>After Replacement Of and To &  : "+rep+"</h3>")


//========>Task 9

// var value="475"
// var nvalue=+value
// document.write("<h3 style='color:green'>TASK NO 9:<br>Value  :"+value+"<br>Type : "+typeof(value)+"<br>Value  :"+nvalue+"<br>Type : "+typeof(nvalue)+"</h3>")


//========>Task 10

// inp=prompt("Enter Input :")
// Ucase=inp.toUpperCase()
// document.write("<h3 style='color:purple'>TASK NO 10:<br>User Input  :"+inp+"<br>Upper Case  : "+Ucase+"</h3>")


//========>Task 11

// inp=prompt("Enter Input :")
// Ucase=inp.charAt(0).toUpperCase()+inp.substr(1).toLowerCase()
// document.write("<h3 style='color:browm'>TASK NO 11:<br>Title Case  :"+inp+"<br>Upper Case  : "+Ucase+"</h3>")


//========>Task 12

// var num=33.56
// res=num.toString()
// document.write("<h3 style='color:red'>TASK NO 12:<br>Number  :"+res+"<br>Result  : "+res.replace(".","")+"</h3>")


//========>Task 13

// var uname=prompt("ENTER USER NAME : ")
// var v=0
// for(var i=0;i<uname.length;i++){
//     b=uname.charCodeAt(i)
//     if(b==33 || b== 44 || b==46 || b==64){
        
//         v=1
//         break
//     }

// }
// if(v == 1){
//     document.write("<h3 style='color:green'>TASK NO 13:Enter Invalid User Name :"+uname+"</h3>")
//     alert("INVALID USERNAME ")
    

// }
// else{
//     document.write("<h3 style='color:green'>TASK NO 12:<br>Valid User Name :"+uname+"</h3>")
   
// }


//========>Task 14

// var A=["cake", "apple pie", "cookie", "chips", "patties" ]
// var inp=prompt("Welcome To ABC Bakery .What do you Want To Order sir/mam's : ")
// var fd=0
// for (var i=0;i<A.length;i++){
//     if(A[i]==inp.toLowerCase()){
//         fd +=1
//         break;

//     }
// }
// if(fd == 1){
//     document.write("<h3 style='color:brown'>TASK NO 14:<br>"+inp+" is <b>available</b>at index: "+i+" in our bakery</h3>")
// }
// else{
//     document.write("<h3 style='color:brown'>TASK NO 14:<br>"+inp+" is <b>not available</b> in our bakery</h3>")
  
// }


//========> Task No 15 (m1)

// var str = prompt();
// var flag = 0
// var count = 0
// var ceck = +str.slice(0, 1)

// if (ceck.toString() != "NaN") {
//     flag++
// } else {
//     for (i = 0; i < str.length; i++) {
//         var cc = +str.slice(i, i + 1)
//         if (cc.toString() == "NaN") {
//             count++
//         }
//     }
// }

// if (flag == 1 || count == str.length) {
//     alert("password does not meet above requirements")
// } else {
//     console.log("ok")
// }


//========>Task No 15(m2)

// chck=0
// psd=prompt("Enter Password")
// document.write("Password :"+psd)
// if(psd[0]>=0 || psd[0]<=9)
//     {
//         document.write("Password Cannot Begin With Number")

//     }
// else{
//     if(psd.length<=5){
//         document.write("No")
//     }
//     else{
//         for(j=0;j<psd.length;j++){
//             b=psd.charCodeAt(psd[j])
//             document.write("value :"+b)
//             if(b>=65 &&  b<=90 ) { 
//                 chck=1
//                 continue
                
//             }
//             else if(b>=97 && b<=122){
//                 chck=1
//                 continue
//             }
//             else if (b>=48 && b<=57){
//                 chck=1
//                 continue
//             }
//             else{
//                 chck=0
//                 break
//             }
//         }
//     }
//     }
// if(chck==1){
//         document.write("<h1>PASSWORD : "+psd+"==> PASSWORD IS VALID ")
//     }
// else{
//         document.write("<h1>PASSWORD : "+psd+"==> PASSWORD IS INVALID ")
//     }


//========>Task No 16

// var university="University of Karachi"
// for( i=0 ;i<university.length;i++){
//     document.write("<h1>"+ university[i]+"</h1>")
// }


//Task No 17

// inp=prompt("Enter Country :")
// lindex = inp.charAt(inp.length-1);
// document.write("USER INPUT : "+inp)
// document.write("Last Element Input  is :"+lindex)


// Task No 18

// text='The quick brown fox jumps over the lazy dog'
// fd=0
// var check="the"
// var textck=text.toLowerCase()
// for(j=0;j<text.length;j++){
//     tg = textck.slice(j,(check.length)+j)

//     if(check==tg){
//         fd +=1
//     }
// }
// document.write("<h3>Text :"+text+"<h3>")
// if(fd == 0){
//     document.write("<h3>There are "+fd+" occurrences of word the </h3>")
// }
// else{
//     document.write("<h3>There are "+fd+" occurrences of word 'the'<h3>") 
// }



// *********************************************CHAPTER 25-30**********************************************


//========>Task No 1

// var pnumb=prompt("Enter Positive Integer Number  :")
// if(pnumb<0){
//     alert("Please enter Positive  Number :")
// }
// else{
// var rd=Math.round(pnumb)
// var flr=Math.floor(pnumb)
// var cle=Math.ceil(pnumb)
// document.write("<h3 style='color:blue'>Number : "+pnumb+"</h3>")
// document.write("<h4 style='color:red'>Round Off Value : "+rd+"</h3>")
// document.write("<h4 style='color:red'>Floor Value : "+flr+"</h3>")
// document.write("<h4 style='color:red'>Ceil Value : " +cle+"</h3>")
// }


//========>Task N0 2

// var pnumb=prompt("Enter Negative Integer Number  :")
// if(pnumb>=0){
//     alert("Please enter Negative Number :")
// }
// else{
// var rd=Math.round(pnumb)
// var flr=Math.floor(pnumb)
// var cle=Math.ceil(pnumb)
// document.write("<h3 style='color:blue'>Number : "+pnumb+"</h3>")
// document.write("<h4 style='color:red'>Round Off Value : "+rd+"</h3>")
// document.write("<h4 style='color:red'>Floor Value : "+flr+"</h3>")
// document.write("<h4 style='color:red'>Ceil Value : " +cle+"</h3>")
// }

//========>Task No 3

// var inp=prompt("Enter Value To Find absolute Value :")
// var abs=Math.abs(inp)
// document.write("<h1 style='color:brown'>The Absolute Value Of "+ inp +" is "+ abs+"</h1>")


// ========>Task No 4

// var numb = Math.random()
// var res = Math.floor((numb * 6) +1)
// document.writeln("<h1 style='color:blue'>Random Dice Value :"+ res+"</h1>")


//========>Task No 5

// var numb = Math.random()
//  var res = Math.floor((numb * 2) +1)
//  document.write("<h1 style='color:brown'> "+ res +"</h1>")
//  var sel = ""
// if (res ==1){
//     sel = "Tail"
// }
// else{
//     sel = "Head"
// }
// document.writeln("<h2 style='color:green'>Random Coin Value :"+ sel+"</h2>")


//========>Task No 6

// var numb = Math.random()
// var res = Math.floor((numb * 100) +1)
// document.writeln("<h1 style='color:red'>random number between 1 and 100 :"+ res+"</h1>")


//========>Task No 7

// inp=prompt("User Input :")
// inp=inp.toString().toLowerCase()
// inp=inp.split("k")
// document.write("<h1 style='color:blue'>Your Weight Is "+inp[0]+" Kilogram</h1>")


//========>Task No 8

// var numb = Math.random()
// var res = Math.floor((numb * 10) +1)
// var inp=prompt("Enter a number Between 1 to 10")
// if(res == inp ){
//     alert("Congralution You choose correct Number :")
// }
// else{
//     alert("Try Again!\n You choose Incorrect Number :")

// }


//**********************************Chapter 31-34**************************************


//========>Task No 1

// var date=new Date()
// document.writeln("<h1> Current Date And Time :"+date+"</h1>")


//========>Task No 2

// var monarry=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
// var date=new Date()
// var mon=date.getMonth()
// document.writeln("<h1 style='color:blue'> Current Month :"+monarry[mon]+"</h1>")


//========>Task No 3

// var dayarry = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var date=new Date()
// var day=date.getDay()
// document.writeln("<h1 style='color:green'> Current Day :"+dayarry[day]+"</h1>")


//========>Task No 4

// var date=new Date()
// sdate=date.toString().slice(0,3)
// if(sdate=="sun" || sdate=="sat")
// {
//     alert("Date :"+sdate+"\nIt's Fun Date")
//     document.write("<h1 style='color: #5F0205 '>Date :"+sdate+"===>It's Fun Date</h1>")

// }
// else{
//     alert("Date :"+sdate+"\nIt's not a Fun Date")
//     document.write("<h1 style='color: #5F0205 '>Date :"+sdate+"===>It's Not a Fun Date</h1>")
// }


//========>Task No 5

// var Tdate=new Date()
// var date=date.getDate()
// document.write("<h1 style='color:brown'>TODAY DATE :"+date+"</h1>")
// if(date<=15){
//     alert("First fifteen days of the month")
// }

// else{
//     alert("Last days of the month")
// }


//========>Task No 6

// var date=new Date()
// var tmsec=date.getTime()
// var smin=tmsec/(1000*60*60)
// document.writeln("<h1 style='color:#0F6DA7'> Current Date :"+date+"</h1>")
// document.writeln("<h1 style='color:#0F6DA7 '> Elapsed milisecond since 1970 1 january : "+tmsec+"</h1>")
// document.writeln("<h1 style='color:#0F6DA7 '> Elapsed Minutes since 1970 1 january  : "+smin+"</h1>")


//========>Task No 7

// var date=new Date()
// var th=date.getHours()
// var tm=date.getMinutes()
// var tt=th.toString()+tm.toString()
// document.write("<h1 style='color:red'>Time ==> Hours : "+th+" Minutes : "+tm+"</h1>")
// if(tt>0000 && tt<=1159){
//     alert("It's Am")
// }
// else{
//     alert("It's Am")
// }



//========>Task No 8

// var d = new Date(2020, 11, 31);
// document.write("<h1 style='color:#58D68D'>Later Date ==> "+d+"</h1>")


//========>Task No 9


// var dmon=new Date("June 18, 2015")
// var tdate=new Date()
// var diff=tdate.getTime()-dmon.getTime()
// var accurate=Math.floor(diff/(1000*60*60*24))
// document.write("<h1 style='color:#E74C3C '>"+accurate+" day Passed Since 1st Ramadan 2015</h1>")


//========>Task No 10

// var dmon=new Date("Jan 1, 2015")
// var tdate=new Date()
// var diff=tdate.getTime()-dmon.getTime()
// var accurate=Math.floor(diff/(1000*60))
// document.write("<h1 style='color:blue'>On Refernce Date "+ tdate+"",+accurate+" Second Passed Since 1st Ramadan 2015</h1>")


//========> Task No 11

// var cdate=new Date()
// var pdate=new Date()
// var phdate=pdate.setHours(pdate.getHours()-1)
// var agodate=new Date(phdate)
// document.write("<h1 style='color:blue'>Current Date : "+cdate+"<br>1 Hour Ago,it was "+agodate+"</h1>")


//========>Task No 12

// var cdate=new Date()
// var pdate=new Date()
// var pydate=pdate.setFullYear(pdate.getFullYear()-100)
// var agoyear=new Date(pydate)
// document.write("<h1 style='color:green'>Current Date :"+cdate+"<br>100 Year Back,it was "+agoyear+"</h1>")


//========>Task No 13

// var age =prompt("Enter Age ")
// var cdate=new Date()
// var pdate=new Date()
// var pydate=pdate.setFullYear(pdate.getFullYear()-age)
// pydate=new Date(pydate)
// document.write("<h1 style='color:red'>Your Age :"+age+"<br>")
// document.write("Your Brith Year is :"+pydate.getFullYear()+"</h1>")


//========>Task No 14

// var monarry=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
// var cname=prompt("Enter Custromer Name :")
// var date=new Date()
// var mon=date.getMonth()
// var nunit=prompt("Enter A Number Of Units : ")
// const cunit=16
// var scharge=350
// var pdate=nunit*cunit
// var ddate=pdate+scharge
// document.write("<h1 style='color:brown;font-size:50px' > k-Electric Bill </h1>")
// document.write("<h1 style='color:red' >Customer Name : "+cname+" </h1>")
// document.write("<h1 style='color:red' >Month  : "+monarry[mon]+"</h1>")
// document.write("<h1 style='color:green' >Number Of Unit  : "+nunit+"</h1>")
// document.write("<h1 style='color:green' >Charges Per Unit : "+cunit+"</h1>")
// document.write("<br><h1 style='color:blue' >Net Amount Payable (Within Due Date ) : "+pdate+"</h1>")
// document.write("<h1 style='color:blue' >Late Payment SurCharge :  "+scharge+"</h1>")
// document.write("<h1 style='color:blue' >Gross Amount Payable (After Due Date) : "+ddate+"<br>")

// document.write("-- END --</h1>")



//************************************************Chapter No 35-38************************************

//========>Task No 1

// function telldate() {
//     var today=new Date() 
//     document.write("<h1 style='color:red'>Current Date and Time : "+today+"</h1>")
// }

// telldate()


//========>Task No 2

// function Full_Name(name1,name2){
//     f_name=name1+" "+name2
//     return f_name

// }

// n1=prompt("Enter First Name :")
// n2=prompt("Enter Last Name :")
// document.write("<h1 style='color:brown'>Welcome "+ Full_Name(n1,n2)+ "</h1>" )
// alert("Welcome "+ Full_Name(n1,n2))


//========>Task No 3

// function add(a,b){
//     return a+b
// }

// n1=+prompt("Enter First Number :")
// n2=+prompt("Enter Second Number :")
// document.write("<h1>The Sum Of "+n1 +" and "+n2+" is :"+add(n1,n2)+"</h1>")


//========>Task No 4

// function calculate(n1,n2,op){
//     if(op=="%"){
//         c=n1%n2
//         oper="Modulus division remainder"
//         return "The "+oper+" Of "+n1+" and  "+n2+" is : "+c
        
//     }
//     else if(op=="/"){
//         c=n1/n2
//         oper="Division"
//         return "The "+oper+" Of "+n1+" and "+n2+" is : "+c
        
//     }
//     else if(op=="*"){
//         c=n1*n2
//         oper="Multiplication"
//         return "The "+oper+" Of "+n1+" into "+n2+" is : "+c
        
//     }
//     else if(op=="+"){
//         c=n1+n2
//         oper="Addition"
//         return "The "+oper+" Of "+n1+" and "+n2+" is : "+c
        
//     }
//     else if(op=="-"){
//         c=n1-n2
//         oper="Subtraction"
//         return "The "+oper+" Of "+n1+" and "+n2+" is : "+c
        
//     }
//     else{
        
//         return "Please Select Correct Operator"
        
//     }

// }


// a=+prompt("Enter First Number :")
// b=+prompt("Enter Second Number :")
// c=prompt("Select Operator  :\n%  For Modulus division remainder\n / For Division \n * For Multiplication \n + For Addition \n - For Subtraction \n ")
// document.write("<h1 style='color:#FF00CD'> "+calculate(a,b,c)+"</h>")


//========>Task No 5

// function sqr(numb){
//         return numb **2
// }

// n=prompt("Enter Number :")
// document.write("<h1 style='color:#B10000'> The Square of "+ n +" is : "+sqr(n)+"</h1>")


//========>Task No 6

// function fact(numb){

//     i=1
//     for(j=numb;j>0;j--){
//         i=i*j
//     }
//     return i
// }
// n=+prompt("Enter Number To Find Factorial :")
// a=fact(n)
// document.write("<h1 style='color:#B10000'> The Factorial of "+ n +" is : "+a+"</h1>")


//========>Task No 7

// function counting(n1,n2){
//     if(n1<n2){
//         document.write("<h1 style='color:#D68910'>+Counting :")
//         for(a=n1;a<=n2;a++){
//             document.write(a+",")
//         } 
//     }
//         else if(n2<n1){
//             document.write("<h1 style='color:#D68910'>Counting :")
//             for(a=n2;a<=n1;a++){
//                 document.write(a+",")            

//     }


// }

// }

// numb1=+prompt("Enter Number To Start Display Counting")
// numb2=+prompt("Enter Number To End Display Counting")
// counting(numb1,numb2)


//========>Task No 8

// function Sqr(hyp){
//     return Math.sqrt(hyp)
// }
// function Hyp(base,per){
//     hyp=base **2 + per **2
//      return Sqr(hyp)

// }

// base=+prompt("Enter Base : ")
// per=+prompt("Enter Perendicular : ")
// res=Hyp(base,per)
// document.write("<h1 style='color:#0518FF'> Base : "+base +"<br>Perpendicular :"+ per +"<br>and Hypotenous is : "+res+"</h1>")


//========>Task No 9

// function Area(height,width){
//     document.write("<h1 style='color:#FF056F'> Width : "+width)
//     document.write("<br>Height : "+height)
//     area=width*height
//     document.write("<br>Area  : "+area)

// }

// Area(width="10",height="5" )
// document.write("</h1>")


//========>Task No 10

// function palind(str){
//     str=str.toLowerCase()
//     var spilt=str.split("");
//     var rstr=spilt.reverse()
//     var jstr=rstr.join("")
//     if(str == jstr){
        
//         return " is palindrome"
//     }
//     else{
//         return " is not a palindrome"
//     }
// }

// a="Madam"
// document.write("<h1 style='color:#BB002D'>"+a +" "+palind(a)+" String")


//========>Task No 11

// function Fletter(str)
// {
//   var strg = str.split(' ');
//   var strarr = [];
    
//   for(var x = 0; x < strg.length; x++){
//       strarr.push(strg[x].charAt(0).toUpperCase()+strg[x].slice(1));
//   }
//   return strarr.join(' ');
// }
// document.write("<br><br>"+Fletter("the quick brown fox")+"</h1>");


//========>Task  No 12

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var array=[]
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//       array=strSplit[i]
//        }
//     }
//     return "The Length Of longest word is :"+longestWord+" String is : "+array;
//   }
  
// document.write("<h1 style='color:green'>"+findLongestWord("Web Development Tutorial")+"</h1>");



//========>Task No 13

// function Lcount(str,pos){
//     var lc=0
//     for(var j=0;j<str.length;j++){
//         if(str[j]==pos){
//             lc=lc+1
//         }

//     }
//     return lc
// }

// str="JSResourceS.com"
// pos="o"
// document.write("<h1>Sample Argument :"+str+" ,"+Lcount(str,pos)+"</h1>")


//========>Task No 14

// function calcCir(radius){
//         pi=3.14
//         c=2*3.14*radius
//         return c

// }
// function calcArea(radius){
//     pi=3.14
//     c=pi*radius**2
//     return c

// }

// radius=+prompt("Enter radius :")
// sel=+prompt("Select To Find \n 1 For calcCircumference\n 2 For calcArea")
// document.write("<h1 style='color:blue'>")
// if(sel==1){
//     document.write("Calculate the circumference based on the radius, and output : "+calcCir(radius))
// }
// else if(sel==2){
//     document.write("Calculate the Area based on the radius, and output : "+calcArea(radius))
// }
// else{
//     alert("Please Select Correct Operation")
// }
// document.write("</h1>")