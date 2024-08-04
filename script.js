document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    // Load notes from localStorage
    loadNotes();

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            addNoteToDOM(noteText);
            saveNoteToStorage(noteText);
            noteInput.value = '';
        }
    });

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => addNoteToDOM(note));
    }

    function addNoteToDOM(text) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <p>${text}</p>
            <button onclick="deleteNote(this)">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    }

    function saveNoteToStorage(text) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(text);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
});

function deleteNote(button) {
    const note = button.parentElement;
    const noteText = note.querySelector('p').textContent;
    note.remove();
    removeNoteFromStorage(noteText);
}

function removeNoteFromStorage(text) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note !== text);
    localStorage.setItem('notes', JSON.stringify(notes));
}
