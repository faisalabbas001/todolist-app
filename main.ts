#! /usr/bin/env node
import inquirer from "inquirer";
import Chalk from "chalk"
import Choice from "inquirer/lib/objects/choice.js";
let todolist:string[] = [];
let condition = true;
let main=async()=>{
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-list", "Exit"],
            }
        ]);
        if(option.choice==="Add Task"){
            await addtask()
        }
        else if(option.choice==="View Todo-list"){
            await viewTask()
        }
        else if(option.choice==="Exit"){
            condition=false
        }
        else if(option.choice==="Delete Task"){
            await deleteTask()
        }
    }
}


//   function to add to task in the list //
let addtask=async()=>{
    let newtask=await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new Task"
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} : added succesfully in Todolist-app`)
}
//  function to view all the todo list task

let viewTask=()=>{
  console.log("\n  Your Todolist:\n ");
  todolist.forEach((item,index)=>{
    console.log(`${index}:${item}`)
  })
}


// function to delete the todo list task 

let deleteTask= async()=>{
    await viewTask()
let taskindex=await inquirer.prompt([{
    name:"index",
    type:"number",
    message:"Enter 'the index no', of the task you want to delete "
}]);
let deletedTask=todolist.splice(taskindex.index,1);
 console.log(`\n ${deleteTask} task has been deleted successfully from todo-list`)
}
main()