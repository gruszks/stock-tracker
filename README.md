# Stock Tracker
This is a really simple application that allows track financial data for companies.

## Info about API key

Please keep in mind that we aren't using premium API key and sometimes you will see this message:
```
Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.
```

## Configuration

Inside `.env` file just set the `REACT_APP_API_KEY` to correct API key. You can get it from [here](https://www.alphavantage.co/support/#api-key).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run storybook`

Runs the storybook app in the development mode.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build-storybook`

Builds the storybook app for production to the `storybook-static` folder.

## TODO
- [ ] Add unit tests using jest / enzyme
- [ ] Add more storybook stories
- [ ] Handle some edge cases eg. exceed API limit
