// funkcja odpowiada za wyświetlanie zadań na liście
function showTasks()
{
  tasks.forEach(function(title)//przesyłam tytuł do funkcji addNewTask, która specjalizuje się w dodawaniu zadania do dokumentu HTML
  {
    addNewTask(title);//do funkcji przekazywane są kolejne nazwy zadań z pliku
  });
}
//Toggle complete
function toggleTaskComplete(task)
{
  task.classList.toggle('btn-success');
}

//Delete task
function deleteTask(task)
{
  var liToDelete = task.closest('li');
  task.closest('ul').removeChild(liToDelete);
  //rodzic.removeChild();
}
