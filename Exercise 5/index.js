//rappel
//recuperer un pointeur vers un element HTML
/*let x=document.getElementById("p1").value="hjjk";
/*let x=document.getElementById("p1").innerHTML="hjjk<br>hhjj";
/*let x=document.getElementById("b1").textContent="Finish"
/*let x=document.getElementById("b1").style="...";

let buttons=document.getElementsByClassName("button");
//retourne tous les elements de la classe passée en paramètre

eval("3+5*(2-6)");==>-17
eval("dd+5");==>Error
eval("44 +hh");==>44

Math.PI
Math.pow(x,y)==>x puissance y
Math.sqrt(x)==>racine carrée de x
Math.sin(x)
Math.log(x)==>log neperien de x
Math.exp(x) ==>exponentielle de x
Math.log10(x)

let ch="Bonjour";
let c1=ch.charAt(0);==>le 1er caractère de la chaine
let index=ch.indexOf("o");==>retourne l'indice de la 1ère occurrence de "o" ou -1 si "o" n'appartient pas à ch
==>retourne 1
let index=ch.lastIndexOf("o"); ==>retourne 4

ch.substring(3)==>"jour"
ch.silce(0,3)==>"Bon";

let mot="abcdef123";
let sous_mot=mot.substring(2,5);==>sous_mot="cde"


addEventListner("Event name",function())==>si l'evenement passé en paramètre se produit alors
la fonction du 2ème paramètre est executée
Exemple :
let b2=document.getElementById("id_butt2);
b2.addEventListener("dblclick",say_clicked());
function say_clicked(){alert('le button b2 a été doublement clické');}
b2.addEventListener("click",function() {alert('le button b2 a été clické');});

let b1=document.getElementById("id_butt1");
let txt=b1.textContent ==>permet de recuperer le texte contenu dans le bouton
*/


var display = document.getElementById("operationResult");
//var btequals = document.getElementById("egal_id").onclick=equals();

var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if((button.textContent>='0'&&button.textContent<='9')||button.textContent==="π" || button.textContent==="(")
        displayInit();
    // if (button.textContent != "=" && 
    // button.textContent != "C" &&  
    // button.textContent != "√" && 
    // button.textContent != "x²" && 
    // button.textContent != "%" && 
    // button.textContent != "<=" && 
    // button.textContent != "±" && 
    // button.textContent != "sin" && 
    // button.textContent != "cos" && 
    // button.textContent != "tan" && 
    // button.textContent != "log" && 
    // button.textContent != "ln" && 
    // button.textContent != "x^" && 
    // button.textContent != "x!" && 
    // button.textContent != "π" && 
    // button.textContent != "e" && 
    // button.textContent != "rad" && 
    //button.textContent != "∘") 
    if((button.textContent=="+"||
    button.textContent=="-"||
    button.textContent=="*"||
    button.textContent=="/"||
    button.textContent=="."||
    button.textContent=="("||
    button.textContent==")")||
    (button.textContent>='0' && button.textContent<='9'))
    {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "*") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus2();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x!") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});



function equals() {
  //indexOf retourne l'indice de debut de la 1ère occurrence sous-chaine passée en paramètre
  //retourne -1 si aucune occurrence
  if ((display.value).indexOf("^") != -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = Math.pow(eval(base),eval(exponent)).toString(); //eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) 
      display.value = "Syntax Error";
    else
      display.value = eval(display.value);
    
  }
}

function clear() { //applée si on click sur le bouton "c"
  display.value = "0";
}
// display.onBlur=function(){
//   if(display.value==="")
//     display.value="0";};
function backspace() { //button <=
  if(display.value==="")
    display.value="0";
  else
   display.value = display.value.substring(0, display.value.length - 1);
}


//version pour modifier le 1er facteur
function plusMinus() {
  if (display.value.charAt(0) === "-") { //display=-325
    display.value = display.value.slice(1);
  } else { //display=569 
    display.value = "-" + display.value;
  }
}

//version pour modifier le dernier facteur au lieu du 1er facteur
function plusMinus2() {
let factors=display.value.split(/[(+*-/(]/);
console.log(factors);
let lastFactor=factors[factors.length-1];
let lastFactorLength=lastFactor.length;
let other=display.value.slice(0,display.value.length-lastFactorLength);
  console.log(other);
  let indexOfLastMinus=display.value.lastIndexOf("-");
  let beforeMinus=display.value[indexOfLastMinus-1];

  if(indexOfLastMinus==-1)
      display.value = other + "-" + display.value.slice(other.length);
  else
  if(other.length==1||((indexOfLastMinus===other.length-1)&&(beforeMinus==='+'||beforeMinus==='*'||beforeMinus==='/' ||beforeMinus==='-'||beforeMinus==='(')))  {
    
    display.value = display.value.slice(0,indexOfLastMinus)+display.value.slice(indexOfLastMinus+1);
  } else if(indexOfLastMinus===other.length-1 ||other.endsWith('(')||other.endsWith('+')||other.endsWith('*')||other.endsWith('/')) { //display=569 
    
    display.value = other + "(-" + display.value.slice(other.length)+")";
  }  
}

function factorial() {
  
  if (display.value < 0) {
    display.value = "undefined";
  } else {
    let number = 1;
    for (let i = display.value; i > 1; i--) {
      number *=  i;
    }
    display.value = number;
    
  }
}

function pi() {
  display.value += Math.PI;
}

function square() {
 // display.value = eval(display.value) * eval(display.value); //le carrée d'une expression
  //or
  display.value = Math.pow(eval(display.value),2);

}

function squareRoot() {
  display.value = Math.sqrt(eval(display.value));//racine carrée d'une expression
}

function percent() {
  display.value = display.value / 100 ; //+" %";
}

function sin() {
  display.value = Math.sin(eval(display.value));
}

function cos() {
  display.value = Math.cos(eval(display.value));
}

function tan() {
  display.value = Math.tan(eval(display.value));
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = eval(display.value) * (Math.PI / 180);
}

function degrees() {
  display.value = eval(display.value) * (180 / Math.PI);
}

function displayInit()
{
  if(display.value==="0")
    display.value="";
}

