Random User App
Introduction In this exercise, you will build a react app that fetches a random user from an api and displays the user information in a user detail component. The user detail component will have a button for toggling less/more views of the user data

Set up
make a new react app with create-react-app rando-user
cd into the app directory and install axios
Clear out the boilerplate and add a header to the app component with a nice title for our random user app
Fetch a User
Add a button to the App component that when clicked calls a function refreshUser. This will entail the following steps:
Write a function refreshUser in the App component
pass refreshUser to the onClick prop on the button
For now, just console.log a message inside reFreshUser to make sure it works
After verifying that the refreshUser button calls the refreshUser method (using a console.log statement), add a services directory
Inside services/ add a rando_user.js file
Inside rando_user.js import axios, set a base url to "https://api.randomuser.me/ (Links to an external site.)"
Also inside rando_user.js write an async function fetchUser that fetches a random user using the above url and returns the response
Export fetchUser from the file
Back in the App component, import fetchUser, and call it within a useEffect hook.(use it inside of refreshUser) Don't forget to make the inner function an async function and await the return value from fetchUser
Add a currentUser state variable in the App component; it's initial value should be null. Use setState to update currentUser with the user information returned by fetchUser.
You can verify this is all working by either console.logging currentUser from the App component or adding a line to the return statement that looks like this: <div>{JSON.stringify(currentUser)}</div> That will spit out the raw JSON representation of the user data to the DOM.
Display Some User Data
Add a components directory, and inside components, add a UserSummary component. 
UserSummary should take a single prop, userData. Import it and use it inside the App component. Pass currentUser to UserSummary as a userData prop, i.e., <UserSummary userData={currentUser} />
Inside the UserSummary component, if the userData prop is null, render a message saying "there is no user data"
else if UserData is not null, render the user's name, and email
More or Less
Inside UserSummary, add a state variable showMore with an initial value of `false
Add a button to UserSummary that calls a method to toggle showMore to be true if is false and flip it to false if it is true. Remember to use the version of setState that takes a callback, i.e., setState(prevState => { ...
Adjust the component so that if showMore is true, then the user's name, email, street, city, state, and username are displayed. If showMore is false, just show the name and email as before
Bonus
If showMore is true, display the user's medium picture as well.
Add more to the UserSummar to display even more information about the user, or maybe track all the user's that have been fetched and display them in a UserList component



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
