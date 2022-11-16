
const { demandOption, argv } = require('yargs');
const yargs = require('yargs');
const chalk = require('chalk')
// import { require } from 'yargs';
// import chalk from 'chalk'
// import yargs from 'yargs'
const notes = require('./notes.js');
// import getNotes from './notes.js'
// console.log(process.argv,'process');
// console.log(yargs.argv,'yargs');
yargs.command({
    command: 'add',
    description: 'Add new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

});

yargs.command({
    command: 'remove',
    description: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'Listing the notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    description: 'Read the notes',
    builder: {
        title: {
            describe: 'Read Notes',
            demandOption: true,
            type: 'string'

        }
    },
    handler() {
        notes.readNotes(argv.title)
    }
})

// console.log(process.argv)
yargs.parse()
// console.log(getNotes(),'getnotes');