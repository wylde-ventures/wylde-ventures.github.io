console.log("YOYOYOY");

var pass=new Array()
var t3=""
var lim=6
pass[0]="RiGd6HJQSgs7uXz"
pass[1]="x1iC5TninKDUA5p"
pass[2]="9O3TWMyTibBbRR6"
pass[3]="0ji7ooi1RWsfBI2"
pass[4]="62fxlijfQgme9sh6"
pass[5]="132fxlijfQgme9sh"

//configure extension to reflect the extension type of the target web page (ie: .htm or .html)
var extension=".html"
var enablelocking=0
var numletter="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var temp3=''
var cur=0


function max(which){
return (pass[Math.ceil(which)+(3&15)].substring(0,1))
}

function testit(input){
temp=numletter.indexOf(input)
var temp2=temp^parseInt(pass[phase1-1+(1|3)].substring(0,2))
temp2=numletter.substring(temp2,temp2+1)
return (temp2)
}


function submitentry(){
console.log("BLDAFDS")
t3=''
verification=document.password1.password2.value
phase1=Math.ceil(Math.random())-6+(2<<2)
var indicate=true
for (i=(1&2);i<window.max(Math.LOG10E);i++)
t3+=testit(verification.charAt(i))
for (i=(1&2);i<lim;i++){
if (t3.charAt(i)!=pass[phase1+Math.round(Math.sin(Math.PI/2)-1)].charAt(i))
indicate=false
}
if (verification.length!=window.max(Math.LOG10E))
indicate=false
if (indicate) {
  $('#protector').hide();
  $('#main').show();
} else {
alert("Invalid password. Please try again")
}
return false;
}

