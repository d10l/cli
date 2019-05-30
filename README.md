dencli
======

CLI to build platform in regulated industries

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dencli.svg)](https://npmjs.org/package/dencli)
[![CircleCI](https://circleci.com/gh/denseidel/dencli/tree/master.svg?style=shield)](https://circleci.com/gh/denseidel/dencli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/dencli.svg)](https://npmjs.org/package/dencli)
[![License](https://img.shields.io/npm/l/dencli.svg)](https://github.com/denseidel/dencli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dencli
$ den COMMAND
running command...
$ den (-v|--version|version)
dencli/0.0.0 darwin-x64 node-v11.15.0
$ den --help [COMMAND]
USAGE
  $ den COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`den hello [FILE]`](#den-hello-file)
* [`den help [COMMAND]`](#den-help-command)
* [`den repo:addboilerplate`](#den-repoaddboilerplate)
* [`den repo:addguidelineagent`](#den-repoaddguidelineagent)
* [`den repo:addservice`](#den-repoaddservice)

## `den hello [FILE]`

describe the command here

```
USAGE
  $ den hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ den hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/denseidel/dencli/blob/v0.0.0/src/commands/hello.ts)_

## `den help [COMMAND]`

display help for den

```
USAGE
  $ den help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `den repo:addboilerplate`

Adding repo boilerplate include README.md and repo structure.

```
USAGE
  $ den repo:addboilerplate
```

_See code: [src/commands/repo/addboilerplate.ts](https://github.com/denseidel/dencli/blob/v0.0.0/src/commands/repo/addboilerplate.ts)_

## `den repo:addguidelineagent`

adding git guideline agent to repo

```
USAGE
  $ den repo:addguidelineagent
```

_See code: [src/commands/repo/addguidelineagent.ts](https://github.com/denseidel/dencli/blob/v0.0.0/src/commands/repo/addguidelineagent.ts)_

## `den repo:addservice`

add a service based on aws lambda

```
USAGE
  $ den repo:addservice
```

_See code: [src/commands/repo/addservice.ts](https://github.com/denseidel/dencli/blob/v0.0.0/src/commands/repo/addservice.ts)_
<!-- commandsstop -->

## Common Errors

- Nodegit does not install because it needs a lower node version (e.g. `nvm use 11`)
