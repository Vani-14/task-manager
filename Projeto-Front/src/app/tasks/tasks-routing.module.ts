import { Routes } from "@angular/router";

import { ListTasksComponent } from "./list-tasks";
import { TaskRegisterComponent } from "./task-register";
import { TaskEditComponent } from "./task-edit/task-edit.component";

export const TasksRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListTasksComponent
    },
    {
        path: 'tarefas/registrar',
        component: TaskRegisterComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: TaskEditComponent
    },
]