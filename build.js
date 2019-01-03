#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green'
};

/*
{yellow ╔═╗┌─┐┬─┐┌┬┐┬ ┬  ╦ ╦┌─┐┌┐┌┌─┐┌─┐┌┐┌}
{yellow ║ ╦├─┤├┬┘ │ ├─┤  ╠═╣├┤ │││└─┐│ ││││}
{yellow ╚═╝┴ ┴┴└─ ┴ ┴ ┴  ╩ ╩└─┘┘└┘└─┘└─┘┘└┘}
*/

let output = chalk`
{yellow  _____            _   _       _   _}
{yellow |  __ \\          | | | |     | | | |}
{yellow | |  \\/ __ _ _ __| |_| |__   | |_| | ___ _ __  ___  ___  _ __}
{yellow | | __ / _\` | '__| __| '_ \\  |  _  |/ _ \\ '_ \\/ __|/ _ \\| '_ \\}
{yellow | |_\\ \\ (_| | |  | |_| | | | | | | |  __/ | | \\__ \\ (_) | | | |}
{yellow  \\____/\\__,_|_|   \\__|_| |_| \\_| |_/\\___|_| |_|___/\\___/|_| |_|}


    ∙ Christian and Famiily Man
    ∙ Staff Software Engineer at {cyan @WaltDisneyCO}
    ∙ Public speaker and mentor

              https://{blue twitter}.com/{yellow guahanweb}
                          https://{yellow guahanweb}.com
               https://{blue github}.com/{yellow guahanweb}
          https://${chalk.blue('linkedin')}.com/in/{yellow garthhenson}
                            {cyan garth}@{yellow guahanweb}.com
                            {blue $} npx {yellow guahanweb}`;

const [, ...trimmed] = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card);
console.log(card);
