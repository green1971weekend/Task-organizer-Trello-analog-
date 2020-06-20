const Column = {

    idCounter: 4,
    draggable: null,

         createColumn(id = null){

               const newColumn = document.createElement("div");
               newColumn.classList.add("column");
               newColumn.setAttribute("draggable", "true");
               
               if (id){
                   newColumn.setAttribute("data-column-id", id);
               }
               else{
                  newColumn.setAttribute("data-column-id", Column.idCounter++); 
               }

               newColumn.innerHTML = 
                  `<div class="column-header">
                        <p>В плане</p>
                  </div>
                  <div data-notes></div>
                  <div class="column-footer">
                        <span data-action-addNote class="action">+ Добавить карточку</span>
                        <button class="trash-button">
                              <i class="fas fa-trash"></i>
                         </button>
                  </div>`;
                  Column.deleteColumn(newColumn);

                  return newColumn;
         },

         deleteColumn (columnElement){

             const deleteButton = columnElement.querySelector(".trash-button");

             deleteButton.addEventListener("click", function (event){
                  const checkAction = confirm("Вы действительно желаете удалить данную колонку?");
                  if (checkAction){
                        columnElement.closest(".column").remove();
                  }
                  Application.save();
             });
         },

         noteHandling (columnElement){
            const addNote_spanAction = columnElement.querySelector("[data-action-addNote]");

            addNote_spanAction.addEventListener("click", function(event){
                  const noteElement = Note.add();
                  columnElement.querySelector("[data-notes]").append(noteElement);
                        
                  noteElement.setAttribute("contenteditable", "true");
                  noteElement.focus();
            });
      }
}
 










