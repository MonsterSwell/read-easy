# read-easy README

This is the README for your extension "read-easy". After writing up a brief description, we recommend including the following sections.

## Ideas

* Display in status bar
* Display as part of a language server
* Sidebar or other widget for the full overview
* Add custom command?

## TODOS

* [x] Get the basic functionality to work
  * Display one of the scores from the library in the status bar.
* [x] Provide types for the external library
  * This took a lot longer than expected (was non-essential) but finally it works.
* [x] Convert the readability data into a more humane scale
  * American grade scales are difficult to understand.
  * It's difficult too to find bits of text that have been calibrated to test this with.
* [x] Add tooltip to statusbar item
  * So that it's clear what this is.
* [x] Mark difficult words in the editor
  * That was a lot easier than expected and seems to do what it should. Phrases that are particularly difficult are now marked red.
* [x] Use daleChall globally
  * It seems more correct to use the same metric both for the indicator as for the difficult phrases.
* [ ] Organize the code a bit better
  * [ ] Extract threshold for difficult words
* [ ] Make user setting for limits?
* [ ] Tweak highlighted element not to contain leading space
* [ ] Do some tests
  * [ ] [Testing extensions](https://code.visualstudio.com/api/working-with-extensions/testing-extension) is pretty involved
  * [ ] Test the basic models
* [ ] Add a command for the command palette?

## Features

An extension that displays the difficulty of the text in the current editor in the status bar and highlights the more difficult sentences in the text.

\!\[feature X\]\(images/feature-x.png\)

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
