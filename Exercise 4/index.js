function memberType(age)
{
    
    switch(true)
    {
    
        case age <= 0:
            alert("Erreur !");
            break;
         case age>0 && age<=13 :
             document.write("Vous êtes encore trop jeune");
             break;
         case age>13 && age<=18 :
             document.write("Vous êtes encore mineur");
             break;
         case age>18 && age<=25 :
             document.write("Vous êtes déjà majeur");
             break;
         default :
            document.write("Ne vous veuillessez donc pas !");
        
    }
  
}

let age=parseInt(prompt('introduce your age'));

memberType(age);
