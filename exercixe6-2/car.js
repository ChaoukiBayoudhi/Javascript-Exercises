//First methods: 
let carInfosZone=document.getElementById("car_infos");
let carAgeZone=document.getElementById("car_age");
/*let car={
    //key:value
    marque:"Mercedes",
    year:2019,
    boughtDate:new Date(2020,11,15),
    showCarInformations:function(){
        carInfosZone.innerHTML="marque = "+this.marque+"<br>"+"construction year = "+this.year+"<br>"+"bought date = "+this.boughtDate.getFullYear()+"/"+(this.boughtDate.getMonth()+12)+"/"+this.boughtDate.getDate();
    },
    showCarAge:function()
    {
        carAgeZone.innerHTML=" The age of the car is <strong>"+(new Date().getFullYear()-this.year)+"</strong> year(s)";
    }
};
car.showCarInformations();
car.showCarAge();
*/
//second method
/*function Car(marque,constructionYear,boughtDate){ //constructor
    this.marque=marque;
    this.year=constructionYear;
    this.boughtDate=boughtDate;
    this.showCarInformations=function(){
        carInfosZone.innerHTML="marque = "+this.marque+"<br>"+"construction year = "+this.year+"<br>"+"bought date = "+this.boughtDate.getFullYear()+"/"+(this.boughtDate.getMonth()+12)+"/"+this.boughtDate.getDate();
    };
    this.showCarAge=function()
    {
        carAgeZone.innerHTML=" The age of the car is <strong>"+(new Date().getFullYear()-this.year)+"</strong> year(s)";
    };
}
//instantiate objects 
let c1=new Car("BMW",2019,new Date(2019,12,25));
let c2=new Car("BMW",2017,new Date(2018,12,25));
c1.showCarInformations();
c1.showCarAge();
*/
class Car{
    constructor(marque,constructionYear,boughtDate){ //constructor
        this.marque=marque;
        this.year=constructionYear;
        this.boughtDate=boughtDate;
    }
    showCarInformations(){
        carInfosZone.innerHTML="marque = "+this.marque+"<br>"+"construction year = "+this.year+"<br>"+"bought date = "+this.boughtDate.getFullYear()+"/"+(this.boughtDate.getMonth()+12)+"/"+this.boughtDate.getDate();
    }
    showCarAge()
    {
        carAgeZone.innerHTML=" The age of the car is <strong>"+(new Date().getFullYear()-this.year)+"</strong> year(s)";
    }
}
//instantiate objects 
let c1=new Car("BMW",2019,new Date(2019,12,25));
let c2=new Car("BMW",2017,new Date(2018,12,25));
c2.showCarInformations();
c2.showCarAge();