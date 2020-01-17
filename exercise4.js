function cariModus(arr) {

    var temp = [];
    for(var i=0; i<arr.length; i++){
      var index = -1;
      for(var j=0; j<temp.length; j++){
        if(arr[i] === temp[j][0]){
          index = j;
        }
      }
      if(index === -1){
        temp.push([arr[i], 1]);
      }else{
        temp[index][1]++;
      }
    }
    if(temp.length === 1){
      return -1;
    }else{
      var check = false;
      for(var i=0; i<temp.length-1; i++){
        if(temp[i+1][1] !== temp[i][1]){
          check = true;
        }
      }
      if(check == false){
        return -1;
      }else{
        var compare = 0;
        var index2 = 0;
        for(var i=0; i<temp.length; i++){
          if(temp[i][1]>compare){
            compare = temp[i][1];
            index2 = i;
          }
        }
        return temp[index2][0]
      }
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1