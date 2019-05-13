const chalk= require('chalk');
const yargs=require('yargs')
const notes=require('./notes.js')


//create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
    title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
    },
    body:{
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
    },
    handler(argv){
  notes.addNotes(argv.title,argv.body)
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
      title:{
        describe:'Remove Note',
        demandOption:true,
        type:'string'
    },
    },

    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'reading note',
    builder:{
    title:{
        describe:'Remove Note',
        demandOption:true,
        type:'string'
    }
    },
    handler(argv){
        notes.readNotes(argv.title)
        console.log('reading note')
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list of note',
    handler(){
        notes.listNotes()
    }
})



// if(command === 'add'){
//     console.log('Adding note');
// }else if(command === 'remove'){
//     console.log('removing note!')
// }
yargs.parse();