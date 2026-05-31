// Generated from c:/Users/juanm/OneDrive/Escritorio/Analizador nuevo/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(CalculatorParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(CalculatorParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#action}.
	 * @param ctx the parse tree
	 */
	void enterAction(CalculatorParser.ActionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#action}.
	 * @param ctx the parse tree
	 */
	void exitAction(CalculatorParser.ActionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(CalculatorParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(CalculatorParser.ComandoContext ctx);
}