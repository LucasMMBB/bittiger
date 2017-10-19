# VIM TUTORIAL
## Super Basic Starter
Tare two modes in vime: COMMAND MODE and INSERT MODE
## Moving the Cursor
- `h`-left
- `k`-Up
- `l`-Right
- `j`-Down
## Exiting Vim
- quit: `:q`
- quit and discard changes: `:q!`
- quit and save changes: `:wq`
## Text Editing - Deletion
use `x` to delete letters in COMMAND MODE, which is more powerful
## Text Exiting - Insertion
- `i` puts the cursor before the current position
- `a` puts the cursor after the current position
- `o` puts the cursor below the line
- `O` puts the cursor above the line
## Operators and Motions, Counts, and Combining Them
It's a good idea to learn how commands work, not memorize commands. Commands are broken down into these parts:
- Operator
- Numbers
- Motions
When to put together, the Vim Command will look something like:
```
[OPERATOR][NUMBER][MOTION]
```

## Quick Page Navigation
- `G` Move to the bottom of a file
- `gg` Move to the start of a file
- `ctrl+g` View your current page line with
- `123+G` Jump to a specific line
## Searching

