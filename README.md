# Game Day Boxes

Front end application that allows the user to assign initials to all 100 boxes, then randomly assign scores to each box at the touch of a button. User can then print the results.

## Getting Started

To get started, clone this repo down. Then run yarn add/npm install to install all of the dependencies. Then you can run yarn start/npm run start to see the app run in development.

## Deployment

I am using netlify to deploy this site. When you think you're done and ready to push live, run yarn build. Let the build process finish up, then push all of your changes up to your remote git master. Ensure that your local build/dist file has been updated. Confirm your connection to netlify or whoever you are using to deploy is up and running, and the deployment should begin once remote git master gets the changes.

## Built With

- [Create-react-app](https://github.com/facebook/create-react-app) - The web framework used
- [Emotion Styled Components](https://emotion.sh/docs/introduction) - Styled components library

## Remaining To Do:

- [ ] Limit initials input to be 2 letters only
- [ ] Limit box input to be min 0 and max 100
- [ ] Set validations on both inputs
- [x] Add a border to the right side of the boxes grid
- [x] Disable submit button if both inputs don't have values
- [ ] Stop e from being allowed as input for box # input
- [ ] Enforce input validations on mobile (iphone)
- [x] Style the submit when disabled
- [x] Add a number identifier to each box
- [x] Change input placeholder text color
- [ ] Try to allow for multiple box numbers to input at a time if needed
- [ ] Add section to display scores per quarter
- [x] Add print button
- [ ] Add email button
- [ ] Allow for price payouts to be editable inputs

## Authors

- **Phil Arfuso**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
