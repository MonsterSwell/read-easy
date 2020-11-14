// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as readability from "text-readability";

let readabilityStatusBarItem: vscode.StatusBarItem;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "read-easy" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('read-easy.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from read-easy!');
	});

	context.subscriptions.push(disposable);

	readabilityStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	context.subscriptions.push(readabilityStatusBarItem);

	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	vscode.window.showInformationMessage('Update status bar');

	const text = vscode.window.activeTextEditor?.document.getText();

	if (text) {
		const rv = readability.textStandard(text, true);

		console.log(`Debug: ${rv}`);

		readabilityStatusBarItem.text = `$(book) ${rv}`;
		readabilityStatusBarItem.show();
	}
}

// this method is called when your extension is deactivated
export function deactivate() { }
