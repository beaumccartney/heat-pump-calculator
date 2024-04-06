# Heat Pump Calculator

## Requirements

- [Node.js](https://nodejs.org/en/about) and npm for the frontend, plus the packages managed by npm
    - this app was developed on node 21.7.1 and npm 10.5.0
    - note that node installations typically come with npm
- [Python](https://www.python.org/about/)
    - this app was developed on python 3.12.2 and poetry 1.8.2
- [Poetry](https://python-poetry.org/) for the backend, plus the packages it manages
    - manages python package dependencies
- (optional) [`just`](https://github.com/casey/just) for task running
    - task runner for the project, simplifies things that are repeated e.g. installs or server runs
    - Like make but a lot nicer, [here's some basics](https://github.com/casey/just?tab=readme-ov-file#quick-start).

### Installation Instructions

Official installation instructions:
- [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- [Python](https://www.python.org/downloads/)
- [Poetry](https://python-poetry.org/docs/#installation)
- [`just`](https://github.com/casey/just?tab=readme-ov-file#installation)


I (Beau) *highly recommend* using a package manager to install all of these. I
prefer [homebrew](https://brew.sh/) on macos and [scoop](https://scoop.sh/) on
windows.


Below are some commands to install `just` and Poetry for common package
managers. If you're on linux you know what package manager you're on and how to
find the requisite packages.


Poetry:
```bash
# windows + scoop
scoop install main/poetry

# macos + brew
brew install poetry

# macos + macports
port install poetry

# not available on chocolatey or winget :(
```

Just:
```bash
# windows + scoop
scoop install main/just

# windows + chocolatey
choco install just

# windows + winget
winget install --id Casey.Just --exact

# macos + brew
brew install just

# macos + macports
port install just
```

## Setup

Please ensure all of the [requirements](#Requirements) are installed, and
available on `$PATH`

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
