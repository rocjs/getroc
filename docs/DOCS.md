## How it works

### Basic concept

**Without** Roc a typical JavaScript project is responsible for picking all development and runtime libraries from npm, from scratch. The project must then configure all of these libraries individually and make them work well together. Examples of this are configuring Babel and Webpack for building and bundling, as well as ensuring Babel and Webpack are kept up to date over time. Other core libraries come on top of this. The more projects you own the more challenging this becomes.

**With** Roc a typical JavaScript project picks a single Roc extension (package from npm) that meets their criteria. This Roc extension includes everything needed to build and run the application using a simple command line interface. Complicated and tedious configurations from the underlying libraries are proxied to a single configuration object that is easy to understand and maintain. The project now has the complex build and dependency management as a single versioned dependency instead of embedding it all directly within the project. Maintaining and upgrading all your projects just got much easier!

### The Roc CLI

The command line interface is the primary way of interacting with your Roc projects. The commands and configuration available from the Roc CLI is decided by the extensions used by the current project.


### CLI lifecycle

When the Roc CLI is initiated
1. Parse the input passed to the CLI
2. Toggle behaviour flags based on input (for example verbose mode on/off)
3. Detect current Roc extensions from package.json and use them to enhance CLI => builds 'context'
4. Identify potential command suggestions or available aliases from input and current context
5. Merge configuration from project 'roc.config.js' to the context
6. Merge configuration from CLI parameters to the context
7. Run a hook allowing the loaded extensions to inspect and potentially update the final configurations
8. Invoke the given command from the context if a match is found

This lifecycle allows Roc to expose some very powerful features through a simple command line interface. As a normal user of a Roc extension you do not have to care about the lifecycle above, you just use it as any other commandline tool.

### The Roc runtime

TODO
