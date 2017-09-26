//Variables
var newTaskForm = document.querySelector('.add-new-task-container form');//pozwala na wybranie całego formularza
var tasksContainer = document.querySelector('.tasks-container ul');//wybrany pojemnik na zmienne

//On DOM load
//plik odpowiada za mechanikę całej aplikacji
document.addEventListener('DOMContentLoaded', function()//zapis oznacza, że aplikacja zacznie działać, kiedy całe drzewo DOM będzie już załadowane
{
  bindAddTaskEvents();//funckja, aby działał formularz do wpisywania nowych zadan
  showTasks();//kiedy funkcja będzie gotowa odwołujemy się do funkcji showTasks()
});//nasłuchiwacz nasłuchuje, że gdy pojawi się zdarzenie 'DOMContentLoaded' ma się wykonać funkcja showTasks()
//wyświetlenie listy zadań
