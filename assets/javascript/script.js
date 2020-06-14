
 // Add listen function AddNote for all existing columns
 document.querySelectorAll(".column").forEach(Note.add);

 //Add listen function NoteEdit for editing notes
 document.querySelectorAll(".note").forEach(Note.edit);


 
//Handling Drag and Drop
function dragstart_noteHandler (event){

   Note.draggable = this;
  // this.classList.add("dragged");
}

function dragend_noteHandler (event){

   // this.classList.remove("dragged");
   Note.draggable = null;

   document.querySelectorAll(".note").forEach(n => n.classList.remove("under"));
}

function dragenter_noteHandler (event){

      if(this === Note.draggable){
      return;
     }
}

function dragover_noteHandler (event){

      if(this === Note.draggable){
      return;
     }
     this.classList.add("under");
     event.preventDefault();
}

function dragleave_noteHandler (event){

      if(this === Note.draggable){
      return;
     }
     this.classList.remove("under");
}

function drop_noteHandler (event){
   //  event.stopPropogation();

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


 
