
for (i = 0; i <= 2; i++) {
    console.log("---------");
    console.log(i);
    console.log("---------");
    for (a = 0; a <= 3; a++) {
        if(a==1 || a==2){
          continue;
        }
        console.log(a);
    }
}
