// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window, StatusBarItem, StatusBarAlignment, ExtensionContext, Range, commands, DecorationOptions } from 'vscode';

/// <reference path="text-readability.d.ts"/>
import * as readability from "text-readability";

let readabilityStatusBarItem: StatusBarItem;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "read-easy" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('read-easy.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Hello World from read-easy!');
	});

	context.subscriptions.push(disposable);

	readabilityStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 100);
	readabilityStatusBarItem.tooltip = "Readability score";
	context.subscriptions.push(readabilityStatusBarItem);

	context.subscriptions.push(window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(window.onDidChangeTextEditorSelection(updateStatusBarItem));

	updateStatusBarItem();
}

const difficultPhraseDecorationType = window.createTextEditorDecorationType({
	backgroundColor: "red"
});


function updateStatusBarItem(): void {
	window.showInformationMessage('Update status bar');

	readabilityStatusBarItem.text = `$(book)`;
	readabilityStatusBarItem.show();

	if (window.activeTextEditor) {
		const text = window.activeTextEditor?.document.getText();
		console.log(text);

		const rv = readability.daleChallReadabilityScore(text);
		console.log(`Debug: ${rv} `);

		readabilityStatusBarItem.text = `$(book) ${translateValue(rv)} `;

		// Update decorations
		const regEx = /[^\.]+\./g;
		const difficultPhrases: DecorationOptions[] = [];
		let match;
		while ((match = regEx.exec(text))) {
			const startPos = window.activeTextEditor.document.positionAt(match.index);
			const endPos = window.activeTextEditor.document.positionAt(match.index + match[0].length);

			if (readability.daleChallReadabilityScore(match[0]) > 9) {
				const decoration = { range: new Range(startPos, endPos), hoverMessage: `Dale Chall: difficult` };
				difficultPhrases.push(decoration);
			}

			console.log("Matched");
			console.log(match.index);
		}
		window.activeTextEditor.setDecorations(difficultPhraseDecorationType, difficultPhrases);
	}
}

function translateValue(val: number): string {
	if (val < 4) {
		return "easy";
	} else if (val >= 4 && val <= 9) {
		return "medium";
	} else {
		return "hard";
	}
}

// this method is called when your extension is deactivated
export function deactivate() { }
