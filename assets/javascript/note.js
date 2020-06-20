const Note = {
    idCounter: 8,
    draggable: null,

     //Create new note
     add (id = null, content = ""){

         const newNote = document.createElement("div")
         newNote.classList.add("note");
         newNote.setAttribute("draggable", "true");
         newNote.textContent = content;

         if (id){
            newNote.setAttribute("data-note-id", id);
         }
         else{
            newNote.setAttribute("data-note-id", Note.idCounter++);
         }
         Note.edit(newNote);
         Application.save();

         //    columnElement.addEventListener("dragover", function(event){
         //       event.preventDefault();
         //    });

         //   columnElement.addEventListener("drop", function(event){
         //       if(Note.draggable){
         //       return columnElement.querySelector("[data-notes]").append(Note.draggable);
         //    }          
         // });

         return newNote; 
      },

    //Edit note. Drag and drop assign.
    edit (noteElement){
            noteElement.addEventListener("dblclick",function(event){
            noteElement.setAttribute("contenteditable","true");
            noteElement.removeAttribute("draggable");
            noteElement.closest(".column").removeAttribute("draggable");
            noteElement.focus();
         });
   
         noteElement.addEventListener("blur", function(event){
               noteElement.removeAttribute("contenteditable");
                noteElement.setAttribute("draggable", "true");
                noteElement.closest(".column").setAttribute("draggable", "true");
               
               if(!noteElement.textContent.trim().length){
                  noteElement.remove();
               }
         });
         Application.save();
   
         noteElement.addEventListener("dragstart", Note.dragstart)
         noteElement.addEventListener("dragend", Note.dragend)
         noteElement.addEventListener("dragenter", Note.dragenter)
         noteElement.addEventListener("dragover", Note.dragover)
         noteElement.addEventListener("dragleave", Note.dragleave)
         noteElement.addEventListener("drop", Note.drop)
    },


    //Handling Drag and Drop
   dragstart (event){

   Note.draggable = this;
   this.classList.add("dragged");

   event.stopPropogation(); //!!!
},

   dragend (event){

   this.classList.remove("dragged");
   Note.draggable = null;

   document.querySelectorAll(".note").forEach(n => n.classList.remove("under"));
   Application.save();
},

   dragenter (event){

   if(this === Note.draggable){
   return;
   }
},

   dragover (event){

   if(this === Note.draggable){
   return;
   }

     this.classList.add("under");

     event.preventDefault(); //!!!
},

   dragleave (event){

   if(this === Note.draggable){
   return;
   }

     this.classList.remove("under");
},

   drop (event){
     // event.stopPropogation();

   if(this === Note.draggable){
      return;
   }

   if(this.parentElement === Note.draggable.parentElement){

      const noteList = Array.from(this.parentElement.querySelectorAll(".note"));
      const currentNoteIndex = noteList.indexOf(this);
      const draggableIndex = noteList.indexOf(Note.draggable);

      if(currentNoteIndex < draggableIndex){
         this.parentElement.insertBefore(Note.draggable, this);
      }
      else{
         this.parentElement.insertBefore(Note.draggable, this.nextElementSibling);
      }
   }

   else{
      this.parentElement.insertBefore(Note.draggable, this);
   }
}
}

