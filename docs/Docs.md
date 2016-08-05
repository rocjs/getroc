## Main concepts

Roc is here to solve some challenges within the Javascript and `npm` ecosystem when it comes to development at a larger scale.

- Get **started** with new projects quickly using best-practices and avoiding code duplication (boilerplate)
- Help **maintain** large portfolios of similar project types

You can more about this in <a href="https://medium.com/@arsovik/rethinking-modern-javascript-development-6aee92b860aa">this article</a>.

### Getting started quickly

As developers we want to spend our effort creating awesome products. Roc helps us focus on this by providing a command line interface (CLI) and a powerful configuration system that proxies underlying libraries. As a developer you pick Roc extensions (npm packages) that combines your favourite libraries from `npm`. You can also create your own extensions and share them.

### Maintain large portfolios of similar projects

Projects often fall within categories like "Rest API" or "Universal React App". Instead of wiring all the individual npm dependencies within each project or using a boilerplate generator to do so, Roc allows you to collect the repetitive module wiring within a single npm package and then re-use that easily in every project. This approach decouples the repetitive library-wiring from your application and instead make the important parts configurable. This makes maintenance easier because
- Library combinations and configurations happen in one single place
- Fix once, deploy everywhere
- Hide irrelevant quirks and complexities of underlying modules

## Roc toolchain

### The Roc CLI

The command line interface is the primary way of interacting with Roc projects. The commands and configuration available from the Roc CLI is decided by the extensions used by the current project. This is calculated at runtime and we refer to this as the context.

### The Roc runtime

The roc runtime loads everything required
