# REST API - PostgreSQL Integration
This project implements a REST API for managing contacts using PostgreSQL with Sequelize ORM.

## CRUD Operations (Sequelize)
- Replaces file-based operations with Sequelize methods:
  - **`listContacts`**: Get all contacts.
  - **`getContactById`**: Get a contact by ID.
  - **`removeContact`**: Delete a contact.
  - **`addContact`**: Add a new contact.
  - **`updateContact`**: Update an existing contact.

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/goit-node-rest-api.git
cd goit-node-rest-api
```
### 2. Install dependencies:

```bash
npm install
```

### 3. Set up PostgreSQL and update .env file with credentials.

### 4. Start the app:
```bash
npm start
```
