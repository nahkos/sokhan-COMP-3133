export class Customer {
    private firstName: string
    private lastName: string
    private age: number

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public getAge(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`)
    }
}

//object = instance of class
// let customer = new Customer('Stephanie', 'Henridge', 25)
// customer.greeter()