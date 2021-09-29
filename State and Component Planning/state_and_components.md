# State Tree

taskId: id,
taskTitle: string,
taskActive: boolean (true: active, false: completed)

# Actions 

ADD_TASK (Adds the task to the list),
DELETE_TASK (Deletes the selected task from the list),
TOGGLE_ACTIVE (Marks the task as "complete" or "active" depending on the checkbox for the task),
SELECT_STATUS (Toggle between "All", "Active", and "Completed" tabs)

# Container and Presentational Components

Container
------------------------
Adding tasks to the list,
Deleting tasks from the list,
Marking items as completed,
Filtering results based on the toggled view (All, Active, Completed)

Presentational
------------------------
The list of tasks (checkbox, title of task, and delete icon for each task in the list),
Toggling between All, Active, and Completed views and displaying the filtered results,
The form on the contact page 




