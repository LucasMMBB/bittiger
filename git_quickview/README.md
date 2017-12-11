# Git Quick Tutorial
Here I want to share some quick commands about `git`

### Init a repo
To initialize a git repository, use `git init`
After run this command, we have a hidden directory called `.git` where git operates.

### Check status
Use `git status` to see what the current state of our project is.


### Track changes
To tell Git to start tracking changes, we first need to add it to the staging area by using `git add`
Such as
```git
git add .

git add <file/directory name>
```

You can also add more than one file by using wildcards like `git add '*.txt'`

### To be committed
After you run `git add .` and check status with `git status`, Git says `changes to be committed`.
The files listed here are in the **Staging Area**, and they are not in our repository yet. We could add or remove files fromthe stage before we store them in the repositary.

To store our staged changes we run the **commit** command with a message describing what we've changed.
```
git commit -m "added your message here"
```

