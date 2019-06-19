## react-minimal-project

The project `react-minimal-project` aims to be an implementation of a set of libraries to fast and easily start building react-based applications.

The idea is that, with a few steps, you start working over a minimal implementation of a decently-featured react app. You only need to:

- Download the project
- Install the dependencies
- Start development mode

## Advantages

React minimal project with:

- nested navigation json-based (through custom *react* component)
- routing (through *react-router-dom*)
- decoupling (through *react* components)
- i18n json-based (through *i18next* and *react-i18next*)
- user-interface language selector (through custom *react* component)
- styling (through *sass*, *webpack*, *bootstrap* and *font-awesome*)
- programmatic resources usage (through *webpack*)
- absolute import paths (through custom *webpack* configuration)
- automatic browser refresh and other advantages (thanks to *create-react-app*)

## How to start

### Install

Go to the directory where you want to start the new project of your new react app, and type:

`$ git clone https://github.com/allnulled/react-minimal-project.git .`

`$ npm install`

### Start development mode

`$ npm start`

### Build application

`$ npm run build`

## Notes

All the notes above are put in practice in the development you already find inside the minimal project.

### About imports

The imports can follow an absolute path (relative to the root of the app) thanks to a special configuration of webpack. This way, you will avoid the quiet annoying and confusing `"../../.."` references in your imports.

### About sass

It is recommended that you separate, at least, 2 files for each component, refering to the *sass* code:

- `index.scss`: in this file, you give the structure of the component.
- `style.scss`: in this file, you give the styling of the component.

Which is the difference? Well, the idea is that in `style.scss` you put the code that, if you had a theme, could be overwritten. But this is just a recommendation, do not take it to seriously, it has no further implications.

### About i18n

To do client-side internationalization, you can start pretty easily.

The main i18n file (with all the translations) is at `src/resource/i18n/app/main/i18n.json`.

This translations file is used from `src/config/i18n/index.js`.

Moreover, the `src/component/i18n/index.js` is a selectable widget for the languages available. If you wanted to add a new language, just set your own languages inside this widget, and you can go. At the same time, this component uses another custom component, `src/component/selector/index.js`, which, if you want, you can reuse all along your project.

### About components i18n

To internationalize your components, you should follow these steps:

1. Add these lines in the header of your component file:

```js
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Translatable = withTranslation();
```

2. Add this line at the begining of your render method:

```js
const { t } = this.props;
```

3. Put your strings inside the render method like this:

```js
t("My string")
```

4. Finally, when you export the component, do it like this:

```js
export default Translatable(MyCustomComponent)
```

If you export multiple components, my recommendation is that you rename your component classes like `MyFancyWidgetComponent` (note the *Component* suffix), and at the time to export it, do this:

```js
export const MyFancyWidget = Translatable(MyFancyWidgetComponent);
```

The explained steps are the ones followed in each component of the example, so you can check the already existing components to see currently working examples of this.

### About navigation

The `src/component/navigation/index.js` component is prepared to create nested navigation menus.

Also, this component is prepared to support both:

- Classical hyperlinks, and
- Custom routes of the app (through hashtag instead of slashbar, though)

The information of the navigation menu is passed through a `json` object.

For example, the `src/component/header/index.js` component uses this navigation component with the data specified at the json file `src/config/navigation.index.js`.


## Comment

There is an example of all the features in the application itself. I hope it becomes more or less fast for you to start creating a full-featured application from this quiet advanced starting point.

## FAQ

If you have any question, please, open an issue, and I will try to answer as soon as possible.
