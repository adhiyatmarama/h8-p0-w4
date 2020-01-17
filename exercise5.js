function ubahHuruf(kata) {
    var str = '';
    kata = kata.toLowerCase();
    for(var i=0; i<kata.length; i++){
      var a = kata.charCodeAt(i);
      a = a+1
      str += String.fromCharCode(a);
    }
    return str;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu