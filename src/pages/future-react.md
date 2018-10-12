---
title: "The future of front-end development frameworks"
subTitle: "React.js, the library that naturally forces you to use web components"
date: "2016-04-15T22:12:03.284Z"
hero: "http://www.easybird.be/images/blog/posts/easyblog/5.jpg"
---

Notice the subtle difference in the title vs. the subtitle? Every couple of years, a new framework is hot in front-end development land. There's mostly a lot of buzz about some kind of new SPA framework. Over the years, the following frameworks did receive a lot of attention [GTW](http://www.gwtproject.org/), [Knockout](http://knockoutjs.com/), [Backbone](http://backbonejs.org/),[Angular 1](https://angularjs.org/)..and now, a new library has been introduced: [React](https://facebook.github.io/react)!

Watch again. Notice the subtle difference between the library mentioned in the subtitle vs. the frameworks in the paragraph above? That's right, React is just a library, nothing more. The others are full blown frameworks. Therefore, we can say, something changed in front-end development land. React can for example easily:

* Integrate with libraries like Redux or Flux.
* It is not in any way dependent on the react router library.

React is just one small micro-library, which is very good at what it is intended to do: handle the dynamic view layer of your front-end application.

> “Ok, if it is just a micro library, why all the goddamn fuzz about it? I want a full blown framework!” “No, [you don't](http://tom.lokhorst.eu/2010/09/why-libraries-are-better-than-frameworks)!”

# The beauty of React

The thing that I very much like about React is the way it gently forces you to create small web components. 

It is always easier in React to create a new React.Component class for a new component, then to nest the new component into an existing parent component. You completely lose the overview when nesting components in the same React.Component class. Therefore, you just don't do it. 

 Every component is completely standalone, with some props as input and some internal state. There is not really a shared state and there is no crazy two way binding like in Angular 1.X. Just straight forward: one component passes it's state into another component. The receiving component has to re-render and can take some action when the props are changed. Don't completely understand what I'm talking about? [Try it out yourself](http://facebook.github.io/react/docs/tutorial.html).

> “Crazy two way binding your dare to say??”

## Crazy two way binding(?)

Do you remember the Porsche (red Carrera GT) in which the life of Paul Walker sadly ended? This very fast and beautiful car has by [some people been pointed out as ](http://jalopnik.com/porsche-that-killed-paul-walker-dangerous-needs-res-1474240192)one of the most dangerous cars on the road.. Two way binding reminds me of this car.. The concept itself is very powerful and fast to implement, everybody was blown away by this at the beginning. But this double-edged sword soon showed his bad side. As complexity rises, the problem with two-way binding is that multiple sources can change the data in multiple directions. Without good management, this can lead to overwhelming situations in which the developer looses his hand on the situation. Essentially, this isn't a problem with two-way binding, this is a problem caused by how this strong technique is handled and implemented.. But the reality is that I saw this problem occurring on multiple big projects.. At some point, this slows down development.. If you don't handle this technique with care, it can always get out of hand! RIP Paul Walker.

On top of that, the way Angular technically handles it's two-way binding leads to slower performance if not implemented with care.. As javascript doesn't have any implementation to notify for any change to its variables or object, Angular 1.X implemented its 'digest cycling' to track data changes and sync them with the UI. After each and every operation it 'digests' everything. This can get very heavy when the amount of bindings on a big single web page increases.

## The beauty of React - part II: The Virtual DOM

As human beings, the world around us has way too many different stimuli to handle. Therefore our [consciousness](http://www.scientificamerican.com/article/looks-can-deceive/) is constantly filtering out the - what he thinks - redundant info. Well, React does the same with the incoming changes produced by every render() method. It compares the results of the previous call to render, with the one of the current call, to only apply a minimum set of changes to the DOM. According to the [following React documentation](https://facebook.github.io/react/blog/2013/06/05/why-react.html#reactive-updates-are-dead-simple.), as re-rendering is so fast in React, the developer doesn't need to explicitly specify data bindings, which makes it easier to build apps.

> “Data returned from render() is not a string nor a DOM node. It’s a lightweight description of what the DOM should look like (reconciliation)” (cfr. [why-react?](https://facebook.github.io/react/blog/2013/06/05/why-react.html))

## The beauty of React - part III: The isomorphic way

The world is full of dualities:

* Are you left or right?
* Liberal or Social?
* Black or White?
* Yin or Yang?

> “...in divinity opposites are always reconciled.” ― [Walter M. Miller Jr.](http://www.goodreads.com/author/show/6025722.Walter_M_Miller_Jr_), [Saint Leibowitz and the Wild Horse Woman](http://www.goodreads.com/work/quotes/250974-saint-leibowitz-and-the-wild-horse-woman)

Are you somebody that shifted to writing loads of rendering logic in the clientside? Or do you tend to keep your rendering serverside? The web started long ago with servers delivering full content to the client. But in recent years, the creation of the modern web frameworks (mentioned above) pushed a lot of logic towards the clients and people tended to use the server only for getting the data. I always tried to battle the fact to do too much clientside. Now finally there is a technology which allow us to easily combine both in a simple way, without having some kind of blinking page refresh. React allows us to use the best of both worlds with his isomorphic approach. There are some major benefits which have already been comprehensively explained [in many other blogposts](https://www.smashingmagazine.com/2015/04/react-to-the-future-with-isomorphic-apps/#isomorphic-javascript).

They all come down to the following:

* code reuse client- and serverside
* allows search engines to easily crawl your website without the need to first render the javascript
* faster perceived load-time
* the client needs to download less assets
* progressive enhancement (render the first and important bits serverside, and then progressively add less crucial parts)

# The future is bright and React shows the way

I think I have a characteristic which is specific for front-end developers: I am always very excited about new things. But I also tend to be very critical about the world and everything in it.. In the past, exploring a framework its demo's made me often very enthousiastic, playing with it as well, but when using it to implement a real project.. Naaah, most of the time I ended by very sceptical about some parts of "this new way of doing it". Well, I didn't have this with React - yet. On the contrary, in the beginning I didn't like its syntax and its way of working very much.. But once I was used to this and implemented a [real project with React](https://github.com/easybird/salesfunnel-abinbev), for once, I lost my sceptisism.

For me, it seems like React is really opening the gate to the future of the web. It's about time to step through that gate, and to explore its boundaries completely!