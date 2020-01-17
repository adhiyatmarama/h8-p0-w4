function tukarBesarKecil(kalimat) {
    var result = '';
    for(var i=0; i<kalimat.length; i++){
      var a = kalimat.charCodeAt(i);
      //Merubah uppercase ke lowercase (dec huruf uppercase di 65 sampai 90)
      if(a >= 65 && a <= 90){
        result += kalimat[i].toLowerCase();
      }else 
      //Merubah lowercase ke uppercase (dec huruf lowercase di 97 sampai 122)
      if(a >= 97 && a <=122){
        result += kalimat[i].toUpperCase();
      }else{
        result += kalimat[i];
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"