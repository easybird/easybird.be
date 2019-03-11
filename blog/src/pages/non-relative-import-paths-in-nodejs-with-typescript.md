---
layout: blog
title: Non-relative import paths in NodeJS with Typescript
subTitle: The struggle Typescript is not fixing
date: 2019-03-11T20:17:50.816Z
hero: /blog/images/uploads/86592.jpg
---
## TLDR

### The Problem - in short

```javascript
// We'd like to get rid of this
import { getSitesByAccessToken } from '../../../unicloud-services/unicloud-aggregator-service/api';
// And want to use this
import { getSitesByAccessToken } from 'unicloud-aggregator-service/api';
```
Typescript - tsc - does not support transforming absolute module paths into relative paths for modules outside node_modules. You can tell Typescript the "solution" and point to the correct files (using their `paths` option), so Typescript will not break. But the transpiled Javascript code **will not work**. And currently, as we speak, 11th of March 2019, [Typescript does not want to come up with a solution](https://github.com/Microsoft/TypeScript/issues/15479) for some reason.

When building a clientside application, most probably you can just take the Typescript `paths` approach without noticing this problem. This is because most probably your webpack bundler, or something similar, is fixing this problem for you. In NodeJs however, you're on your own.

### The Solution - in short

> "What you do yourself, you usually do better"

Basically we'd like our Typescript Path Aliases to be resolved into relative paths again when transpiled into javascript. We started using a very straight forward packages called [tspath](https://www.npmjs.com/package/tspath) for it. It explains the problem and the solution very well! ✅

### Other solutions

Yes, there are other solutions, but for our use case, this one was the best currently available. More solutions and resources about the problem can be found here [Extensive bundle of solutions](https://github.com/Microsoft/TypeScript/issues/15479#issuecomment-468122916)

## Why do we need this approach? 
### Our use case explained

We're busy creating a Microservice architecture for a client of ours. A big cloud platform with data fed from loads of different hardware devices at people's home, all with their different data and structured in the most bizarre ways.For our platform services, our core and unified domain data, we really don't want to overengineer from the start and would like to keep one NodeJS Microservice with different submodules. Next to the HTTP endpoints, we identified different modules already, like users, devices, sites and the links between them. Each of them could be deserving its own microservice in the future. But to speed things up, and to follow the principles `KISS` and to not fall into the trap of `Premature optimization`, we want to start with **only one** platform service.

> #buzzwords #baby!

### Good choice or not?

I know you can argue if this is a good decision or not.. Depends the use cases, depends the timeline, depends the complexity of the project. There is no black or white on this. But as this is not the scope of this article, please take it outside, and take the following articles and quotes with you! 👋

> "Almost all the successful microservice stories have started with a monolith that got too big and was broken up" - Martin Fowler in [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html)

> "Don’t start with a monolith...when your goal is a microservices architecture" - Stefan Tilkov on [Martin Fowlor.com](https://martinfowler.com/articles/dont-start-monolith.html)

> "Almost all the cases where I've heard of a system that was built as a microservice system from scratch, it has ended up in serious trouble." - Martin Fowler in [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html)
