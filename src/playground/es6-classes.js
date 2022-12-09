class Person{
  constructor(name = 'Anonymus' , age = 0){
    this.name = name
    this.age = age
  }

  getGretting() {
    return `Hello , My Name is ${this.name}! `
  }

  getDescrption(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
   constructor(name , age , major){
      super(name , age)
      this.major = major
   }

   hasMajor(){
    return !!this.major
   }

   getDescrption(){
    let description = super.getDescrption()
     if(this.hasMajor()){
        description += ` Their major is ${this.major}`
     }   
   
    return description
   }
}

class Trevelers extends Person{
    constructor(name , age , homeLocation) {
        super(name , age)
        this.homeLocation = homeLocation
    }

    getGretting(){
        let gretting = super.getGretting()
        if(this.homeLocation){
            gretting += `I am visiting from ${this.homeLocation}`
        }
        return gretting
    }
}

const zola = new Trevelers('Zelalem' , 22 , 'Ethiopia' );
console.log(zola.getGretting())
const other = new Trevelers()
console.log(other.getGretting())