// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import generateEvent from "./commentType/event";
import generateProperty from "./commentType/property";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('欢迎使用快捷生成注释插件');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand('my-comment.helloWorld', () => {
  // 	// The code you place here will be executed every time your command is executed
  // 	// Display a message box to the user
  // 	vscode.window.showInformationMessage('Hello World from my-comment!');
  // });

  const propertyComment = vscode.commands.registerCommand(
    "my-comment.property",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showInformationMessage("请选择需要生成注释的文件");
        return;
      }

      const line = editor.selection.active.line;
      const comment = generateProperty(editor?.selection.start.character);

      editor?.edit((builder) => {
        builder.insert(new vscode.Position(line, 0), comment);
      });
    },
  );

  const eventComment = vscode.commands.registerCommand(
    "my-comment.event",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showInformationMessage("请选择需要生成注释的文件");
        return;
      }

      const line = editor.selection.active.line;
      const comment = generateEvent(editor?.selection.start.character);

      editor?.edit((builder) => {
        builder.insert(new vscode.Position(line, 0), comment);
      });
    },
  );

  context.subscriptions.push(propertyComment);
  context.subscriptions.push(eventComment);
}

// this method is called when your extension is deactivated
export function deactivate() {}
