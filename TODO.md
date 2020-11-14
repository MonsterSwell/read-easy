## Worklog

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
* [x] Organize the code a bit better
  * [x] Extract threshold for difficult words
* [x] Add README
  * [ ] Add GIF
* [ ] Tweak highlighted sentence not to contain leading space
* [ ] Do some tests
  * [ ] [Testing extensions](https://code.visualstudio.com/api/working-with-extensions/testing-extension) is pretty involved
  * [ ] Test the basic model
* [ ] Add a command for the command palette?
* [ ] Make user setting for limits?
