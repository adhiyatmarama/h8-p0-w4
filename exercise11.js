function shoppingTime(memberId, money) {
  if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }else if(memberId === '' || memberId === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }
  money_temp = money;
  var list = [
    ['Sepatu Stacattu', 1500000, 0],
    ['Baju Zoro', 500000, 0],
    ['Baju H&N', 250000, 0],
    ['Sweater Uniklooh', 175000, 0],
    ['Casing Handphone', 50000, 0]
  ];
  var arrlistPurchased = [];
  for(i = 0; i < list.length; i++){
    if(money >= list[i][1]){
      list[i][2]++;
      arrlistPurchased.push(list[i][0]);
      money -= list[i][1];
    }
  }
  var result = {
    memberId: memberId,
    money: money_temp,
    listPurchased: arrlistPurchased,
    changeMoney: money
  }
  return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja*/