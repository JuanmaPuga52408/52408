const fs = require('fs');
const antlr4 = require('antlr4');
const LenguajeLexer = require('./generated/LenguajeLexer').LenguajeLexer;
const LenguajeParser = require('./generated/LenguajeParser').LenguajeParser;
const CustomVisitor = require('./CustomVisitor');

const input = fs.readFileSync(process.argv[2], 'utf-8');
const chars = new antlr4.InputStream(input);
const lexer = new LenguajeLexer(chars);

// CAPTURAR ERRORES LÉXICOS
lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`Error léxico en línea ${line}, columna ${column}: ${msg}`);
    }
});

const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// TABLA DE TOKENS
console.log("=== TABLA DE LEXEMAS - TOKENS ===");
tokens.tokens.forEach(t => {
    if (t.type > 0) {
        console.log(`Línea ${t.line}: Token(${lexer.symbolicNames[t.type]}) - Lexema: '${t.text}'`);
    }
});

const parser = new LenguajeParser(tokens);
parser.buildParseTrees = true;

try {
    const tree = parser.programa();
    console.log("\n=== ÁRBOL DE ANÁLISIS ===");
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new CustomVisitor();
    const output = visitor.visit(tree);
    console.log("\n=== TRADUCCIÓN A JAVASCRIPT ===");
    console.log(output);

    fs.writeFileSync("output.js", output);
} catch (err) {
    console.error("Error de análisis sintáctico:", err.message);
}
