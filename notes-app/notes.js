const fs = require('fs');
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNote = notes.filter((x) => x.title === title)
    const duplicateNote = find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note has been added'));
    } else {
        console.log(chalk.red.inverse('Note title Taken!'))
    }


}
const removeNote = (title) => {
    const notes = loadNotes();
    let newNotes = notes.filter((note) => note.title !== title)
    if (notes.length > newNotes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)

}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your notes'))
    notes.forEach((x) => {
        console.log(x.title)
    })

}

const readNotes = (title) => {
    const note = loadNotes();
    const matchingNote = note.find((note) => note.title === title)
    if (matchingNote) {
        console.log(chalk.inverse(matchingNote.title))
        console.log(matchingNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    addNotes: addNote,
    removeNotes: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}