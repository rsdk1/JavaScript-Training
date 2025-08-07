
function word(str){
    return str.split('').reverse().join('');
}
console.log(word("hello"));

var letter = "mom"
var reversed=word(letter);
    if(letter===0){
        console.log("this is plaindrome");
    }
    else{
        console.log("this is not a palindrom");
    }

 var people = "Suma";
 var rev = word(people);
 console.log(rev);