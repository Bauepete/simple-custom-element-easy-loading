# Fancy Paragraph

## Overview
This project explores how to create a custom element where all different resources (html, css, JavaScript) are kept in separate files and the whole component is again separated from the client html.

From a software developer point of view this kind of separation is absolutely necessary to keep a clean design of the source base. With ECMA Script 16 the newly introduced `import` / `export` keywords at least brought us the possibility to define direct dependencies between JavaScript files. Also css files can be linked together and also linked to html files. The real problem is defining a relation between two html files. Here a couple of years ago the w3c promised a solution.

Since the promised `<link rel="import" ...>` died a slow death during the last years and currently no real alternative is available it is necessary to look for an alternative. As the only possible fix is the usage of some JavaScript we decided to make JavaScript the central access point to custom elements.

To keep the demo simple the custom element is only a widget displaying a pre-defined text with a bit of style (called fancy-paragraph). The focus shall be how to organize the files for a web component.

## Files Involved
- The client code can be found in `index.html`. Note that the client only has to import `FancyHeader` which is the script holding the class of the custom element in order to be able to use it.

- The functionality of the custom element is defined in `FancyParagraph.js`. The template which is used to populate the shadow DOM of `fancy-paragraph` is loaded from here dynamically from an extra file called `fancy-paragraph.html`.

- Finally the html template refers to a css file `fancy-header.css` via the standard `<link rel="stylesheet" ...>` method.

## LoadTemplate
A first shot to get the template file read via the async fetch interface. This makes a kind of a hack necessary to get the result back to the caller. Though I do not really like it this is the only way I was able to get the problem solved.
