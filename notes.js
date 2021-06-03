const notes = [
    {
        date: 'past',
        subject: 'github',
        feeling: 'confused',
        id: 1,
    },
    {
        date: 'past',
        subject: 'html',
        feeling: 'great',
        id: 2,
    },
    {
        date: 'past',
        subject: 'css',
        feeling: 'eh',
        id: 3,
    },
];

/*changed const to let for the sake of not 
having to come up with a new variable every time*/
let noteAboutToday = {
    date: '6 / 3 / 2021',
    subject: 'javascript',
    feeling: 'Need more practice',
    id: 4,
};

notes.push(noteAboutToday);

// function to give new notes unique ids
const createNote = (newNote) => {
    const lastIndex = notes.length - 1;
    const currentLastNote = notes[lastIndex];
    const maxId = currentLastNote.id;
    const newLastNote = maxId + 1;

    newNote.id = newLastNote;
    notes.push(newNote);
};

//new notes.. same variable
noteAboutToday = {
    date: '6 / 4 / 2021',
    subject: 'javascript',
    feeling: 'getting confident',
};
//invokes function to push to array w/ new id
createNote(noteAboutToday);

//search a subject to know how you are feeling about it
const searchTerm = '';
for (const note of notes) {
    if (note.subject === searchTerm) {
        console.log(`${note.subject}: ${note.feeling}.`);
    }
}

//function to list all functions w/ string interpolation.
for (const note of notes) {
    console.log(`Note: ${note.id}
  Date: ${note.date}
  Today we learned ${note.subject}.
  Thoughts: ${note.feeling}.
  ---------------
  `);
}
