const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    


    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.green.inverse('New note added!'))
       

    } else{
        console.log(chalk.green.inverse('Note title taken!'))
            
        }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
    }
    else(
        console.log(chalk.red.inverse('No Note Found!'))
    )

    saveNote(notesToKeep)

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes Titles Are'))

    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNotes = (title) =>{

    const notes = loadNotes()

    const searchNote = notes.find((note) =>note.title === title)

    if(searchNote){
        console.log(chalk.inverse(searchNote.title))
        console.log(searchNote.body)
    }
    else{
        console.log(chalk.red.inverse("No Note Found"))
    }

}


const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch(e){
        return[]

    }
    
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}