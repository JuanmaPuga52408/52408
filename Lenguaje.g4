grammar Lenguaje;

programa: (declaracion | funcion | ejecucion)* ;

declaracion: 'variable' nombre ('=' valor)? ';' ;

funcion: 'funcion' nombre '(' argumentos? ')' '{' instrucciones '}' ;

argumentos: nombre (',' nombre)* ;

instrucciones: (operacion_texto | impresion | retorno)* ;

operacion_texto: nombre '=' transformacion '(' cadena ')' ';' ;

transformacion: 'mayusculas' | 'minusculas' | 'longitud' | 'invertir' | 'reemplazar' ;

impresion: 'imprimir' '(' valor ')' ';' ;

retorno: 'devolver' valor ';' ;

valor: texto | numero | nombre ;

cadena: texto | nombre ;

texto: '"' caracteres '"' ;

nombre: [a-zA-Z_][a-zA-Z_0-9]* ;

numero: [0-9]+ ;

caracteres: ~["\r\n]* ;

WS: [ \t\r\n]+ -> skip ;
