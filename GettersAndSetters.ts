class Person{

  private  _firstName:string='';

    get firstName (){
        return this._firstName;
    }

    set firstName(firstName:string){
        this._firstName = firstName;
    }


}

const person = new Person();

person.firstName = 'Asaad';
console.log (person.firstName);