# Analizador Sintáctico - UTN

Este proyecto implementa un analizador léxico, sintáctico y traductor de un lenguaje tipo pseudocódigo a JavaScript.

## Requisitos
- Node.js
- ANTLR4 (JavaScript target)

## Instrucciones

1. Instalar dependencias:
```
npm install antlr4
```

2. Generar archivos ANTLR:
```
antlr4 -Dlanguage=JavaScript -o generated Lenguaje.g4
```

3. Ejecutar con archivo de entrada:
```
node index.js input_ok1.txt
```

## Contenido

- `Lenguaje.g4`: Gramática ANTLR
- `index.js`: Código principal
- `CustomVisitor.js`: Traducción a JavaScript
- `input_ok1.txt`, `input_ok2.txt`: Entradas correctas
- `input_err1.txt`, `input_err2.txt`: Entradas incorrectas
