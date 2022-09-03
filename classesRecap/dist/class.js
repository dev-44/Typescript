class Player {
   //static                      for attributes and methods that only can be reachable in the class, not in the instances
   #score = 0                    //Private Field
   numLives = 10

   constructor(first, last){
      this.first = first
      this.last = last
   }

   get fullName(){
      return `${this.first} ${this.last}`
   }

   set fullName(newName){
      const[first, last] = newName.split(' ')
      this.first = first
      this.last = last
   }

   get score(){
      return this.#score
   }

   set score(newScore){
      if(newScore < 0){
         throw new Error('Score must be positive')
      }
      this.#score = newScore
   }

   loseLife(){
      this.numLives -= 1
   }
}

const player1 = new Player("super", "mario")
console.log(player1.score)

class AdminPlayer extends Player {

   constructor(first, last, powers){
      super(first, last)
      this.powers = powers
   }
   isAdmin = true
}

const admin = new AdminPlayer("Oscar", "Armoa", ["armor x3"])