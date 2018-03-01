function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

// function johnLennonFacts(johnFacts){
//   var i = 0;
//   do{
//     console.log(`Round: ${i}`);
//     johnFacts[i] = `${johnFacts[i]}!!!`;
//     console.log(`Round2: ${i}`);
//     // return johnFacts;
//   } while( i < johnFacts.length && johnLennonFacts());
// }

// function johnLennonFacts(johnFacts){
//   for (var i = 0; ; i++){
//     var myNumber = i;
//     console.log("my number: " + myNumber);
//     break;
//   }
//   do{
//     johnFacts[i] = `${johnFacts}!!!`;
//     console.log(johnFacts);
//   } while (i < johnFacts.length && johnLennonFacts());
// }

function johnLennonFacts(johnFacts){
  let i = 0;
  console.log(`Total Number of Facts: ${johnFacts.length}.`);
  do{
    console.log(`Logging number ${i}.`);
    console.log(`Array #${i}: ${johnFacts[i]}`);
    i++;
  } while (i < johnFacts.length);
}