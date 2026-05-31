grammar Calculator;

program
    : action+ EOF
    ;

action
    : 'accion' IDENTIFICADOR '{' comando+ '}'
    ;

comando
    : 'moverArchivo' 'a' CADENA
    | 'usarEscaneoProfundo'
    | 'retornar' 'resultado'
    | 'notificar' CADENA
    ;

IDENTIFICADOR
    : [a-zA-Z][a-zA-Z0-9]*
    ;

CADENA
    : '\'' (~['\r\n])* '\''
    ;

WS
    : [ \t\r\n]+ -> skip
    ;