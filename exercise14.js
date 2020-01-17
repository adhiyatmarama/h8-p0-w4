function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    if(arrPenumpang.length === 0){
      return result;
    }
    for(var i = 0; i < arrPenumpang.length; i++){
      for(var j = 0; j < rute.length; j++){
        if(arrPenumpang[i][1] === rute[j]){
          var a = j;
        }else if(arrPenumpang[i][2] === rute[j]){
          var b = j;
        }
      }
      var harga = (b-a)*2000;
      var object = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: harga
      }
      result.push(object);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]