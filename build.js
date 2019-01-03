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

// Define escaped ASCII art for our name
const guahanweb = `                 _                             _
  __ _ _   _  __ _| |__   __ _ _ ____      _____| |__
 / _\` | | | |/ _\` | '_ \\ / _\` | '_ \\ \\ /\\ / / _ \\ '_ \\
| (_| | |_| | (_| | | | | (_| | | | \\ V  V /  __/ |_) |
 \\__, |\\__,_|\\__,_|_| |_|\\__,_|_| |_|\\_/\\_/ \\___|_.__/
 |___/                               ${chalk.white('.: Garth Henson :.')}`;

const bio = `\
I am a husband, dad, musician, speaker, software
engineer, application architect, hobbyist photographer,
and Disney fan living in the Research Triangle of NC.
Coffee and JavaScript are my love language, and I'm
convinced I'll never be able to stop learning.`;

// Actual layout using chalk template rendering for alignment
let output = chalk`
{blue -------------------------------------------------------}
  {yellow ${guahanweb}}
{blue -------------------------------------------------------}
       {bold Christian} {cyan |} {bold Family Man} {cyan |} {bold Speaker} {cyan |} {bold Mentor}

      {bold Work:}  Staff Software Engineer at The Walt
             Disney Company ({cyan @WaltDisneyCO})
   {bold Twitter:}  {blue https://twitter.com/}{magenta guahanweb}
    {bold GitHub:}  {blue https://github.com/}{magenta guahanweb}
  {bold LinkedIn:}  {blue https://linkedin.com/in/}{magenta garthhenson}
       {bold Web:}  {blue https://}{magenta guahanweb}{blue .com}

    {bold Events:}  {blue https://}{magenta guahanweb}{blue .github.io/speaking/}
      {bold Card:}  {cyan npx} {magenta guahanweb}

{yellow ${bio}}`;

// Remove leading newline and write our card to bin/output for distro
const [, ...trimmed] = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card);
console.log(card);
