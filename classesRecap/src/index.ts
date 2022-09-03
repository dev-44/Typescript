class Player {

   /*Public and private (keywords not the concept) modifiers doens't exists in Javascript. By default every property or method is public*/
   /*public keyword is only used for clarification purposes for developers*/
   /*public can be accessed anywhere
    private can be accessed only in the class
    protected can be accessed in the class and in the classes that inherit from it
    */

   public readonly first: string              //readonly can also be used in objects
   public readonly last: string
   private _score = 0                          //Inference

   constructor(first: string, last: string){
      this.first = first
      this.last = last
   }

   //Shortcut
   //constructor(public first: string, public last: string, private score: number){}

   /*If a property doesn't have a setter Typscript will set to 'readonly'*/
   get fullName(): string {
      return `${this.first} ${this.last}`
   }

   get score(){
      return this._score
   }

   set score(newScore: number){
      if(newScore < 0){
         throw new Error('Score cannot be negative!')
      }

      this._score = newScore
   }
}

const elton = new Player("Elton", "John")
elton.fullName

class SuperPlayer extends Player {
   isAdmin: boolean = true
}