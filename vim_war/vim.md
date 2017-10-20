# VIM TUTORIAL
## Super Basic Starter
Tare two modes in vime: COMMAND MODE and INSERT MODE

## Vim as Language
Arguably the most brilliant thing about vim is that as you use it you begin to think in it. Vim is set up to function like a language, complete with nouns, verbs, and adverbs.

Keep in mind that the terms I am going to use here are not technically correct, but should help you understand better how vim works. Again this guide is not meant to replace a full book. It's meant to help you get what doesn't come easily from those types of resources.

**VERBS**
Verbs are the actions we take, and they can be performed on nouns.
Here are some examples:
* d: delete
* c: change
* y: yank(copy)
* v: visually select

**MODIFIERS**
Modifiers are used before nouns to describe the way in which you're going to do
something. Such as:
* i: inside
* a: around
* NUM: number
* t: searches for something and stops before it
* f: searches for that thing and lands on it
* I: find a string

**NOUNS**
In English, nouns are objects you do something to. They are objects.
With vim it's the same. Here are some vim nouns:
* w: word
* s: sentence
* ): sentence
* p: paragraph
* }: paragraph
* t: tag
* b: block

Now we can start to build sentences
Delete two words
d2w

Change inside sentence
cis

Yank inside paragraph(copy the paragraph you're in)
yip
## Get Things Done
Now let's do some basics
**WORKING WITH YOUR FILE**
Some quick basics on working with your file.
* vi/vim file : open your file in vim.
* :w : write your changes to the file
* :q! : quit(q), but without saving the changes(!)
* :wq : write your changes and exit
* :saveas ~/path/ : save your file to that location
* ZZ : a faster way to day :wq
So we can use `:wq`, `ZZ` and `:X`

### SEARCHING YOUR TEXT
One of the first things you need to be able to do with an editor is find text you're looking for. Vim has extremely powerful search capabilities, and we'll talk about some of them now.

*Searching by string*
One of most basic and powerful ways to search in vim is to enter "/" command, which takes you to the bottom of your window, and then type what you're looking for and press ENTER

Once you've done your search, you can press "n" to go to the next instance of the result, or "N" to go to the previous one. You can also start by searching backward by using "?" instead of "/".

*A search reference*
* /{string} : search for stirng
* t : jump up to a character
* f : jump onto a character
* `*` :  search for other instances of the word under your cursor
* n : go to the next instance when you've searched for a string
* N : go to the previous instance when you've searched for a string
* `;` : go to the next instance when you've jumped to a character
* `,` : go to the previous instance when you've jumped to a character.


### MOVING AROUND IN YOUR TEXT
Getting around within your text is critical to productivity. With vim this is both simple and elegant, as it leverates the core principal of VIM AS LANGUAGE that we talked about above. First, some basics.

*Basic motions*
We start with use of the home row. Typists are trained to keep their right hand on the j, k, l, and ";" keys, and this is the starting point for using vim as well.
* j : move down one line
* k : move up one line
* h : move left one character
* l : move right one character

*Moving within the line*
You can easily move within the line you're on.
* 0 : move to the beginning of the line.
* $ : move to the end of the line
* ^ : move to the first non-blank character in the line
* t" : jump to the right before next quotes
* f" : jump and land on the next quotes

*Moving by word*
We can also move by word:
* w : move forward one word
* b : move back one word
* e : move to the end of your word

When you use uppercase you ignore some delimiters within a string that may break it into two words.
* W : move forward one big word
* B : move back one big word

This uppercasing of a given command having different and more powerful effects is something we'll see frequently.

*Moving by sentence or paragraph*
* ) : move forward one sentence
* } : move forward one paragraph

*Moving within the screen*
* H : move to the top of the screen
* M : move to the bottom of the screen
* L : move to the bottom of the screen
* gg : go to the bottom of the file
* G : go to the bottom of the file
* ^U : move up half a screen
* ^D : move down half a screen
* ^F : page down
* ^B : page up

## change text
We've done a bunch of moving within our text. Now let's make some changes. The first thing to remember is that the motions will always be with us - they're part of the language(they're modifiers in the VOCABULARY ABOVE).

1. You start in Normal Mode.
2. Normal Mode is also known as *Command Mode*, as it's where you're usually entering commands. Commands can be movements, deletions, or commands that do these things and then enter into Insert Mode.
3. *Insert Mode* is where you make changes to your file, and there are tons of ways of entering Insert Mode from Command Mode.
4. *Visual Mode* is a way to select text. It's a lot like Normal Mode except your movements change your highlighting. You can select text both character-wise and line-wise.
5. The purpose of *Visual Mode* is then perform some operation on all the content you have highlighted, which makes it very powerful.
6. *Ex Mode* is a mode where you drop down to the bottom, where you get a ":" prompt, and you can enter commands. More on that later. Just know that you can run some powerful command line stuff from there.