class birds {
    peacock;
    crow;
    eagle="big";
    constructor(x) {
        // console.log("birds are great");

    }

    getFav() {
        this.peacock = "89897";
        console.log(this.peacock);
        console.log(this.eagle);
          
        if (this.eagle=="big")
        {
            // console.log("true");
 return true;
        }
        else{
            //console.log("false");
            return false;
        }
    }


}
var a = new birds("fly");
var z = a.getFav();
console.log(typeof(z));


