# Heat Pump Calculator

## Requirements

- [Node.js](https://nodejs.org/en/about) and npm for the frontend, plus the packages managed by npm
    - this app was developed on node 21.7.1 and npm 10.5.0
    - note that node installations typically come with npm
- [Python](https://www.python.org/about/) and [Poetry](https://python-poetry.org/) for the backend, plus the packages managed by `poetry`
    - Poetry is a package manager and dependency resolver for python
    - this app was developed on python 3.12.2 and poetry 1.8.2
- (optional) [`just`](https://github.com/casey/just) for task running
    - task runner for the project, simplifies things that are repeated e.g. installs or server runs
    - Like make but a lot nicer, [here's some basics](https://github.com/casey/just?tab=readme-ov-file#quick-start).

### Installation Instructions

- [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- [Python](https://www.python.org/downloads/)
- [Poetry](https://python-poetry.org/docs/#installation)
- [`just`](https://github.com/casey/just?tab=readme-ov-file#installation)


Documentation for each of these can be found on the same site as the installs.


I (Beau) *highly recommend* using a package manager to install all of these,
or `nvm` if you deal with different node versions

## Setup

Each of the below instructions assumes you're in a terminal in the root of the project.
For usage without just, read the [`justfile`](./justfile). It strongly resembles a `Makefile`.

### Install dependencies

```bash
just install # `just i` works too!

```

## Start the application

### Server
```bash
# in a new terminal

just server-launch # `just server` works
```

This starts the api server on `localhost:3001`


### Client
```bash
# in a new terminal

just client-launch # `just client works`
```

This starts the react server on `localhost:3000`
