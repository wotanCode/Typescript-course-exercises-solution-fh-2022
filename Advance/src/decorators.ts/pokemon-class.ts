function printToConsole( constructor: Function ) {
  console.log( constructor )
}

const printToConsonleConditional = (print: boolean = false):Function =>{
  if (print){
    return printToConsole;
  } else {
    return () => {};
  }
}

const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor )
  Object.seal( constructor.prototype )
}

@bloquearPrototipo
@printToConsonleConditional( true )

export class Pokemon {

  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}
}