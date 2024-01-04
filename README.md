# Context

This is a solution to the following description:

### What

The test is to write a simulation algorithm.

### How

Use the technology discussed in the interview for creating the solution.
Frontend - Typescript
Backend - Ruby

### Problem

In a University, there is a classroom, in that classroom, there are 4 fluorescent tube units, each unit contains 4 fluorescent tubes.

The classroom is used 15 hours a day, 5 times a week, 9 months a year.

Every fluorescent tube works for a fixed amount of hours, that amount is returned by a function called "rand()" that returns an integer number from 100 to 200 that represents the number of hours that the fluorescent tube will work before breaking.

Once 2 fluorescent tubes fail in a single unit, you should replace all 4 tubes. Each fluorescent tube costs 7 $USD.

The algorithm should print:
How many fluorescent tubes were broken in 1 year in that classroom?
How much money do fluorescent tubes cost the University per year per classroom?

## Assumptions

- 4 weeks per month
- We start always with fresh tubes (this has a fixed cost of 4 _ 4 _ 7)
- When we replace the tubes we replace for the same ones the unit had before

## Things to improve/add

- i18n
- BE validations
- Swagger
- Calculate the waste for changing all 4 tubes
- Add more unit tests
- 404 page
- Custom error page
- Probably many others

## Tech stack

- React
- Vite
- Vitest
- Material UI
- React router

## Some design decisions

- I am using a 'per feature' arquitecture. That way I have everything related to a feature together. I find it better than 'per type' arquitecture.
- The priblem description talks about a rand function that returns the tube hours. I am not sure if the idea was to have it in the BE but i found it performance killer to i have it in the FE. To show some BE development I am saving the simulation results and showing them on a table too.

## Local development

- Clone the repo
- cd university-tubes-fe
- `npm install`
- `npm run dev`

NOTE: be sure to startup the BE too.

## Backend

[university-tubes-be](https://github.com/diegoot/university-tubes-be)
