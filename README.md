# embed-discourse

This project contains Stencil web components that load a list of Discourse topics in other websites. You can use it with vanilla JS, React, Vue, or any JavaScript project.

This is alpha version -- use at your own risk. It's my first time using Stencil. Send me a message if you want to make a pull request.

## Installation

```
$ npm install @j127/embed-discourse
```

### CORS Settings

To load Discourse topics from a domain or subdomain that is different from your Discourse forum, you will need to enable CORS for that domain.

Go to your Discourse settings and search for "cors". Look for the setting called "cors origins". Add the domain of the site that will embed the content there. For example, if you are running this repo in development mode (see below), it runs on `localhost:3333`, so you would add `http://localhost:3333` to "cors origins". That would let your development server load topics from the forum.

Note the help text about the "cors origins" settings where it says that the `DISCOURSE_ENABLE_CORS` env variable must be set to true to enable CORS. You can enable that in your `app.yml` file.

### React

You can use this component in React based projects.

In `index.js`:

```javascript
import {
    applyPolyfills,
    defineCustomElements,
} from "@j127/embed-discourse/loader";

applyPolyfills().then(() => {
    defineCustomElements();
});
```

Then in a React component:

```javascript
function App() {
    return (
        <div className="App">
            <discourse-embed-topics forum-base-url="https://forum.example.com"></discourse-embed-topics>
        </div>
    );
}
```

You can pass in other props like this if you want to filter the topics:

```jsx
<discourse-embed-topics
    forum-base-url="https://forum.example.com"
    tag="some-tagname"
    num-topics="5"
    category-id="12"
></discourse-embed-topics>
```

See the full instructions on [how to integrate Stencil components into React](https://stenciljs.com/docs/react).

### Vue

You can import this component in Vue like this in `main.js`:

```javascript
import {
    applyPolyfills,
    defineCustomElements,
} from "@j127/embed-discourse/loader";

Vue.config.ignoredElements = [/test-\w*/];

applyPolyfills().then(() => {
    defineCustomElements();
});
```

Then in a component:

```vue
<template>
    <div id="app">
        <discourse-embed-topics
            forum-base-url="https://forum.example.com"
        ></discourse-embed-topics>
    </div>
</template>

<script>
import { DiscourseEmbedTopics } from "@j127/embed-discourse";

export default {
    name: "App",
};
</script>
```

For more information, see the full documentation for [Vue integration](https://stenciljs.com/docs/vue).

### Vanilla JavaScript

TODO

### Plain HTML Pages

TODO

## Getting Started

Run in development:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```
