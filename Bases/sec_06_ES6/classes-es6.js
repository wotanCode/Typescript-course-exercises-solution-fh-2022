(()=>{

  class Avenger {
    name;
    power;

    constructor( name = "No name", power = 0){
      this.name = name;
      this.power = power;
    }
  }

  class flyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super( name, power)
      this.flying= true;
    }
  }

  const hulk = new Avenger('Hulk', 9001);
  const falcon = new flyingAvenger('Falcon', 50,);
  console.log(hulk);
  console.log(falcon);

})()