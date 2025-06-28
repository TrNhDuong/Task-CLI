# Task Tracker

## Project Details

**Task Tracker** is a simple command-line application for managing your tasks. This project helps you keep track of what you need to do, what you're currently working on, and what you've already completed.

It is part of the **"Backend Project"** track from [roadmap.sh](https://roadmap.sh/projects/task-tracker), designed as a beginner-level project.
#

## Features
The application runs from the command line, accepts user actions and inputs as arguments, and stores tasks in a JSON file.

Users can:

- Add, update, and delete tasks
- Mark tasks as **in progress** or **done**
- List **all** tasks
- List tasks that are:
  - **Done**
  - **To-do** (not done)
  - **In progress**

## Download
```
gitclone git@github.com:TrNhDuong/Task-CLI.git
```

## Usage

Below are the command examples for using the CLI tool:

### Adding a New Task

```bash
task-cli add "Buy groceries"
```

### Deleting a task

```bash
task-cli delete 1
```
with 1 is id of task

### Updating a task

```bash
task-cli update 1 "Bye bye"
```

### Listing tasks

```bash
# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list to-do
task-cli list done
task-cli list in-progress
```

### Marking a task as in progress or done
```bash
task-cli mark-in-progress 1
task-cli mark-done 1
```



