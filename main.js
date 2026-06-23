    const todos=[];
    
        function addTask(){ 
         let tasktitle= document.getElementById("input-title").value;
         let taskdescription = document.getElementById("input-description").value;
         let newtask={
          id: Date.now(),
          title:tasktitle,
          description:taskdescription , 
          complete:false
         }
          todos.push(newtask);
          displayTasks();
        };
        function displayTasks(){
           let todolist = document.getElementById("todo-box");
           todolist.innerHTML='';
         
          for(let i=0; i<todos.length; i++){
              let li= document.createElement("li");
              li.innerHTML =`<h3 class="task-title">Task: ${todos[i].title}</h3> 
              <p class="task-description">Decreption: ${todos[i].description}</p>
                  <div class="buttons">
                    <button onclick="iscompleted(${todos[i].id})" class="btn-style">Complete </button>
                    <button onclick="update(${todos[i].id})" class="btn-style">Update</button>
                    <button onclick="delet(${todos[i].id})" class="btn-style">Delete</button>
                  </div>`;
               todolist.appendChild(li);  
               
               li.className = "task-card";
               document.querySelector(".todo-box").style.display = "flex";
             
               document.getElementById("input-title").value = "";
               document.getElementById("input-description").value = "";
            
             
             if (todos[i].complete == true){
               li.innerHTML = `<h3 class="task-title">Task: ${todos[i].title}</h3> 
              <p class="task-description">Decreption: ${todos[i].description}</p>
                <div class="buttons">
                    <button onclick="iscompleted(${todos[i].id})" class="btn-style">Completed !! ✅ </button>
                </div>`;
            }  
            else if(todos[i].complete == false){
                
            }
            };
             
        };

        function update(id){

            for (let i=0; i<todos.length; i++){
              if (todos[i].id == id){
                   todos[i].title= document.getElementById("input-title").value;
                   todos[i].description= document.getElementById("input-description").value;}
               displayTasks();
            }  
        };
        function delet(id){
            for (let i=0; i<todos.length; i++){
                if (todos[i].id === id){
                   todos.splice(i, 1);
                };
            } displayTasks();
        };
        function iscompleted(id){
            for (let i=0; i<todos.length; i++){
                if (todos[i].id == id && todos[i].complete === false){
                     todos[i].complete = true;
            } else if (todos[i].id == id && todos[i].complete === true){
                     todos[i].complete = false;
            }
             displayTasks();
        };
    };
        