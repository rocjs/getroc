## Why Roc

Roc solves some practical challenges within the Javascript and `npm` ecosystem.

- Get **started** with new projects quickly using best-practices and avoiding code duplication within projects (boilerplate)
- Help **maintain** large portfolios of similar project types

You can more about the background in <a href="https://medium.com/@arsovik/rethinking-modern-javascript-development-6aee92b860aa">this article</a>.

### Getting started quickly using Roc

We want to spend our effort prototyping and creating awesome products. Roc helps us focus on this by providing a command line interface (CLI) and a powerful configuration system that proxies all underlying build systems and libraries. As a developer you pick Roc extensions from npm that combines your favourite libraries from npm for your problem-space. They integrate directly with the CLI and are very easy to configure.

### Maintain large portfolios of similar projects using Roc

Projects often fall within categories like "api" or "frontend". Instead of wiring all the individual npm dependencies within each project from scratch or using a boilerplate generator to do so, Roc allows you to collect the repetitive module wiring within a single npm package and then re-use that easily in projects. This approach decouples the repetitive library-wiring and difficult configurations from your application and instead make the important parts configurable. This makes maintenance easier because
- Library combinations from npm and configuring them correctly happens in one single place.
- Fix once, update and deploy everywhere.
- Hide irrelevant quirks and complexities of integrating underlying npm modules.
- Create your own Roc extensions and share them with others
