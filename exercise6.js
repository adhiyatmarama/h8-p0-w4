function digitPerkalianMinimum(angka) {
    var arr = []
    // Mencari angka faktor dan dimasukin ke array yang isinya string dari faktor
    for(var i=1; i<=angka; i++){
      for(var j=i; j<=angka; j++){
        if(i*j === angka){
          arr.push(`${i}${j}`)
        }
      }
    }
    // Mencari digit terkecil
    var result = arr[0].length;
    for(var i=1; i<arr.length; i++){
      if(result > arr[i].length){
        result = arr[i].length;
      }
    }
    return result;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2