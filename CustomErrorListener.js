import antlr4 from 'antlr4';

export default class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errors.push(
            `Error sintáctico en línea ${line}, columna ${column}: ${msg}`
        );
    }
}