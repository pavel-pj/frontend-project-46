import { Command } from 'commander';

const program = new Command();



program
    .name('gendiff')
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
/*
    .option (
        '--format -f',
        'the style of input, coudl be plain,stylish and json',
    )
    .option (
        '--uuu -u',
        'the style of input, coudl be plain,stylish and json',
    )
    .command(
        'aardvark [colour]',
        'medium-sized, burrowing, nocturnal mammal',
    );
*/

//  .argument('<filepath1>', 'path to first file, supported formats: json, yaml, yml')
//  .argument('<filepath2>', 'path to second file, supported formats: json, yaml, yml');

program.parse();
