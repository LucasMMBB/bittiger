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

**SEARCHING YOUR TEXT**
One of the first things you need to be able to do with an editor is find text you're looking for. Vim has extremely powerful search capabilities, and we'll talk about some of them now.

*Searching by string*
One of most basic and powerful ways to search in vim is to enter "/" command, which takes you to the bottom of your window, and then type what you're looking for and press ENTER

Once you've done your search, you can press "n" to go to the next instance of the result, or "N" to go to the previous one. You can also start by searching backward by using "?" instead of "/".
