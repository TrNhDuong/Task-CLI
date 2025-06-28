# Task Tracker

## Project Details

**Task Tracker** is a simple command-line application for managing your tasks. This project helps you keep track of what you need to do, what you're currently working on, and what you've already completed.

It is part of the **"Backend Project"** track from [roadmap.sh](https://roadmap.sh), designed as a beginner-level project.

### Time of Implementation: **23/06/2025 – 29/06/2025**

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

## Usage

Below are the command examples for using the CLI tool:

### Adding a New Task

#### Input
```bash
task-cli add "Buy groceries"
```
#### Output
```bash
Task added successfully (ID: 1)
```

### Deleting a task

#### Input
```bash
task-cli delete 1
```
with 1 is id of task

