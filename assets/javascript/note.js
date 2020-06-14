const Note = {
    idCounter: 8,
    draggable: null,

    //Edit note. Drag and drop assign.
    edit (noteElement){
        noteElement.addEventListener("dblclick",function(event){
            noteElement.setAttribute("contenteditable","true");
            noteElement.removeAttribute("draggable");
            noteElement.parentElement.removeAttribute("draggable");
            noteElement.focus();
         });
   
         noteElement.addEventListener("blur", function(event){
               noteElement.removeAttribute("contenteditable");
               noteElement.setAttribute("draggable", "true");
               noteElement.parentElement.setAttribute("draggable", "true");
               
               if(!noteElement.textContent.trim().length){
                  noteElement.remove();
               }
         });
   
         noteElement.addEventListener("dragstart", dragstart_noteHandler)
         noteElement.addEventListener("dragend", dragend_noteHandler)
         noteElement.addEventListener("dragenter", dragenter_noteHandler)
         noteElement.addEventListener("dragover", dragover_noteHandler)
         noteElement.addEventListener("dragleave", dragleave_noteHandler)
         noteElement.addEventListener("drop", drop_noteHandler)
    },

    //Create new note
      add (columnElement){

      const addNote = columnElement.querySelector("[data-action-addNote]");

      addNote.addEventListener("click", function(event){

         const newNote = document.createElement("div")
         newNote.classList.add("note");
         newNote.setAttribute("draggable", "true");
         newNote.setAttribute("data-note-id", Note.idCounter++);

         columnElement.querySelector("[data-notes]").append(newNote);

            newNote.setAttribute("contenteditable", "true");
            newNote.focus();

            Note.edit(newNote);
      });

         // columnElement.addEventListener("dragover", function(event){
         //    event.preventDefault();
         // });

         // columnElement.addEventListener("drop", function(event){
         //       if(Note.draggable){
         //       return columnElement.querySelector("[data-notes]").append(Note.draggable);
         //    }
         // });
   }
}

