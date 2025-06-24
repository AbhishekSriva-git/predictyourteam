//var player = [  { "name": "Raj", "type": "WIK" },  { "name": "Amit", "type": "WIK" },  { "name": "Vikram", "type": "BAT" },  { "name": "Suresh", "type": "BAT" },  { "name": "Manoj", "type": "BAT" },  { "name": "Ravi", "type": "BAT" },  { "name": "Karan", "type": "BAT" },  { "name": "Nikhil", "type": "BAT" },  { "name": "Deepak", "type": "BAT" },  { "name": "Anil", "type": "BAT" },  { "name": "Sunil", "type": "BOW" },  { "name": "Harish", "type": "BOW" },  { "name": "Prakash", "type": "BOW" },  { "name": "Ramesh", "type": "BOW" },  { "name": "Naresh", "type": "BOW" },  { "name": "Lokesh", "type": "BOW" },{ "name": "Mahesh", "type": "BOW" },  { "name": "Dinesh", "type": "BOW" },  { "name": "Yash", "type": "ALL" },  { "name": "Arjun", "type": "ALL" },  { "name": "Sanjay", "type": "ALL" },  { "name": "Tarun", "type": "ALL" }]

var wik = [
  { "name": "Raj", "type": "WIK" },
  { "name": "Amit", "type": "WIK" },
]
    
var bat = [
  { "name": "Vikram", "type": "BAT" },
  { "name": "Suresh", "type": "BAT" },
  { "name": "Manoj", "type": "BAT" },
  { "name": "Ravi", "type": "BAT" },
  { "name": "Karan", "type": "BAT" },
  { "name": "Nikhil", "type": "BAT" },
  { "name": "Deepak", "type": "BAT" },
  { "name": "Anil", "type": "BAT" },]    
  
var bow = [
  { "name": "Sunil", "type": "BOW" },
  { "name": "Harish", "type": "BOW" },
  { "name": "Prakash", "type": "BOW" },
  { "name": "Ramesh", "type": "BOW" },
  { "name": "Naresh", "type": "BOW" },
  { "name": "Lokesh", "type": "BOW" },
  { "name": "Mahesh", "type": "BOW" },
  { "name": "Dinesh", "type": "BOW" },]  
  
var all = [
  { "name": "Yash", "type": "ALL" },
  { "name": "Arjun", "type": "ALL" },
  { "name": "Sanjay", "type": "ALL" },
  { "name": "Tarun", "type": "ALL" }]  
  
var finalPlayers = []  
    



function getRandomThree(players) {
  // Shuffle the array
  const shuffled = players.sort(() => 0.5 - Math.random());
   let totalShuffPl = shuffled
  // Return the first 3 elements
  return shuffled.slice(0, 7);
}

for (i=0; i<10000; i++) {
  
  let dupWik = []
  let dupBat = []
  let dupBow = []
  let dupAll = []
    
  indexWik = Math.floor(Math.random() * wik.length)
  indexBat = Math.floor(Math.random() * bat.length)
  indexBow = Math.floor(Math.random() * bow.length)
  indexAll = Math.floor(Math.random() * all.length)
  
  dupWik = [...wik];
  dupBat = [...bat];
  dupBow = [...bow];
  dupAll = [...all];
  
  const randomwik = wik[indexWik];
  const randombat = bat[indexBat];
  const randombow = bow[indexBow];
  const randomall = all[indexAll];
  //finalPlayers = [randomwik,randomall,randombat,randombow]
  
  dupWik.splice(indexWik,1)
  dupBat.splice(indexBat,1)
  dupBow.splice(indexBow,1)
  dupAll.splice(indexAll,1)
  
  finalPlayers = []
  finalPlayers = [...dupWik,...dupBat,...dupBow,...dupAll]
  
  let ShuffledPlayers = []
  ShuffledPlayers = [randomwik,randombow,randombat,randomall, ...getRandomThree(finalPlayers)]
  
  
  console.log(ShuffledPlayers)
  

}

 
