---
title: "Travis CI: Speed up development!"
subTitle: "Guideline using Travis CI, with Heroku, Istanbul and Codecov"
date: "2016-04-13T22:12:03.284Z"
---

> Losing time with deploying your 'small' projects manually? In 30 minutes you setup an automatic deploy process with this tutorial.

## Step by step, but where to start?

The prerequisites for this tutorial are:

* Your application has a repository on [Github](https://github.com/).
* Your application is hosted on [Heroku](https://heroku.com/).

Follow the steps below, and you are up in no time:

1. Link your github repository to your heroku app
2. Setup a Travis account and link your github project
3. Add tests and automatically run before deployment
4. Create automatic testing reports

> Travis CI is like a kitchen robot: he does all boring, repetitive but - Ooh soO - important work without you even have to bother!

## Link Github to Heroku

We will first start with the most basic automatic deployment. You don't need Travis and other fancy tools to deploy automatically. With only Github and Heroku, an automatic deployment can be realised.

1. Go to 'https://dashboard.heroku.com/apps/YOUR-APP/deploy'
2. Choose deployment method 'Github'. Link your app to the corresponding Github repository and enable the Automatic deploy.
3. Afterwards, deploy something to the Github deployment branch you specified on Heroku and see the automatic deployment taking place to your heroku app. When you are having issues, make sure your deployment branch contains at least a Procfile for Heroku, so it knows what to do for deployment.

> Tip: Don't forget, you are using a public github repository for deployment to your environment: use the Heroku Config Variables for passwords and other secret stuff.
> Add a Procfile to Heroku.

## Setup a Travis CI account

Ok, now that we have a simple and basic automatic release, we will take it one step further.

Why adding Travis CI to this process? Well, as we want to make sure that are project is always in a healthy and deployable state, we will add Travis as a sort of gatekeeper. Travis will perform all needed pre- and post processing that you want, all by declaring them in a simple file.

1. Start by again disabling the automatic deployment at the Heroku page. We don't need it anymore, as travis will now trigger the Heroku build and release. So push 'Disable Automatic Deploys' on the Heroku website.
2. Go to the Travis CI website, setup an account if you don't already have one and read their [manual](https://docs.travis-ci.com/user/getting-started/) on how to get started.
3. As specified in the getting-started guide: the only thing you will need to do in your project is adding a .travis.yml file containing some basic info: 'language', 'before\_script', 'script', 'after\_script' (specify all scripts you want Travis to perform in all specific phases)deploy: specify heroku as provider, the secure api key related to it and the app. Make sure to encrypt your key! More info can be found in [the travis to heroku sector.](https://docs.travis-ci.com/user/deployment/heroku/)
4. Pushing your travis.yml file to the specified branch, should now trigger a successful build at Travis, and afterwards Travis should deploy your application to Heroku!

> If interested, a working example can be found [here](https://github.com/easybird/salesfunnel-abinbev/blob/develop/.travis.yml)

## Add automatic testing and test coverage measurement with Istanbul and Codecov

> This part is specific for Node.js applications

We added Travis to the build process, but we didn't really use it's power yet. This section will show a part of it's power by adding a test battery to the automatic deployment process. We don't want to deploy our application without decent testing taking place!

If your application doesn't yet contain any tests, first add some tests! We are using [Mocha](https://mochajs.org/) and [Chai](https://http//chaijs.com/). Add a test script to your package.json which triggers your testing battery. If you are used to add a -w flag to mocha (which watches automatically for changes), add a specific script for travis without the -w. Otherwise your travis build will hang forever.. In my case I just added a 'test-single' script which does simply this: 'NODE\_ENV=test mocha'. Then I add a script to my Travis.yml: 'npm run test-single'. Once this is done, commit your changes and check if travis is successfully running your tests.

> Make sure to enable the flag in the Heroku deployment section 'Wait for CI to pass before deploy'.

Sweet! Now Travis is automatically performing our tests, and only when those are successful, the deployment to heroku is taking place. Now that we have the automatic testing battery, it would be nice to have some reporting about our code coverage. That's where [Istanbul.js](https://www.npmjs.com/package/istanbul) and [Codecov](https://codecov.io/) come in to play.

### Istanbul.js

Istanbul.js is a node module which states itself as - quoting -'Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests.'

YES, that's exactly what we need! Adding it is simple:

1. 'npm i istanbul --save-dev': to install the istanbul module in your node modules and to save this dependency in your package.json
2. add istanbul to your test-single script: 'NODE\_ENV=test istanbul cover -x \*.test.js \_mocha --recursive

Running your tests should now reveal the test coverage at the end of your tests. Also istanbul will have created a coverage directory in your project home directory in which you can find an lcov-report with an index.html. Opening this file in your browser should reveal a detailed overview of your test coverage. Et voila!

Istanbul can also be used to verify if the coverage meets the project standards. Only if the standards are met, the project can get deployed. Implementing this is as simple as this:

1. To meet a 70% standards for the whole project, add a 'check-coverage' script to your package.json: 'istanbul check-coverage --statements 70 --branches 70 --functions 70 --lines 70'. Off course, adapt the percentages to your project standard.
2. To make sure Travis checks this coverage before deployment, add a line to the travis.yml in the 'script phase': 'npm run check-coverage'.

Travis will now only deploy when the project testing standards are met!

> Tip: add the coverage folder to your .gitignore file, it doesn't make sense to push this folder to your remote git repository.

### Codecov.io

Now that we have our test coverage, it would be nice to have this report somewhere easily accessible. That's where codecov comes in.

1. 'npm i codecov.io --save-dev': to install the codecov.io module in your node modules and to save this dependency in your package.json
2. To make sure the report is piped down to the codecov interface, add a 'report-coverage' script to your package.json: 'cat ./coverage/lcov.info | codecov'.
3. To make sure Travis triggers the upload to codecov, add a line to the travis.yml in the 'after\_success phase': 'npm run report-coverage'.

Travis will now trigger an upload of the testing results to codecov. This will be done after a successful test battery and before deployment.

### Summary

Et voila, this article showed you the power of Travis: The build and deployment process can be completely and easily customised with small subtasks, which are easily added as hooks to the travis.yml file. Use the [following](https://github.com/easybird/salesfunnel-abinbev) as an example project for more info, or add questions/comments/remarks below.