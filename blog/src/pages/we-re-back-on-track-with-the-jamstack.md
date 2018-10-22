---
layout: blog
title: We're back on track with the JAMstack
subTitle: Using Netlify and Gatsby
date: 2018-10-22T20:22:23.640Z
hero: /blog/images/uploads/jamstack.jpg
---
## We are back

And with a new dev stack, called the JAMstack. I've been using a similar approach using [Contentful](https://contentful.com) for a client, [Vogelvrij](https://vogelvrij.be). But this current setup is perfect for home project which require a fast time to market: Easy setup, fast deployment, fast site loading time, free 'til a certain point. G R E A T ! 🤠

The JAMstack stands for Javascript, API's and Markup. And that's exactly what it is.. a static site jammed up with those three ingredients. And it tastes good. 😋

## Netlify, Netlify CMS and Gatsby

The blog part of this site got easily created with [Gatsby](https://gatsbyjs.org), a static site generator which uses [React](https://reactjs.org).

I've decided to write all blog posts in markup. Which is a common way to store blog posts in:

* It makes it easy to change your stack. As markup is a widely accepted way to write blogposts in, it doesn't require you to map from one blogging framework or library into another once you change tech stack. This is a pain, I've been there... 😢

* It allows you to easily add a CMS on top. In this case I've used the open source solutions initiated by [Netlify](https://netlify.com), called [Netlify CMS](https://www.netlifycms.org). Which give you a little CMS, created with React, on top of your static site. You can upload images, and write your markdown pages inside the CMS.

## How it works

There's a github webhook triggering a Netlify deploy at each push to master. Netlify then triggers a new build of the site: converts the markdown files into static html pages. And hosts the complete site on a blazingly fast CDN. It's all a matter of minutes: Creating my new post in the Netlify CMS client (hosted on this site after an /admin page), pushing the 'Publish' button, and seeing my new article live.

## Back to blogging

Whoppa, this was my first small blogpost. Goal is to create more of these very small posts..with things that keep me busy, things I've learned...
Give me a thumbsup, or thumbsdown to show if you appreciate this or not. If there is no thumbsup/thumbsdown button, that means I have not yet implemented this feature...yet. 🙃
