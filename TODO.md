# Worklog

* [x] Get the basic functionality to work
  * Display one of the scores from the library in the status bar. Just get a very minimal slice of functionality working end-to-end to make sure we are starting from a known point.
* [x] Provide types for the external library
  * This took a lot longer than expected (was non-essential) but I wanted to get it done. I could have gotten the external library to work with `any` types fine, but I wanted to get it right.
* [x] Convert the readability data into a more humane scale
  * American grade scales are difficult to understand.
  * It's difficult too to find bits of text that have been calibrated to test this with. Figuring out what text would trigger what rating required diving into the library code.
* [x] Add tooltip to statusbar item
  * So that it's clear what this is.
* [x] Mark difficult words in the editor
  * That was a lot easier than expected and seems to do what it should. Phrases that are particularly difficult are now marked red.
  * [x] Tweak highlighted sentence not to contain leading space
    * Getting the selection indices right so that an exact sentence is selected proved to be rather difficult regardless.
* [x] Use daleChall globally
  * For highlighting sentences we needed a metric that would not work on an entire text but also on individual sentences.
  * It seems more correct to use the same metric both for the status indicator as for the highlighing of difficult phrases.
* [x] Organize the code a bit better
  * [x] Extract threshold for difficult words into a constant. Makes it easier to fine tune.
* [x] Add README
  * [x] Add GIF of what this is supposed to look like.
* [x] Do some tests
  * [x] Test the basic model

## Backlog

* [ ] Add a command for the command palette
* [ ] Make user setting for limits
* [ ] Make it possible to disable highlighting
