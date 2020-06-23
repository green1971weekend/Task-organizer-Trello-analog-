Application.load();

 document.querySelectorAll(".column").forEach(Column.noteHandling);

 document.querySelectorAll(".column").forEach(Column.deleteColumn);

 document.querySelectorAll(".note").forEach(Note.edit);

 
// Create new column - listening event
const spanAction_addColumn = document.querySelector("[data-action-addColumn]");

   spanAction_addColumn.addEventListener("click", function(event){

      const columnElement = Column.createColumn();
      document.querySelector(".columns").append(columnElement);   

      Column.noteHandling(columnElement);

      Application.save();
}); 
 


 
