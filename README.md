# Test task for JazzTeam

Project demo here: [Demo](https://vladstepway-jazzteam-test-task.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8486695d-025e-4ab8-a012-681a2cfa22b8/deploy-status)](https://app.netlify.com/sites/vladstepway-jazzteam-test-task/deploys)
## How to start

In the project directory, you can run:

### `npm install`

Then, to start the project use:

### `npm start`

## Routes:

### `/login`

Authorization credentials from `public/credentials.json`: 
### username: `Admin`
### password: `12345678`

### `/profile`

Information about user

### `/info`
Table of data from `public/data.json`

* Authorize for before table access
* Table has fixed headers and first column with horizontal and vertical scroll
* You can sort data by clicking on table headers
* You can edit cells by double clicking and click out of the cell to finish editing
* You can click on rows to select them

## Technologies stack

* React
* Redux: `redux, reduxjs/toolkit, react-redux, redux-thunk`
* Form: `react-form-hook`
* Fetching: `axios`
* Styles: `css3`

