# Thrillist Re-Creation

#### Epicodus project, 10.19.18

#### By Brendan Shea

## Description

If you're looking for good food, drink, or attractions in city that's unfamiliar for to you, Thrillist is your spot.

As a class project, I re-created Thrillist's homepage using Angular. The site is constructed using multiple components and models to resemble the real thing.

## Construction

Model
  |
  | - - App Component
            |
            | - - Header Component
            |
            | - - Jumbo Article Component
            |
            | - - Featured Article Component
            |
            | - - Featured Movie Component
            |
            | - - Footer Component

**Model:** houses the construction that's used to build the data structures in the app component.
**App Component:** houses the data that is passed down to the children component.
**Header Component:** hard coded header information.
**Jumbo Article Component:** pulls data from the `bigFeaturedArticles` array in the app component.
**Featured Article Component:** pulls data from the `featuredArticles` array in the app component.
**Featured Movie Component:** pulls data from the `bigFeaturedMovies` array in the app component.
**Header Component:** hard coded footer information.


## Install Instructions

From the root:

* `npm install -g @angular/cli@1.6.5`

From the desktop:

* `git clone https://github.com/bjrshea/thrillist.git`

From the project directory:

* `npm install`
* `npm run build`
* `npm run start`

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Angular
* Typescript
* Node.js
* Bootstrap
* Webpack

## Links

* [Thrillist](https://www.thrillist.com/)
