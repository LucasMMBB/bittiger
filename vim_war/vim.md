# VIM TUTORIAL
I found this tutorial online and I modified it. I believe that I should share it with you all

## vimtutor
Before i introduce vim. I want to mention the official vim documentation. Use command line `vimtutor` to check it.

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
```vim
d2w
```
Change inside sentence
```vim
cis
```
Yank inside paragraph(copy the paragraph you're in)
```vim
yip
```
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

### Searching your text
One of the first things you need to be able to do with an editor is find text you're looking for. Vim has extremely powerful search capabilities, and we'll talk about some of them now.

**Searching by string**
One of most basic and powerful ways to search in vim is to enter "/" command, which takes you to the bottom of your window, and then type what you're looking for and press ENTER

Once you've done your search, you can press "n" to go to the next instance of the result, or "N" to go to the previous one. You can also start by searching backward by using "?" instead of "/".

**A search reference**
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

**Basic motions**
We start with use of the home row. Typists are trained to keep their right hand on the j, k, l, and ";" keys, and this is the starting point for using vim as well.
* j : move down one line
* k : move up one line
* h : move left one character
* l : move right one character

**Moving within the line**
You can easily move within the line you're on.
* 0 : move to the beginning of the line.
* $ : move to the end of the line
* ^ : move to the first non-blank character in the line
* t" : jump to the right before next quotes
* f" : jump and land on the next quotes

**Moving by word**
We can also move by word:
* w : move forward one word
* b : move back one word
* e : move to the end of your word

When you use uppercase you ignore some delimiters within a string that may break it into two words.
* W : move forward one big word
* B : move back one big word

This uppercasing of a given command having different and more powerful effects is something we'll see frequently.

**Moving by sentence or paragraph**
* ) : move forward one sentence
* } : move forward one paragraph

**Moving within the screen**
* H : move to the top of the screen
* M : move to the bottom of the screen
* L : move to the bottom of the screen
* gg : go to the bottom of the file
* G : go to the bottom of the file
* ^U : move up half a screen
* ^D : move down half a screen
* ^F : page down
* ^B : page up

## Change Text
We've done a bunch of moving within our text. Now let's make some changes. The first thing to remember is that the motions will always be with us - they're part of the language(they're modifiers in the VOCABULARY ABOVE).

1. You start in Normal Mode.
2. Normal Mode is also known as *Command Mode*, as it's where you're usually entering commands. Commands can be movements, deletions, or commands that do these things and then enter into Insert Mode.
3. *Insert Mode* is where you make changes to your file, and there are tons of ways of entering Insert Mode from Command Mode.
4. *Visual Mode* is a way to select text. It's a lot like Normal Mode except your movements change your highlighting. You can select text both character-wise and line-wise.
5. The purpose of *Visual Mode* is then perform some operation on all the content you have highlighted, which makes it very powerful.
6. *Ex Mode* is a mode where you drop down to the bottom, where you get a ":" prompt, and you can enter commands. More on that later. Just know that you can run some powerful command line stuff from there.

Let's recall our languate: verb, modifier, noun. So we're assuming we start in Normal Mode, and we're going to switch into Insert Mode in order to change something.

We have a few options to go into Insert Mode. **change(c), insert(i), append(a)**, and we can do variations on these, as seen below.

### Basic change/insert options
* i : *insert* before the cursor
* a : *append* after the cursor
* I : *Insert* at the beginning of the line
* A : *Append* at the end of the line
* o : *open* a new line below the current one
* O : *Open* a new line above the current one
* r : *replace* the one character under your cursor
* R : *Replace* the character under your cursor, but just keep typing afterwards
* cm : change whatever you define as a *movement*, e.g. a word, or a sentence, or a paragraph.
* C : *Change* the current line from where you're at
* ct? : *change* change up to the question mark
* s : *substitute* from where you are to the next command(noun)
* S : *substitute* the entire current line

**Formatting Text**
It's sometimes helpful to format text quickly, such as paragraphs, and this can easily be done with the following command:
```vim
gq ap
```
`gq` works based on your textwidth setting, which means it'll true up whatever you invoke it on to be nice and neat within those boundaries.

**Deleting text**
Now we know how to change text, let's see how to do straight deletes. As you're probably getting now, it's very similar - just a difference action to start things off.
* x : *exterminate*(delete) the character under the cursor
* X : *exterminate*(delete) the character before the cursor
* dm : delete whatever you defines as a *movement*, e.g. a word, or a sentence, or a paragraph.
* dd : delete the current line
* dt : delete delete from where you are to the period
* D : delete to the end of the line
* J : *join* the current line with next one(delete what's between)

**UNDO AND REDO**
A text editor can't exist without undo and redo. As you're probably noticed, vim does its best to make the keys for the actions feel intuitive, and undo and redo are not exceptions.
* u : undo your last action
* Ctrl-r :  redo the last action

Both commands can be used repeatedly, until you either go all the way back to last save, or all the way forward to your current state.

**REPEATING ACTIONS**
One of the most powerful commands in all of vim is the period ".".
The period "." allows you to do something brilliant - it lets you repeat whatever it is that you just did

`Using the "." to repeat your last action`

For example, delete a word `dw` and delete five words `5.` .

**COPY AND PASTE**

*Copying text*

`vim` does copying a bit different than one might except. The command isn't `c`, lol. if you'll remember, `c` is already taken for "change". `vim` instead uses `y` for "yank" as it's copy command and shortcut.
* y : yank(copy) whatever's selected
* yy : yank the current line

**CUTTING TEXT**
Cutting text is simple: it's the same as deleting. So whatever syntax you're using for that, you're actually pulling that deleted text into a buffer and preparing it to be pasted.

**PASTING TEXT**
We use `p` command as its base. So, if you delete a line using `dd`, you can paste it back using `p`.

One thing to remember about pasting is that it generally starts right after your cursor, and either pastes characters/words or lines or columns - based on what you yanked. Also remember that you can undo any paste with universal undo command "u".

A copy and paste reference
* y : yank from where you are to the next command(noun)
* yy : a shortcut for copying the current line
* p : paste the copied/deleted text after the current cursor position
* P : paste the copied/deleted text before the current cursor position

*Switching lines of text*
```vim
ddp
```
This is a quick trick you can use to swap the position of two lines of text. The first part deletes the line you're on, and the second part puts it back above where it used to be.

**SPELLCHECKING**
We'd be in pretty bad shape if we couldn't spellcheck, and `vim` does it quite well. First we need to set the option within our conf file `somewhere in your ~/.vimrc`

```vim
set spell spellang=en_us
```

Finding misspelled words

When you have `set spell` enabled within your conf file, misspelled words are automatically underlined for you. You can also enable or disable this by `:set spell` and `set nospell`

For I don't change my conf file. Instead I just enable it whenever i want to use it.

Either way, once you've got some misspellings you can then advance through them and take action using following commands:

*Go to the next misspelled word*
```vim
]s
```

*Go to the last misspelled word*
```vim
[s
```

*When on a misspelled word, get some suggestions*
```vim
z=
```

*Mark a misspelled word as correct*
```
zg
```

*Mark a good word as misspelled*
```vim
zw
```

### SUBSTITUTION
Another powerful feature of VIM is its ability to do powerful substitutions. They're done by specifying what you're looking for first, then what you're changing it to, then the scope of the change.

The basic setup is the `:%s`

*change "foo" to "bar" on every line*
```vim
:%s /foo/bar/g
```

*change "foo" to "bar" on just the current line*
'''vim
:s /foo/bar/g
'''
There are many other options, but these are the basics

## Advanced

Cool! So we're covered a number of basics that any text editor should have, and how vim handles those tasks. Now let's look at some more advanced stuff.

#### TEXT OBJECTS
Text Objects are truly spectacular. They allow you to perform actions against more complex targets. So, rather than selecting a word and deleting it, or going to the beginning of a sentence and deleting it, you can instead perform actions on these objects from wherever you are within them.

**Word Text Objects**
Let's look first at some word-based objects.
* iw : inside word
* aw : around word

These are targets(nouns), so we can delete against them, change against them, etc.

*delete around a word*
`daw`

Sentence Text Objects
* is : inside sentence
* as : around sentence

Those work pretty much the same as with word objects, so imagine you're knee deep into a sentence that you decide suddenly you hate. Instead of moving to the beginning of it and figuring out how to delete to the end, you can simply

*change inside a sentence*
```vim
cis
```
This nukes the entire sentence and puts you in Insert Mode at the beginning of your new one.

**More object types**

Here are some other objects types.
* paragraphs : ip and ap
* single quotes : i' and a'
* double quotes: i" and a"

Remember the key is that you don't even have to be inside the section in question; You just tell it `ci"` and it'll delete everything inside the double quotes and drop you inside them in Insert Mode.

Here a list of the objects for your reference:
* words: iw and aw
* sentences: is and as
* paragraphs: ip and ap
* single quotes: i' and a'
* double quotes: i" and a"
* back ticks: i' and a'
* brackets: i[ and a[
* parenthesis: i( and a(
* braces: i{ and a{
* tag: it and at


## USING VISUAL MODE
I think the good thing to say about Visual mode is that it magnifies the power of everything we've learned so far. It does this by allowing you to apply commands to the text that's currently highlighted

So let's started with how to enter Visual Mode and light up some text. You can enter Visual Mode with the `v` key, and there are three different options.
* character-based : v
* line-based : V
* paragraphs : Ctrl-v

**Selecting indside contianers**
Often time you'll be inside some content that is surrounded on both sides by something, such as `,.([{`. We can visually select these things by use following commands:

*select inside of parentheis*
```vim
vi(
``` *select inside of brackets* ```vim vi[
```

You can also add a number to that to select two levels out(if you're inside a nested set).

*select everything inside the second tier braces*
```vim
v2i{
```

**character-based visual select**

Starting with character-based(using `v` to enter from Normal Mode), you can use this to select characters, set of characters, words, etc.

The main thing to understand here is that now you're in Visual Mode,*your motions are changing what's being highlighted. This means you can do motions like `w` or `)` to expand your selection.* The highlighted area is then going to become the target for an action.

**Line-based visual select**
You enter this mode by pressing the `V` key from Normal Mode, and from here you then take the actions we'll discuss in a moment.

**Column-based visual select**
Another option is to select text vertically, which is great for pulling columns of data.

**Actions you can perform on visually selected text**
It's really your choice, but the most common operations are simply deletion, copy, and paste.

*enter visual mode and select two more words of text, and copy them*
```vim
vwwy
```
Then you simply go wherever you want to put them and type `p` to paste them there

Or you can do some line-based action.

*enter line-based visual mode and select a couple of lines below*
```vim
vjjd
```

## USING MACROS
People think macros are scary. They're really not. They really come down to one thing: recording EVERYTHING you do and then doing it again when you replay. Here's a simply reference

* qa : start recording a macro named "a"
* q : stop recording
* @a : play back the macro

You can have multiple macros stored in multiple registers, e.g. "a", "b", "c", whatever. And then you just play them back with `@a` or `@c` or whatever.

