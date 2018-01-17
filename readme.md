# Britannica Style Guide

## Setting up your local machine

1. Install [git](https://git-scm.com/download) and [node](https://nodejs.org/en/)
1. Open a Terminal
1. `cd` into whatever your project directory is
1. Pull down a copy of the project to your local machine: `git clone git@github.com:britannica/institutional-styleguide.git`
1. Change directory into the style guide project: `cd institutional-styleguide`
1. Install project dependencies: `npm install`


### Running locally

1. Open up a couple of Terminal tabs/windows (`Ctrl + T`)
1. `npm start` in one tab (`Ctrl + C` to shut down the server) 
1. `npm run watch` in the other tab (`Ctrl + C` to stop watching files)
1. Navigate to `http://localhost:3000` in your browser


### Making changes

Open any `.scss` file within the `src` directory in a text editor of your choice. [Atom](https://atom.io/) is a popular,
free one. We use LivingCSS to generate our style guide, so I would recommend checking out their [documentation](https://github.com/straker/livingcss)
for full instructions on how to edit the CSS files.

There are essentially 4 different parts to edit within the CSS file:

1. The description of the component, which is the stuff in the comments above the `@example` part
1. The `@example` in the comments
1. Configuration of the `@section` and `@page`
1. The actual implementation of the styles

Developers will focus on the `@example`, and the implementation details of the component.

Product and UX will focus on writing the description using [Markdown](https://guides.github.com/features/mastering-markdown/).


#### Example

```scss
/**
 * Fancy component
 *
 * This is the section that product and ux will maintain. The first line, in this case "Fancy Component", will be used as
 * the `@section` name.
 *
 * ### This is an `<h3>` using Markdown
 *
 * The description will end here since the next part is the `@example`.
 *
 * @example
 * <button class="example-component">Example</button>
 *
 * @section
 * @page Atoms
 */

.example-component {
    /* implementation details */
}
```


### Building a new version of the style guide

With the `npm run watch` task running, every time you save changes to `.scss` files, a new guide will be generated.

If you want to manually rebuild the style guide, you can run the following task:

`npm run guide:build`


### Publishing a new version of the style guide

After you've verified your changes, it's time to commit and push them back to the GitHub repo.

**If you're using GitHub Desktop** (recommended for non-developers):

- See their documentation on [Committing and reviewing changes to your project](https://help.github.com/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project/)


**If you're using git:**

1. `git commit -am "A description of the changes you made"`
1. If this is the first push, you'll need to set the upstream branch: `git push -u origin master`
1. On every subsequent push: `git push origin master`


## Including the style guide in a project

Within your project, run:

`npm install --save @britannica/institutional-styleguide`

*More docs to come...*
