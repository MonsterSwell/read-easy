import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as readeasy from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Test difficulty calculation', () => {
		let d = new readeasy.DifficultyStatusGauge(vscode.window.createStatusBarItem());

		assert.strictEqual(0.15, d._getDifficulty("I am dog."));
		assert.strictEqual(10.75, d._getDifficulty("A clandestine passenger on a motionless voyage."));
	});
});
