# Construct Flow UI
Construct Flow UI is a SCSS (Sass) framework that provides a set of CSS styles and utilities to help you build web applications and websites quickly and easily.

### Installation
To use Construct Flow UI in your project, you can either download the source code and include the SCSS files in your own Sass workflow, or you can install it using a package manager such as npm:
``` node
  npm install construct-flow-ui
```

### Usage
Once you have installed the package, you can import the main SCSS file in your own Sass file:


``` scss
  @import "construct-flow-ui";
```
This will import all the Construct Flow UI styles and utilities into your project.

### Features
Construct Flow UI provides a range of styles and utilities to help you build responsive, mobile-friendly web applications and websites. Some of the key features of the framework include:

* A responsive grid system that is easy to customize and use
* A range of pre-built components, such as buttons, forms, and modals, that you can use in your project
* A set of utility classes that allow you to quickly style common UI elements, such as margins, padding, and typography
* Integration with Bootstrap, which means you can use any of its components and utilities alongside Construct Flow UI

### Contributing
If you would like to contribute to Construct Flow UI, please fork the repository and submit a pull request with your changes. Before submitting a pull request, please make sure to run the tests and update any relevant documentation.

* Submit bug reports and feature requests via the GitHub Issues page
* Fork the repository and submit pull requests with your changes
* Help improve the documentation by fixing typos or adding more examples

When contributing to the project, please make sure to follow the existing code style and test your changes thoroughly before submitting a pull request.

### License
Construct Flow UI is released under the MIT License, which means that it is free and open-source software that you can use, modify, and distribute as you see fit. However, please note that the license does not come with any warranty or liability protection, and you use the software at your own risk.

### Folder Structure
```
construct-flow-ui/
├── dist/
│   ├── construct-flow-ui.css
│   └── construct-flow-ui.min.css
├── docs/
│   ├── index.html
│   └── ...
├── scss/
│   ├── _variables.scss
│   ├── _grid.scss
│   ├── _buttons.scss
│   ├── _forms.scss
│   ├── _modals.scss
│   ├── _utilities.scss
│   ├── _mixins.scss
│   ├── construct-flow-ui.scss
│   └── ...
├── tests/
│   ├── test-utils.js
│   ├── grid.test.js
│   ├── buttons.test.js
│   ├── forms.test.js
│   ├── modals.test.js
│   ├── utilities.test.js
│   ├── mixins.test.js
│   ├── construct-flow-ui.test.js
│   └── ...
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── ...
```
