//First method
/*var Car = {
    //key:value
    marque: "BMW",
    year: 2018,
    boughtDate: new Date(1999, 2, 11),
    showCarInformations: function() {
        alert("Voiture [marque = " + this.marque + ", année fabrication = " + this.year + ", date achat = " + this.boughtDate + "]");
    },
    showCarAge: function() {

        alert("Age de la voiture (en année) = " + (new Date().getFullYear() - this.year));
    }
};
Car.showCarInformations();
Car.showCarAge();

//second method
function Car(marque, year, boughtDate) //constuctor
{
    this.marque = marque;
    this.year = year;
    this.boughtDate = boughtDate;
    this.showCarInformations = function() {
        alert("Voiture [marque = " + this.marque + ", année fabrication = " + this.year + ", date achat = " + this.boughtDate + "]");
    };
    this.showCarAge = function() {
        //if we want to evaluate the difference between tow dates
        let dateDiff = Date.now() - this.boughtDate.getTime();
        let age_dt = new Date(dateDiff);
        alert("J'ai ma voiture depuis " + Math.abs(age_dt.getUTCFullYear() - 1970) + " ans");

        //alert("Age de la voiture (en année) = "+ (new Date().getFullYear()-this.year));
    };
}
//instantiate objects
let v1 = new Car("Mercedes", "2019", new Date(2021, 1, 30));
let v2 = new Car("BMW", "2016", new Date(2017, 1, 30));
//v2.showCarInformations();
v2.showCarAge();
*/
// unnamed
// let Car1 = class{
//     constructor(marque,year,boughtDate)
// {
//     this.marque=marque;
//     this.year=year;
//     this.boughtDate=boughtDate;
// }
// showCarInformations()
// {
//     alert("Voiture [marque = "+this.marque+", année fabrication = "+this.year+", date achat = "+this.boughtDate+"]");
// }
// showCarAge()
// {
// alert("Age de la voiture (en année) = "+ (new Date().getFullYear()-this.year));
//}
//   };


// Third method : named class
class Car {
    constructor(marque, year, boughtDate) {
        this.marque = marque;
        this.year = year;
        this.boughtDate = boughtDate;
    }
    showCarInformations() {
        alert("Voiture [marque = " + this.marque + ", année fabrication = " + this.year + ", date achat = " + this.boughtDate + "]");
    }
    showCarAge() {
        alert("Age de la voiture (en année) = " + (new Date().getFullYear() - this.year));
    }
}

let v3 = new Car("BMW", "2020", new Date(2017, 1, 30));
v3.showCarInformations();
v3.showCarAge();