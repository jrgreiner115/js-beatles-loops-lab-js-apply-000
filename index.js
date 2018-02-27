function theBeatlesPlay(musicians, instruments) {
 var array = [];
 for (var i = 0; i < musicians.length; i++) {array.push(musicians[i] + ' plays ' + instruments[i])}
 return array
}
function johnLennonFacts(facts) {
  var factsArray = []
  var x = 0
  while (x < facts.length) {factsArray.push(facts[x] + '!!!'), x++
}
  return factsArray
}
function iLoveTheBeatles(number) {
  var loudList = []
  do {loudList.push('I love the Beatles!'); number++} while (number < 15)
return loudList
}