import { Command } from 'commander';
import parser from '../src/parsers/index.js';

const program = new Command();

program
    .name('gendiff')
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>', 'path to first file, supported formats: json, yaml, yml')
    .argument('<filepath2>', 'path to second file, supported formats: json, yaml, yml')
    .option (
        '-f, --format [type]',
        'output format',
    )
    .action((file1, file2) => {
        parser(file1,file2);
    });
    /*
    .option (
        '--uuu -u',
        'the style of input, coudl be plain,stylish and json',
    )
    .command(
        'aardvark [colour]',
        'medium-sized, burrowing, nocturnal mammal',
    );
*/



program.parse();
