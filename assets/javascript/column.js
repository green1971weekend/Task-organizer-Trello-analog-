let columnCounter  = 4;

    // Create new column

    const spanAction_addColumn = document.querySelector("[data-action-addColumn]");

        spanAction_addColumn.addEventListener("click", function(event){

        const newColumn = document.createElement("div");
        newColumn.classList.add("column");
        newColumn.setAttribute("draggable", "true");
        newColumn.setAttribute("data-column-id", columnCounter++);
    
        newColumn.innerHTML = 
        `<p class="column-header">В плане</p>
        <div data-notes></div>
        <p class="column-footer">
            <span data-action-addNote class="action">+ Добавить карточку</span>
        </p>`;
    
        document.querySelector(".columns").append(newColumn);
        
        Note.add(newColumn);
     });  










