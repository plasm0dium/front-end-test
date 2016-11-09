
## Technicolor Front end test

Please fork or download this repository to start testing this application

## Installation
Please make sure you node.js on your computer

```
npm install -g node

```

Run npm to install node modules

```
npm install

```

To run application

```
npm run dev

```

## Questions

#What URL should be used to access your application?
* http://localhost:8888

#What libraries did you use to write your application?
* React
* Redux
* React-Redux
* Materialize
* Webpack
* Axios
* Babel
* js-cookie
* Concurrently

#What influenced the design of your user interface?
* I used a light weight library Materialize for styling.

#What steps did you take to make your application user friendly?
* Using React and Redux library to create a single page application, materialize for color and css.

* Add error message and error handling if username and password don't match.

* There aren't multiple routes.  User never have to leave the homepage hence there are no re-rendering the application which boost up the client performance.

* Add Show/Hide functionality in password input field in case user enter incorrect password.

* Cookie checks to see if user log in and component survive after refresh on browser.

#What steps did you take to insure your application was secure?
* Message component will not show if user does not log in hence user won't be able to add phone and message.

* Components only show if user log in successfully.

#What could be done to the front end or back end to make it more secure?
* REST API needs to be authenticated before sending back information.
* Password should be hash and add salt on top of it to prevent script injection.
* All request data require cookie check.
* SSL encryption on all sensitive information such as password.
* Set a time limit on cookie so user's data don't always show after cookie expired.
* If there are more than one routes, an authentication plugin should be there to check on these routes where post log in user get to see the components.
