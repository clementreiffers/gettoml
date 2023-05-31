# toml-reader

this project serve to read toml files efficiently and use the result directly into a terminal.

## Overview

1. [Run it](#run-it)
    1. [By installing it](#by-installing-it)
    2. [Using npx](#using-npx)
2. [Examples](#examples)

## Run it

### By installing it

for installation : `npm install -g gettoml` or `yarn global add gettoml`

run `gettoml --tomlPath path_to_toml.toml --valuePath path_to_value_in_toml`

if in your shell scripts you need default values if no values were found in the `toml` file you can 
add `--defaultValue defaultValue`

### Using `npx`

skip the installation part, and add npx before `gettoml` as follows: `npx gettoml ...`

## Examples

if you have a toml file named `example.toml` as below:
```toml
lang = "typescript"

[build]
command = "yarn build"
```
you can find :
- the `lang` using the command `npx gettoml --tomlPath example.toml --valuePath lang`
- the `build command` using the command `npx gettoml --tomlPath example.toml --valuePath build.command`
- a hypothetical value named `push` using the command `npx gettoml --tomlPath example.toml --valuePath push --defaultValue "yarn deploy"`
