function idealWeight()
{
    //get values from HTML form
    let size=Number(document.getElementById("size_id").value);
    let age=parseInt(document.getElementById("age_id").value);
    //let gender=document.getElementById("size_id");

    //calculate the ideal weight
    let gender="Female";
    if(document.getElementById("male_id").checked)
        gender="Male";

    let idealW;
    if(gender=="Male")
       idealW=((3*size-250)*(age+270))/1200;
    else
        idealW= ((size/2 -30)*(age+180))/200;

    //document.getElementById("result").innerHTML="Your ideal weight is <strong>"+ Math.round(idealW)+"</strong>";
    document.getElementById("result").innerHTML="Your ideal weight is <strong>"+ idealW.toFixed(2)+"</strong>";
}