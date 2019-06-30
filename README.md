Sample, very basic repo for stating react app. You can use existing components and configs or use them as examples so your development might be easier.

---

Inside you'll find:

- setup for unit test with Jest and Enzyme
- storybook with sample components
- husky hooks for commit and push
- configs for: prettier, eslint, stylelint, jest
- opiniotated file structure
- some base router with transition on route
  enter
- basic layout
- sample components you can use or get to know how to create your own

You can check how it's looking without cloning this repo:

[Sample app](https://react-app-starter-pack.netlify.com/)

[App storybook](https://react-app-starter-pack-storybook.netlify.com)

## Scripts you can in this project

#### `yarn start`

Allows you to start development server in watch mode, hot reload and that's all you need for work.

#### `yarn start:staging`

Allows you to start development server in watch mode with env variables that match your staging/dev env stored in `/config/environments/staging.js`

#### `yarn test`

Starts test in wathc mode.

#### `yarn test:cover`

Runs tests and displays cover report in console.

#### `yarn test:report`

Runs tests and generates a static page with test coverage.A nifty tool for exploring missisng test.

#### `yarn build`

Bundles and minifies your app to `/build` directory -> ready to deploy with env variables that match your production env stored in `/config/environments/production.js`

#### `yarn stage`

Bundles and minifies your app to `/build` directory -> ready to deploy to your staging env with env variables that match your staging env stored in `/config/environments/staging.js`

#### `yarn storybook`

Starts storybook in watchmode. Storybook will run locally [http://localhost:6006/](http://localhost:6006/)

#### `yarn build-storybook`

Compiles static storybook to `storybook-static` folder.

---

Under the hood, project was started with [Create React App](https://github.com/facebook/create-react-app).
