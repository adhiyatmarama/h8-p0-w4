function highestScore (students) {
    var result = {};
    if(students.length === 0){
      return result;
    }
    //Membuat object result awal
    for(var i = 0; i < students.length; i++){
      result[students[i].class] = {
        name: '',
        score: 0
      }
    }
    //Mencari student dengan nilai tertinggi di kelas dan update objek result
    for(var i = 0; i < students.length; i++){
      for(var key in result){
        if(students[i].class === key){
          if(result[key].score < students[i].score){
            result[key].name = students[i].name;
            result[key].score = students[i].score;
          }
        }
      }
    }
    return result;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]), " << nomer 1");
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]), ' << nomer 2');
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([]), ' << nomer 3'); //{}