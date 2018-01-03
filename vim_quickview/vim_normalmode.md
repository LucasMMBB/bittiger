# VIM Frequent Key Mapping
Most of IDEs are currently supporting VIM. By using vim well, you can work on most of IDEs without setting up your own keys.

#### Notice: please watch out the following notices
1. All commands: Case sensitive
2. All commands: used in Normal node(if not specified)

## VIM modes
Well, you can find a lot of stuff on Google about this and I won't talk much here.
Just remember the diff among them
- Insert mode
- Normal mode
- Visual mode

To switch them, please refer to the pictures attached in the same folders.
## Quick notes
The following are some quick sheck and will be very useful if you want to use VIM proficiently

#### How to jump among words
`w`: jump to the **b**eginning of the next word
`e`: jump to the en**d** of the next word
`b`: jump to the **b**eginning of the previous word

#### How to go to the beginning/ending of the line
`i$`: to the line ending
`0`: to the line beginning

#### How to go to next/previous block of code
`{`: jump to the next block of code or we can say that jumpinp to next paragraph
`}`: jump to the previous block of code

#### How to go to the beginning/ending of the page
`gg`: go to the first line of the whole page
`G`: go to the last line of the whole page
`H`: go to the first line of current page
`M`: go to the middle of current page
`L`:go to the last line of current page
Just easy for remember: High, Middle, Low

#### How to go to specific line number
`number + gg` or `number + G`: jump to specific line number
such as: 100G or 100gg

#### How to mark the position
`m<a>`: mark the position where you are currently at
`'a`: go to where you marked
Here `m` means `mark` and `a` is a letter and `a` can be any letters.
Use `'` and `any letter` to jump to where you mark

#### How to scroll in vim
`Ctrl + f`: scroll forward full screen
`Ctrl + b`: scroll backward full screen

`Ctrl + d`: scroll forward half screen
`Ctrl + u`: scroll backward half screen

`Ctrl + e`: scroll forward one line
`Ctrl + y`: scroll backward one line

