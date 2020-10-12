# Overview

Sample MFE application proof-of-concept, developed by Cazton.

## Demo

[See the Github Pages hosted demo!](https://teejdotme.github.io/cazton-mfe-poc/)

**NOTE** Due to limitations of Github Pages, only the above URL will work for accessing the demo.  Navigating around the demo and then refreshing the browser will not necessarily work (depending on the URL).  This is because Github Pages serves static files only and will not respond to requests for, e.g. `/account` because a file does not actually exist there.  Only the `/` path will serve the `index.html` and load the application.

## What

This is a sample composite application using the Micro Frontend **(MFE)** pattern that is composed of separate, independent sub-applications.  For this demo and for the sake of clarity, each of the sub-applications are created using **React**.  However, a real-world MFE application could be composed of any combination of **React**, **Angular**, **Vue**, or any other framework (or lack of framework).  There are no technical dependencies between the sub-applications, aside from the JavaScript language and the browser environment.

This sample MFE is composed of the following:

- Applications
  - **Home**
    The home app is very simple and has no real functionality in this sample.

  - **Account**
    The account app allows you to sign in.  It will accept any username/password combination.  Signed in state is maintained and broadcasted via browser events, so that the other apps can choose to adjust based on that state.

  - **Search**
    The search app is accessed via the search box, and the search box lives in the NavBar app.  Type a search term into the box, hit enter, and the NavBar app will broadcast the search term entry via browser events.  The search app picks up this event and displays a page relevant to your search term.

  - **NavBar**
    The navbar app is always active, and lives at the top of the viewport.  This is a self-contained application like all of the others, but it demonstrates interactivity between the applications by displaying the signed in username, providing a sign out button (again - browser events), and accepting search terms on behalf of the search app.

## Why

The benefits of MFEs are [well-documented elsewhere](https://micro-frontends.org/).

The **TL;DR** is each individual application can be wholly owned by a dedicated team, exist in a dedicated repository, have dedicated CI/CD configurations, and otherwise be developed and released independently of the other applications.  

The fact that there is very little technical interdependency means that coordination between application teams is drastically reduced compared to the standard model of UI development.

## How

This sample is built using [single-spa](https://single-spa.js.org/).  As MFEs are relatively new, many of the options out there are not very mature, but **single-spa** has an active community behind it.

One important thing to note about the framework chosen here is that **single-spa** and its peers provide very little real functionality; MFE is more of a design pattern and set of recommended practices.  **single-spa** offers a basic in-browser router and a few packages to make registration of applications easy, but that's about it.