# Digital Skills Assessment

Application for testing the digital literacy of older adults by categorizing their ability to explore an interface based on the moves they make. 

https://jolly-fermat-db4c86.netlify.app 

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Local Development Environment](#local-development-environment)
- [Available Commands](#available-commands)
  - [`npm start`](#npm-start)
  - [`npm run build`](#npm-run-build)
- [Architecture](#architecture)
  - [File Structure](#file-structure)
- [Building a Level](#building-a-level)
- [Using Redux](#using-redux)

## Getting Started

### Installation

1.  Clone this repository.
2.  Install dependencies before your first run:

    ```bash
    npm install
    ```

### Local Development Environment

Please see [`Digital Skills Server`](https://github.com/aciesla4/DigitalSkillsServer) for information on how to run the logging server locally. 

## Available Commands

From a command line in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app and outputs to the `build` folder.<br/>
Correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include unique hashes.<br/>
Any push to master will trigger this command to be run and the build to be deployed on netlify. 

Please see https://app.netlify.com/sites/jolly-fermat-db4c86/overview for more information. 

## Architecture

This app is built on top of create-react-app. Dependencies can be found in `package.json`. 

### File Structure

The default file structure looks like this:

```
app
├── build/            # optimized, production-ready code after `npm run build`
├── public/           # the template files used during `npm run build`
├── src/              # the app source code goes here
├────Levels/          # contains the source code for each level
├────components/      # contains helper components and files for each level
├────css/             # the css files for each level go here
├────iamges/          # the images used in the project go here
├────redux/           # contains each slice and the redux store configuration 
├── .gitignore        # what files to ignore within version control
├── package-lock.json # ensures everyone has the same resolved dependencies
├── package.json      # app config
└── README.md         # this file
```

## Building a Level

A template for levels is contained in `src/components/common/Level.js`. This contains the header, hint modals, end dialog, and footer for each level. It also handles the logic for logging a user's click, showing the hint, showing the jewel, and updating the level variable when the user completes the level. 

To create a level, import the template level into a new file and pass the `logClick` function from props. Include `mission`, `hintMessage`, and `DialogMessage` which are strings that represent what text should be displayed in the header, in the hint modal, and in the end dialog respectively. 

The children of the `Level` component will be what components you want to be displayed on the level. Note that all children must be contained in some container, like a `div`. Please use `src/components/levelX` to hold any common components that you use in the level and use `src/css/levelX.css` to hold any CSS to be included in the level. 

A route to the new level must be added in `src/App.js`. Please follow the pattern used for previous levels. Import the level at the top of the file. Then the path of the route should be `/levelX` and each level must be passed the `logClick` function. 

The new level can be navigated to directly through the url `http://localhost:3000/levelX`. 

## Using Redux

Redux is a global state manager for react. Please read [Redux Overview and Concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) and [Redux App Structure](https://redux.js.org/tutorials/essentials/part-2-app-structure) for more information. 

Each global state variable is contained in a slice file. These files specificy the initial state, reducers, and selectors for each variable. The corresponding actions are generated automatically. 

Once a slice has been created, the reducers must be added to `src/redux/configureStore.js`. 

Now reducers can be used in levels by importing `useDispatch` from `react-redux` and `reducerName` from `redux/slices/yourNewSlice`. Selectors can be used in levels by importing `useSelector` from `react-redux` and `selectName` from  `redux/slices/yourNewSlice`. 
