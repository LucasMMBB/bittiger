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

### History
So what about we wanna check our commit history? No worries, we have `git log` to record our git commit history.
Think of Git's log as a journal that remembers all the changes we've committed so far, in the order we committed them.

### Remote server.
We've done a lot of changes and now it's time to push our changes to our server.
To push local *repo* to Remote server, we'll need to add a remote repositary.
```
git remote add origin <server link>
```

### Pushing Remotely
Let's push our local changes to our **origin** repo(on Remote Server)

The name of our remote is **origin** and the default local branch name is **master**. The `-u` tells Git to remember the parameters, so that next time we can simply run `git push` and Git will know what to do.
So run `git push -u origin master`
