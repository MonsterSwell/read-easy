// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window, StatusBarItem, StatusBarAlignment, ExtensionContext, Range, commands, DecorationOptions } from 'vscode';

/// <reference path="text-readability.d.ts"/>
import * as readability from "text-readability";

const difficultPhraseDecorationType = window.createTextEditorDecorationType({
	backgroundColor: "red"
});

const MEDIUM_DIFFICULTY = 4;
const DIFFICULT_DIFFICULTY = 8;

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "read-easy" is now active!');

	// TODO remove sample command
	let disposable = commands.registerCommand('read-easy.helloWorld', () => {
		window.showInformationMessage('Hello World from read-easy!');
	});
	context.subscriptions.push(disposable);

	// Setup Status Bar Item
	let readabilityStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 100);
	readabilityStatusBarItem.tooltip = "Readability score";
	context.subscriptions.push(readabilityStatusBarItem);

	let difficultyStatusGauge = new DifficultyStatusGauge(readabilityStatusBarItem);
	context.subscriptions.push(difficultyStatusGauge);

	context.subscriptions.push(window.onDidChangeActiveTextEditor(difficultyStatusGauge.updateStatusItem, difficultyStatusGauge));
	context.subscriptions.push(window.onDidChangeTextEditorSelection(difficultyStatusGauge.updateStatusItem, difficultyStatusGauge));

	// Setup Text Decorator
	let difficultyTextDecorator = new DifficultyTextDecorator();
	context.subscriptions.push(difficultyTextDecorator);

	context.subscriptions.push(window.onDidChangeActiveTextEditor(difficultyTextDecorator.updateDecorations, difficultyTextDecorator));
	context.subscriptions.push(window.onDidChangeTextEditorSelection(difficultyTextDecorator.updateDecorations, difficultyTextDecorator));
}


// this method is called when your extension is deactivated
export function deactivate() { }

class DifficultyStatusGauge {
	private _statusBarItem: StatusBarItem;

	public constructor(statusBarItem: StatusBarItem) {
		this._statusBarItem = statusBarItem;
	}

	public updateStatusItem() {
		let editor = window.activeTextEditor;
		if (!editor) {
			console.log("Hiding status bar item");

			this._statusBarItem.hide();
			return;
		}

		this._statusBarItem.show();

		let text = editor.document.getText();

		if (text) {
			// console.log(`Got text ${text}`);

			let difficulty = this._getDifficulty(text);
			this._statusBarItem.text = `$(book) Difficulty: ${this._translateValue(difficulty)}`;
		} else {
			this._statusBarItem.text = `$(book) Difficulty: none`;
		}
	}

	public _getDifficulty(text: string): number {
		return readability.daleChallReadabilityScore(text);
	}

	public _translateValue(val: number): string {
		if (val < MEDIUM_DIFFICULTY) {
			return "easy";
		} else if (val >= MEDIUM_DIFFICULTY && val <= DIFFICULT_DIFFICULTY) {
			return "medium";
		} else {
			return "hard";
		}
	}

	public dispose() {
		this._statusBarItem.dispose();
	}
}

class DifficultyTextDecorator {
	public updateDecorations() {
		if (window.activeTextEditor) {
			let text = window.activeTextEditor.document.getText();

			// Update decorations
			const regEx = /[^\.]+\./g;
			const difficultPhrases: DecorationOptions[] = [];

			let match;
			while ((match = regEx.exec(text))) {
				const startPos = window.activeTextEditor.document.positionAt(match.index);
				const endPos = window.activeTextEditor.document.positionAt(match.index + match[0].length);

				if (readability.daleChallReadabilityScore(match[0]) > DIFFICULT_DIFFICULTY) {
					const decoration = { range: new Range(startPos, endPos), hoverMessage: `Dale Chall: difficult` };
					difficultPhrases.push(decoration);
				}
			}

			window.activeTextEditor.setDecorations(difficultPhraseDecorationType, difficultPhrases);
		}
	}

	public dispose() { }
}