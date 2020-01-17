function changeMe(arr) {
    if(arr.length === 0){
      return "";
    }else{
      var result = {};
      for(var i=0; i<arr.length; i++){
        if(arr[i][3] === undefined || arr[i][3] >= 2020){
          var  umur = 'Invalid Birth Year';
        }else{
          var  umur = 2020 - arr[i][3];
        }
        result[`${i+1}. ${arr[i][0]} ${arr[i][1]}`] = {
          firstName: arr[i][0],
          lastName: arr[i][1],
          gender: arr[i][2],
          age: umur
        }  
      }
      return result;
    } 
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  console.log(changeMe([])); // ""