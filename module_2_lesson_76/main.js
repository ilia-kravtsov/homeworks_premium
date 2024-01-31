class PersonCreator {
  constructor(name, age, weight, location, profession) {
    this.name = name
    this.age = age
    this.location = location
    this.profession = profession
    this.weight = weight
  }
  getPresentMessage() {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, my hometown is ${this.location}, where I currently work as a ${this.profession}`);
  }
  
  writeCode() {
    console.log(`${this.name} must code 24/7`)
  }
  
  getWeight() {
    return this.weight
  }
}

let person_1 = new PersonCreator('ilia', 30,70,'Stavropol', 'firefighter')

person_1.getPresentMessage() // Hi, my name is ilia, I'm 30 years old, my hometown is Stavropol, where I currently work as a firefighter
person_1.writeCode() // ilia must code 24/7

person_1 = new PersonCreator('ivan', 27, 80,'Moscow', 'engineer')

person_1.getPresentMessage() // Hi, my name is ivan, I'm 27 years old, my hometown is Moscow, where I currently work as a engineer
person_1.writeCode() // ivan must code 24/7

const person_2 = new PersonCreator('olga', 29, 90,'Ryazan', 'designer')

person_2.getPresentMessage() // Hi, my name is olga, I'm 29 years old, my hometown is Ryazan, where I currently work as a designer
person_2.writeCode() // olga must code 24/7

// person_2 = new PersonCreator('oleg', 29, 'Ryazan', 'mover') <- atata, forbidden.

const totalWeight = person_1.getWeight() + person_2.getWeight()
console.log(totalWeight) // 170