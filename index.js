import fs from 'fs';
import antlr4 from 'antlr4';

import CalculatorLexer from './generated/CalculatorLexer.js';
import CalculatorParser from './generated/CalculatorParser.js';

import CustomErrorListener from './CustomErrorListener.js';

const input = fs.readFileSync('input.txt', 'utf8');

console.log("===== CONTENIDO =====");
console.log(input);

const chars = new antlr4.InputStream(input);

const lexer = new CalculatorLexer(chars);

const tokenStream = new antlr4.CommonTokenStream(lexer);

tokenStream.fill();

console.log("\n===== TABLA DE TOKENS =====");

const tokenNames = [
    "EOF",
    "ACCION",
    "LLAVE_IZQ",
    "LLAVE_DER",
    "MOVERARCHIVO",
    "A",
    "USARESCANEOPROFUNDO",
    "RETORNAR",
    "RESULTADO",
    "NOTIFICAR",
    "IDENTIFICADOR",
    "CADENA",
    "WS"
];

tokenStream.tokens.forEach(token => {

    if(token.type !== antlr4.Token.EOF){

        console.log(
            `${token.text} ---> ${tokenNames[token.type]}`
        );

    }

});

const parser = new CalculatorParser(tokenStream);

const errorListener = new CustomErrorListener();

parser.removeErrorListeners();

parser.addErrorListener(errorListener);

const tree = parser.program();

console.log("\n===== ANALISIS SINTACTICO =====");

if(errorListener.errors.length > 0){

    errorListener.errors.forEach(e => console.log(e));

    process.exit(1);

}

console.log("Programa correcto.");

console.log("\n===== ARBOL SINTACTICO =====");

console.log(tree.toStringTree(parser.ruleNames));

console.log("\n===== CODIGO GENERADO =====\n");

let jsCode = "";

const acciones = tree.action();

acciones.forEach(accion => {

    const nombre = accion.IDENTIFICADOR().getText();

    jsCode += `function ${nombre}(){\n`;

    const comandos = accion.comando();

    comandos.forEach(cmd => {

        const texto = cmd.getText();

        if(texto.includes("usarEscaneoProfundo")){

            jsCode +=
            `    console.log("Escaneo profundo activado");\n`;

        }

        else if(texto.includes("moverArchivo")){

            const ruta =
                cmd.CADENA().getText().replace(/'/g,'');

            jsCode +=
            `    console.log("Moviendo archivo a ${ruta}");\n`;

        }

        else if(texto.includes("notificar")){

            const mensaje =
                cmd.CADENA().getText().replace(/'/g,'');

            jsCode +=
            `    console.log("NOTIFICACION: ${mensaje}");\n`;

        }

        else if(texto.includes("retornar")){

            jsCode +=
            `    return "resultado";\n`;

        }

    });

    jsCode += `}\n`;

    jsCode += `${nombre}();\n\n`;

});

console.log(jsCode);

console.log("\n===== EJECUCION =====");

eval(jsCode);