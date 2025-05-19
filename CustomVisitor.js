const LenguajeVisitor = require('./generated/LenguajeVisitor').LenguajeVisitor;

class CustomVisitor extends LenguajeVisitor {
    visitPrograma(ctx) {
        return ctx.children.map(child => this.visit(child)).join("\n");
    }

    visitDeclaracion(ctx) {
        const id = ctx.nombre().getText();
        if (ctx.valor()) {
            const val = this.visit(ctx.valor());
            return `let ${id} = ${val};`;
        }
        return `let ${id};`;
    }

    visitOperacion_texto(ctx) {
        const id = ctx.nombre().getText();
        const func = ctx.transformacion().getText();
        const arg = this.visit(ctx.cadena());
        const mapFunc = {
            mayusculas: ".toUpperCase()",
            minusculas: ".toLowerCase()",
            longitud: ".length",
            invertir: ".split('').reverse().join('')",
            reemplazar: ".replace('a','b')"
        };
        return `let ${id} = ${arg}${mapFunc[func] || ''};`;
    }

    visitImpresion(ctx) {
        const val = this.visit(ctx.valor());
        return `console.log(${val});`;
    }

    visitValor(ctx) {
        return ctx.getText();
    }

    visitTexto(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        return ctx.getText();
    }
}

module.exports = CustomVisitor;
