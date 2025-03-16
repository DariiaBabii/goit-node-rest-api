# REST API - File-Based Contacts Management

This project implements a basic file-based contacts management system, using Node.js. It supports creating, listing, retrieving, updating, and deleting contacts from a JSON file.

## Features

### 1. File Handling
- Uses **`fs/promises`** for asynchronous file system operations.
- Uses **`path`** module to correctly manage file paths.

### 2. CRUD Operations (File-based)
- Replaces database operations with file-based CRUD:
  - **`listContacts`**: Retrieves all contacts from the file.
  - **`getContactById`**: Retrieves a contact by ID.
  - **`removeContact`**: Deletes a contact by ID.
  - **`addContact`**: Adds a new contact to the file.

### 3. Function `invokeAction`
- Uses **`invokeAction()`** to trigger CRUD operations based on the user’s input.

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/DariiaBabii/goit-node-rest-api.git
cd goit-node-rest-api
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the app
```bash
npm start
```
