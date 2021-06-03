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

const noteAboutToday = {
    date: '6 / 3 / 2021',
    subject: 'javascript',
    feeling: 'Need more practice',
    id: 4,
};

notes.push(noteAboutToday);

const searchTerm = '';
for (const note of notes) {
    if (note.subject === searchTerm) {
        console.log(`${note.subject}: ${note.feeling}.`);
    }
}

for (const note of notes) {
    console.log(`Note: ${note.id}
  Date: ${note.date}
  Today we learned ${note.subject}.
  Thoughts: ${note.feeling}.
  -------------
  `);
}
