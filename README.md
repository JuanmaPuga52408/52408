# Analizador Léxico y Sintáctico con ANTLR4

## Alumno : Juan Manuel Puga

## Materia

Sintaxis y Semántica de los Lenguajes

## Descripción

Este proyecto consiste en el desarrollo de un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript.

El lenguaje diseñado permite definir acciones relacionadas con procesos de respaldo de archivos, incluyendo operaciones como:

- Activar escaneo profundo.
- Mover archivos a una ubicación determinada.
- Mostrar notificaciones.
- Retornar resultados.

Además del análisis léxico y sintáctico, el sistema genera código JavaScript equivalente y lo ejecuta.

---

## Herramientas utilizadas

- ANTLR4
- JavaScript
- Node.js
- Visual Studio Code

---

## Estructura del proyecto

```
Analizador/
│
├── generated/
│   ├── CalculatorLexer.js
│   ├── CalculatorParser.js
│   ├── CalculatorVisitor.js
│   └── CalculatorListener.js
│
├── Calculator.g4
├── CustomErrorListener.js
├── index.js
├── input.txt
├── package.json
└── README.md
```

---

## Gramática

La gramática desarrollada define las siguientes construcciones:

### Acción

```txt
accion nombre {
    comandos
}
```

### Comandos disponibles

```txt
usarEscaneoProfundo

moverArchivo a 'ruta'

notificar 'mensaje'

retornar resultado
```

---

## Ejemplo de entrada

Archivo `input.txt`

```txt
accion respaldo {
    usarEscaneoProfundo
    moverArchivo a 'C:/backup'
    notificar 'Proceso terminado'
    retornar resultado
}
```

---

## Ejemplo de salida

### Tabla de tokens

```txt
accion ---> ACCION
respaldo ---> IDENTIFICADOR
{ ---> LLAVE_IZQ
usarEscaneoProfundo ---> USARESCANEOPROFUNDO
moverArchivo ---> MOVERARCHIVO
a ---> A
'C:/backup' ---> CADENA
notificar ---> NOTIFICAR
'Proceso terminado' ---> CADENA
retornar ---> RETORNAR
resultado ---> RESULTADO
} ---> LLAVE_DER
```

### Árbol sintáctico

```txt
(program
    (action accion respaldo
        {
            (comando usarEscaneoProfundo)
            (comando moverArchivo a 'C:/backup')
            (comando notificar 'Proceso terminado')
            (comando retornar resultado)
        }
    )
<EOF>)
```

### Código JavaScript generado

```javascript
function respaldo(){
    console.log("Escaneo profundo activado");
    console.log("Moviendo archivo a C:/backup");
    console.log("NOTIFICACION: Proceso terminado");
    return "resultado";
}

respaldo();
```

---

## Ejecución

Instalar dependencias:

```bash
npm install
```

Generar los archivos de ANTLR:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated Calculator.g4
```

Ejecutar el analizador:

```bash
node index.js
```

---

## Funcionalidades implementadas

✔ Análisis léxico

✔ Análisis sintáctico

✔ Tabla de tokens

✔ Árbol sintáctico

✔ Manejo de errores sintácticos

✔ Generación de código JavaScript

✔ Ejecución automática del código generado

---

## Conclusión

Se desarrolló un lenguaje específico para la automatización de tareas de respaldo de archivos utilizando ANTLR4. El proyecto permite realizar el análisis léxico y sintáctico de programas escritos en dicho lenguaje, generar código JavaScript equivalente y ejecutarlo, cumpliendo con los objetivos planteados para el trabajo práctico.