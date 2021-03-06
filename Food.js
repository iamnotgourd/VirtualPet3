class Food{
    constructor(){
        var foodNo
        this.image = loadImage("images/milk.png")
    }
    
 display(){
     var x = 80,y = 100
     imageMode(CENTER)
     if(this.foodNo!=0){
         for(var i = 0;i<this.foodNo;i++){
             if(i%10===0){
                 x = 80
                 y = y+50
             }
             image(this.image,x,y,50,50)
             x = x+30
         }
     }
 }
 bedroom(){
     background(bedroom,550,500)
 }

 washroom(){
     background(washroom,550,500)
 }

 garden(){
     background(garden,550,500)
 }
}
