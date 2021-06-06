import {useRef, useState} from "react";
enum Operators {
    add,
    substract,
    divide,
    product,
}
export const useCalculator = () => {
     // manteniendo la ultima operacion realizada
  const lastOperationClicked = useRef<Operators>();

  const [previusNumber, setPreviusNumber] = useState("0");
  const [number, setNumber] = useState("0");

  // Funcion para limpiar y poner 0
  const clear = () => {
    setNumber("0");
    setPreviusNumber("0");
  };

  // Funcion para que al teclear en los numeros arme el numero
  const constructNumber = (clickedNumber: string) => {

    // Validaciones para el numero a teclear


    // 1 Verificar si ya existe un punto ej -> 0. , no debe aceptar doble punto 0..
    if ( number.includes('.')  && clickedNumber === '.' ) { // Si ya hay un . y el numero clickeado es . que salte
      return;
    } 
    
    // 2 si el numero empieza con 0 o -0
    if ( number.startsWith('0') || number.startsWith('-0') ) { 
      
      // 3 Verificando el punto decimal, si preciono . entonces concatene number. ej 0. 1. 2. etc
      if ( clickedNumber === '.' ) {
        setNumber( number + clickedNumber );

        // 4 Evaluar si el numero clickeado es un 0 y ya hay un punto ej -> 0. y clickeamo 0 seria 0.0
      } else if ( clickedNumber === '0' && number.includes('.')) {
        setNumber( number + clickedNumber );

        // 5 Evaluar si se clickea un numero que no sea 0 y no hay un . quitar el 0 y poner el numbero
      } else if ( clickedNumber !== '0' && !number.includes('.') ) {
        setNumber(clickedNumber);

        // 6 Evitar clickear 0000.000 ya que no es un numero
      } else if ( clickedNumber === '0' && !number.includes('.') ) {
        setNumber(number);
      } else {
        setNumber(number + clickedNumber);  
      }
    } else {
      setNumber(number + clickedNumber);
    } 
  };

  // Funcion que al dar click en +/- le pone un menos si no lo tiene y un mas si no lo tiene y viceversa
  const addPositiveOrNegativeSigno = () => {

    if ( number.includes('-') ) { // Si el numero tecleado ya tiene el signo menos
      setNumber( number.replace('-', '') ); // se lo remplazamos por un vacion = ''
    } else { // caso contrario le concatenamos el signo menos al inicio
      setNumber( '-' + number );
    }
  }

  // Funcion para borrar el boton de la ultima entrada clikeada
  // Por ejemplo tenes 999 y das click en del debe quedar 99
  const deleteLastClickedNumber = () => {
    let partNegative = '';
    let tempNumber = number;

    if ( number.includes('-') ) {
      partNegative = '-';
      tempNumber = number.substr(1);
    }

    if ( tempNumber.length > 1 ) {
      setNumber( partNegative + tempNumber.slice(0,-1) );
    } else {
      setNumber('0');
    }

  }

  // Funcion para que al escribir el numero y dar click en una operacion pase arriba
  const changePreviusNumberByNumber = () => {
    if ( number.endsWith('.') ) {
      setPreviusNumber( number.slice(0,-1) );
    } else {
      setPreviusNumber(number);
    }

    setNumber('0');
  }

  // Operaciones matematicas
  const btndivide = () => {
    changePreviusNumberByNumber();
    lastOperationClicked.current = Operators.divide;
  }

  const btnadd = () => {
    changePreviusNumberByNumber();
    lastOperationClicked.current = Operators.add;
  }

  const btnsubstract = () => {
    changePreviusNumberByNumber();
    lastOperationClicked.current = Operators.substract;
  }

  const btnproduct = () => {
    changePreviusNumberByNumber();
    lastOperationClicked.current = Operators.product;
  }

  const calculate = () => {
    // 1 Transformar number
    const num1 = Number(number);
    const num2 = Number(previusNumber);

    switch (lastOperationClicked.current) {
      case Operators.add:
        setNumber( `${ num1 + num2 }` );
      break;
      case Operators.substract:
        setNumber( `${ num2 - num1 }` );
      break;
      case Operators.product:
        setNumber( `${ num1 * num2 }` );
      break;
      case Operators.divide:
        ( num1 === 0 )
        ?
        setNumber( 'Err' )
        :
          setNumber( `${ num2 / num1 }` );
      break;
      default:
        break;
    }
    setPreviusNumber('0');
  }

  return {
    btnadd,
    btndivide,
    btnproduct,
    btnsubstract,
    calculate,
    deleteLastClickedNumber,
    addPositiveOrNegativeSigno,
    clear,
    constructNumber,
    number,
    previusNumber,
  }
}
