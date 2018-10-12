---
title: "Introduction to pencilblue"
subTitle: "Getting started"
date: "2016-01-06T22:12:03.284Z"
hero: "http://www.easybird.be/images/blog/posts/easyblog/3.png"
---
## Getting things up and running

Setting up Pencilblue as your CMS system is a peace of cake for a developer.

* Go to their [Github page](https://github.com/pencilblue/pencilblue#readme)
* Read the Quickstart Guide in their Readme file to get things up and running
* Only prerequisite is to have mongodb and nodejs installed locally

> To be clear: the setup part is very well documented.

Unfortunately, apart for some long explanatory tutorials, it's the only part that is very well documented.

Another minor problems could be that the contributors seem less and less interested in the project themself (cfr. the commits in their Github repository).

![](http://www.easybird.be/images/blog/posts/easyblog/3a.jpg)

Nevertheless, the project still felt "right" to me, so I thought I should give it a try.

## Basic principles of Pencilblue

To make a long story short, basically, what PencilBlue does is the following. It provides you a good working full blown out-of-the-box Content Management System in a default theme:

* Writing basic articles (WYSIWYG editor and HTML editor)
* Adding images
* Adding embedded videos, from Youtube, Vimeo and all sorts of other sites
* Manage comments
* Handle SEO
* Handle navigations
* Users management
* Multi language support

So, out of the box, there are a lot of basic features. But the idea is that the platform is highly pluggable and customisable.

Once you get the basic idea, customising the css templating is rather easy. As can be seen in[this commit](https://github.com/easybird/easybird.be_blog/commit/3f70b7d0e2dddc229cc6ca6f49b5d4698ebe2a34) on my github account, the only thing that needs to be done is adding a new folder in the plugins folder. The idea is that you only create the files in this folder which will have to overwrite the default theme. Let's say you only want to adapt the header, then this is what you do:

* Go to plugins/pencilblue/templates/head.html (pencilblue is the basic theme)
* Copy the file to plugins/\*yourPlugin\*/templates/head.html
* Adapt the last file to fit your needs

Once you have done this, you can install \*yourPlugin\* in the admin section (Plugins/Manage) and set it as your basic theme (Plugins/Themes). Now, you will see that all your created articles will contain the new head.html file.

> Tip: Check out and try all existing Plugins before you start developing your own, some of them may be very close to your needs

## First impressions using the framework

### As a user writing articles

The editor does the basic trick. You can write articles and format the stuff. You can add media, but not position it perfectly in the editor. We have to be honest, it doesn't feel like a very mature "what you see is what you get" editor. Luckily there is the HTML tab, in which you can verify and correct if needed. Luckily there is also the preview button at the bottom of the page where you can check how the article will really look when published.

### As an administrator, managing the content

From what I have checked out myself, this seems to be working very smoothly!

### As a developer

> The good, the bad and the ugly

#### The good

* Easy to setup.
* Nice approach on how you can overwrite html partials
* Easy to plugin new features.
* Easy to overwrite or customise existing features.

#### The bad

Didn't find a lot of good examples, so learning by example wasn't that easy.

#### The ugly

Moreover, the core codebase of Pencilblue contains huge files which are tightly coupled to each other. This frightens me, in a world where - also front-end - development evolves - for the good - towards small standalone component-based features.

Test coverage of the codebase is currently only 24%.

## Overall impressions

For now, Pencilblue does the trick for me personally, but I wouldn't recommend it to my clients yet. Pencilblue feels like a platform which is using the right technology stack, with the right vision, but both the look and feel and the implementation could still be improved. The platform has a roadmap towards the future, and seems to have a lot of ambition when reading their [github](https://github.com/pencilblue) and [webpage](http://www.pencilblue.org/), but the lack of current activity on their github accounts doesn't seem to be underlining this ambition.