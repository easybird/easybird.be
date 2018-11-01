---
layout: blog
title: How to completely remove a file from your git history?
subTitle: Without leaving any trace
date: 2018-11-01T11:54:49.264Z
hero: /blog/images/uploads/171909.jpg
---
> Ever pushed some private stuff in a public repo and you want it to be removed? I just did..

## Change the course of -git- history

I came across this article on github: [removing-sensitive-data-from-a-repository](https://help.github.com/articles/removing-sensitive-data-from-a-repository)


And solved this problem by eventually following the below - easy to follow - approach.

### Remove the file and commit and push your change

Just take the walk of shame and publicly remove the file you want to be removed from the repo and push the change to your remote repository. It's essential you do this first, as otherwise, the next step will fail.

In this [commit](https://github.com/easybird/easy-strava-explorer/commit/618d71ff757c8d90846f9347a47d30371e6873ae), I did exactly the same. But in my link, you won't see the file anymore, due to the steps we will take below.

### Add the file to gitignore

> Only fools make the same mistake twice

Don't be that fool and add the file to your gitignore, commit, and push.

### Clone the original repo (as a backup)

This step is simple, just do ```git clone your-repo``` somewhere else.. Just for the sake of..having a backup in case you do something wrong..

### Install BFG repo cleaner

This open source repo is the key to make this task very simple. Just download the [bfg repo cleaner](https://rtyley.github.io/bfg-repo-cleaner). You will need Java on your PATH to execute it though (it's preinstalled on Mac).

### Delete the file from your history

> There is nothing permanent, except change - Heraclitus

Go to your command line, `cd` into the cloned backup repo and run the following command to delete the file: 

```java -jar ~/Downloads/bfg-1.13.0.jar --delete-files THE_FILE```

Follow the instructions the tool gives you on the command line, in my case this was: 

```git reflog expire --expire=now --all && git gc --prune=now --aggressive```

### Force push your changes

> If you don't like something, change it. If you can't change it, change your attitude. - Maya Angelou

When running `git status`, it will look like nothing happened.. 🤔Don't worry, that's normal! 
Just have faith and force push all-the-things! ```git push origin --force --all```

### Verify if it worked

Surf to your repo and BAM...it will be like the file never existed... Cruel, don't you think?
