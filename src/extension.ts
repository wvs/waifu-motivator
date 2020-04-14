// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { cheers } from './cheers';
import { Tadaima } from './tadaima';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension "waifu-motivator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let cheering = vscode.commands.registerCommand('waifu-motivator.cheerMe', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(cheers.cheerForBadTime());
	});

	let praising = vscode.commands.registerCommand('waifu-motivator.praiseMe', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(cheers.cheerForGoodWork());
	});

	let tadaima = vscode.commands.registerCommand('waifu-motivator.tadaima', () => {
		const panel = vscode.window.createWebviewPanel(
			'Tadaima', // Identifies the type of the webview. Used internally
			'Tadaima', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options. More on these later.
		);

		panel.webview.html = Tadaima();
	});

	// On return message: https://code.visualstudio.com/api/extension-guides/webview
	context.subscriptions.push(cheering);
	context.subscriptions.push(praising);
	context.subscriptions.push(tadaima);

	// terminal exit status can be read, read index.d.ts line: 5059
	if (ensureTerminalExists()) {
		selectTerminal().then(terminal => {
			if (terminal) {
				terminal.sendText("echo 'Hello world!'");
			}
		});
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}


// borrowed from https://github.com/microsoft/vscode-extension-samples/blob/master/terminal-sample/src/extension.ts
function selectTerminal(): Thenable<vscode.Terminal | undefined> {
	interface TerminalQuickPickItem extends vscode.QuickPickItem {
		terminal: vscode.Terminal;
	}
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `name: ${t.name}`,
			terminal: t
		};
	});
	return vscode.window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}

function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
	}
	return true;
}
