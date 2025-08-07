// objects with func,arrays,for loop in,nested loops

var apple={
    price:
    {
      currency:["dollar","rupees"]
      
    },
    colours:"red",
    condition:{
       good:"okay",
       bad:"not okay",
    },

    buy(a){
     console.log();
    },
    
};
delete apple.price,
console.log(apple.condition);
console.log(apple.price);
console.log(apple.condition.good);



for ( let x in apple )
{
    console.log(apple.x)
}
apple.buy("grapes");
