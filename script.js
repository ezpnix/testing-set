document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            addNote(noteText);
            noteInput.value = '';
        }
    });

    function addNote(text) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <p>${text}</p>
            <button onclick="deleteNote(this)">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    }
});

function deleteNote(button) {
    const note = button.parentElement;
    note.remove();
}
