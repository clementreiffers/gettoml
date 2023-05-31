#! /usr/bin/env node
import * as toml from 'toml';
import {readFile} from 'fs';
import {hideBin} from 'yargs/helpers';
import yargs from 'yargs';

const processReading = ({valuePath, defaultValue = ''}) => (err, data) => {
	if (err) {
		throw err;
	}

	if (valuePath === undefined) {
		throw new Error('missing --valuePath');
	}

	const value = valuePath.split('.').reduce((obj, key) => obj[key], toml.parse(data.toString()));
	console.log(value || defaultValue);
};

const readTomlFile = ({tomlPath, valuePath, defaultValue}) => {
	if (!tomlPath) {
		throw new Error('missing --tomlPath');
	}

	readFile(tomlPath, processReading({valuePath, defaultValue}));
};

const main = () => {
	readTomlFile(yargs(hideBin(process.argv)).argv);
};

main();

