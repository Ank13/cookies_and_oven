////////// MODELS  ///////

var Oven = { 
   contents : [],
   addFood : function(food){
      this.contents.push(food) ;
   },
   bake : function(){
      for (var i = 0; i < this.contents.length; i++) {
         this.contents[i].actualTime += 1;
      }
   }
};

function Cookie(){
   this.flavor = "oatmeal" ;
   this.neededTime = 10 ;
   this.actualTime = 0 ;
};

Cookie.prototype = {
   cookieType : function(flavor){
      this.flavor = flavor ;
   },
   bakeTime : function(time){
      this.neededTime = time ;
   }
};

Cookie.prototype.status = function(){
   if (this.actualTime === 0){
      return "raw"
   } else if (this.actualTime < 5) {
      return "gooey"
   } else if (this.actualTime < 10) {
      return "Good"
   } else { 
      return "Burnt"
   };
};

/////// COOKIE TEST CODE
var sugar = new Cookie ;
sugar.cookieType("sugar");
console.log(sugar.flavor);
console.log(sugar.status());
// sugar.actualTime = 10;
// console.log(sugar.status())

///////OVEN TEST CODE
Oven.addFood(sugar);
Oven.bake();
Oven.bake();
Oven.bake();
console.log(sugar.status());
// console.log(Oven.contents);


///// CONTROLLER ///////////////



// $(document).ready(function(){




// };
