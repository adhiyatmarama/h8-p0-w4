function checkAB(num) {
    num = num.toLowerCase();
    var result = false;
    for(var i=0; i<num.length; i++){
      var a = num.charCodeAt(i);
      if(a === 97 || a === 98){
        var b = num.charCodeAt(i+4);
        if(b === 97 || b === 98){
          result = true;
        }
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
