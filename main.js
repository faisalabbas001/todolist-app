#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addtask();
        }
        else if (option.choice === "View Todo-list") {
            viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
    }
};
// Function to add task to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new Task"
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} : added successfully to Todolist-app`);
};
// Function to view all the todo list tasks
let viewTask = () => {
    console.log("\n  Your Todolist:\n ");
    todolist.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
};
// Function to delete a todo list task
let deleteTask = async () => {
    await viewTask();
    let taskindex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the index no of the task you want to delete: "
        }]);
    if (taskindex.index >= 0 && taskindex.index < todolist.length) {
        let deletedTask = todolist.splice(taskindex.index, 1);
        console.log(`\n ${deletedTask} task has been deleted successfully from todo-list`);
    }
    else {
        console.log(chalk.red("\n Invalid index provided. Please provide a valid index."));
    }
};
main();
