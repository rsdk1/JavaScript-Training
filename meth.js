// class Car {
//     brand="audi";
//     noOfTyres=6;

//     setDetails(brand,noOfTyres){
//        this.brand = brand;
//        this.noOfTyres = noOfTyres; 
//        console.log(this.brand);
//        console.log(this.noOfTyres);
//     }

//     displayDetails(){
//        console.log(this.brand);
//        console.log(this.noOfTyres);
//     }
// }

// var k = new Car();
// k.displayDetails();
// k.setDetails("BMW",4);
// k.displayDetails();


class marks {
    static computer = 100;
    maths;
    science;

    constructor(a) {
        console.log(a)
        console.log("i am inside constructor");
    }

    static displayMark(a, b) {
        console.log(this.computer);
        console.log(a);
        this.science = b;
    }

    getScore() {
        console.log(this.science);
    }
}

var x = new marks(56);
var y = new marks("heelo y");
x.computer = 1000;
x.displayMark(200, 300);
x.getScore();
y.getScore();


