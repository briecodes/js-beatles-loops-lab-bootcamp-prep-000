function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(johnFacts){
  let i = 0;
  do{
    johnFacts[i] = `${johnFacts[i]}!!!`;
    i++;
  } while (i < johnFacts.length){
    return johnFacts;
  }
}

function iLoveTheBeatles(myNumber){
  var beatlesArray = [];
  do{
    console.log(`Original Number: ${myNumber}`);
    beatlesArray.push("I love the Beatles!");
    myNumber++;
    console.log(`Updated Number: ${myNumber}`);
    console.log(beatlesArray);
  } while(myNumber < 15){
    return "I love the Beatles!";
  }
}