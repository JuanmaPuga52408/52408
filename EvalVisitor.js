import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class EvalVisitor extends CalculatorVisitor {

    visitProgram(ctx) {

        let resultado = "";

        for (let accion of ctx.action()) {
            resultado += this.visit(accion) + "\n";
        }

        return resultado;
    }

    visitAction(ctx) {

        const nombre = ctx.IDENTIFICADOR().getText();

        let codigo = `function ${nombre}() {\n`;

        for (let cmd of ctx.comando()) {
            codigo += this.visit(cmd);
        }

        codigo += "}\n";
        codigo += `${nombre}();\n`;

        return codigo;
    }

    visitComando(ctx) {

        const texto = ctx.getText();

        if (texto.startsWith("usarEscaneoProfundo")) {
            return `    console.log("Escaneo profundo activado");\n`;
        }

        if (texto.startsWith("moverArchivo")) {

            const ruta = ctx.CADENA().getText();

            return `    console.log("Moviendo archivo a ${ruta.replace(/'/g,"")}");\n`;
        }

        if (texto.startsWith("notificar")) {

            const mensaje = ctx.CADENA().getText();

            return `    console.log("NOTIFICACION: ${mensaje.replace(/'/g,"")}");\n`;
        }

        if (texto.startsWith("retornar")) {
            return `    return "resultado";\n`;
        }

        return "";
    }
}