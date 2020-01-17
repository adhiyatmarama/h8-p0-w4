function urutkanAbjad(str) {
  str = str.toLowerCase();
  //mengubah str menjadi array biar bisa disort
  arr = [];
  for(var i=0; i<str.length; i++){
    arr.push(str[i]);
  }
  //sortir berdasarkan ascii
  for(var i=0; i<arr.length-1; i++){
    for(var j=i+1; j<arr.length; j++){
      var a = arr[i].charCodeAt(0); 
      var b = arr[j].charCodeAt(0);
      if(b < a){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  //merubah array yang udah disort ke string lagi
  var result = '';
  for(var i=0; i<arr.length; i++){
    result += arr[i];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'