
class baseObject {

    constructor (private width:number =0, private length:number){

    }
}

class rectangle extends baseObject {

    constructor (private width:number =5, private length:number=2){
        super(width, length);
    }

     calcSize(){
        return  this.length * this.width ;
    }
}

const r = new rectangle();
console.log (r.calcSize());