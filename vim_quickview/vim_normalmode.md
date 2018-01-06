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
`w`: jump to the **b**eginning of the next word<br/>
`e`: jump to the en**d** of the next word<br/>
`b`: jump to the **b**eginning of the previous word<br/>

#### How to go to the beginning/ending of the line
`$`: to the line ending<br/>
`0`: to the line beginning<br/>

#### How to go to next/previous block of code
`{`: jump to the next block of code or we can say that jumpinp to next paragraph<br/>
`}`: jump to the previous block of code<br/>

#### How to go to the beginning/ending of the page
`gg`: go to the first line of the whole page<br/>
`G`: go to the last line of the whole page<br/>
`H`: go to the first line of current page<br/>
`M`: go to the middle of current page<br/>
`L`:go to the last line of current page<br/>
Just easy for remember: High, Middle, Low<br/>

#### How to go to specific line number
`number + gg` or `number + G`: jump to specific line number<br/>
such as: 100G or 100gg<br/>

#### How to mark the position
`m<a>`: mark the position where you are currently at<br/>
`'a`: go to where you marked<br/>
Here `m` means `mark` and `a` is a letter and `a` can be any letters.<br/>
Use `'` and `any letter` to jump to where you mark<br/>

#### How to scroll in vim
`Ctrl + f`: scroll forward full screen<br/>
`Ctrl + b`: scroll backward full screen<br/>

`Ctrl + d`: scroll forward half screen<br/>
`Ctrl + u`: scroll backward half screen<br/>

`Ctrl + e`: scroll forward one line<br/>
`Ctrl + y`: scroll backward one line<br/>
