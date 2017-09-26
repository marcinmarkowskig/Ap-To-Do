function addNewTask(title)
{
  var taskLi = document.createElement('li');

  taskLi.classList.add('single-task');/*to jest potrzebne, ponieważ pomiędzy kolejnymi wyświetlanymi zadanimi jest wpisane
 .single-task
  {
    margin-bottom: 16px;
  }, a później w funkcji prepareTaskHTML(title) używamy tego sty*/
  taskLi.innerHTML = prepareTaskHTML(title);

  //Events - toggle and delete,  przełączanie stanu wykonane, niewykonane
  var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
  var deleteBtn = taskLi.querySelector('.delete-task-btn');

  toggleCompleteBtn.addEventListener('click', function()
  {
    toggleTaskComplete(this);
  });

  deleteBtn.addEventListener('click', function()
  {
    deleteTask(this);
  });

  //Add task to DOM
  tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title)
{
  return '<div class="input-group"> '+
    '  <span class="input-group-btn">'+
    '    <button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>'+
    '  </span>'+
      '  <input type="text" class="form-control" placeholder="Tytuł zadania..." value="' + title + '">'+
    '  <span class="input-group-btn">'+
    '    <button class="btn btn-danger delete-task-btn" type="submit"><i class="fa fa-times"></i></button>'+
'  </div>';
}
//Dodawanie nowych zadań, za pomocą zdarzenia submit
function bindAddTaskEvents()
{
  //w momencie wysłania formularza // on submit
  newTaskForm.addEventListener('submit', function(event)
  {
    event.preventDefault();//zapobiegnięcie przeładowaniu strony po wciśnięciu entera

    var title = this.querySelector('input').value;

    if(title)
    {
      //dodanie nowego tytułu zadania do listy
      addNewTask(title);
    }
  });
}
