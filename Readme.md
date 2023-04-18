```sh
npm i
```
```sh
npm start
```
or
```sh
yarn install
```
```sh
yarn start
```

---
For useing docker container with mongoDB use:
```sh
docker compose up
```
Also you can check simple web part
```sh
http://localhost:8080
```
---
#### Web server (API) listening on
```sh
http://localhost:5000
```

In requests it is necessary to transfer the token received after registration / authorization
header :
```json
{
  "authorization": "<authToken>"
}
```


# [All Models](#models)

### SignUp request:

POST /auth/signup

body :
```json
{
    "email": "email" //required
    "password": "password" //required
    "name": "name"
}
```
Response example: [User](#user)
```json
{
    "success": true,
    "data": {
        "user": User,
        "token": "<token>"
    }
}
```
---

### SignIn request:

POST /auth/signin

body :
```json
{
    "email": "email" //required
	"password": "password" //required
}
```
Response example: [User](#user)
```json
{
    "success": true,
    "data": {
        "user": User,
      "token": "<token>"
    }
}
```
---

### Auth user requset: 
GET /users/current

Response example: [User](#user)
```json
{
    "success": true,
    "data": {
        "user": User,
        "token": "<token>"
    }
}
```
---

### User requsets for autocomplete:

GET /users

body :
```json
{
    "name": "name"
}
```
Response example: [[Users]](#user)
```json
{
    "success": true,
    "data": {
        "users": [User]
    }
}
```
---

### Board requsets:
1) createBoard

POST /boards
       
body :
```json
{
   "title": "Board title"
}
```
Response example: [Board](#board)
```json
{
   "success": true,
   "data": {
       "board": Board
   }
}
```

2) getBoards

GET /boards

Response example: [Board](#board)
```json
{
    "success": true,
    "data": {
        "admin": "[Board]",
        "developer": "[Board]",
        "viewer": "[Board]"
    }
}
```

3) Get by board id

GET /boards/**boardId**

Response example: [Board](#board)
```json
{
    "success": true,
    "data": Board
}
```

4) Update board

PUT /boards/**boardId**

body :
```json
{
    "title": "New title"
}
```
Response example: [Board](#board)
```json
{
    "success": true,
    "data": Board
}
```

5) detele board

DELETE /boards/**boardId**

Response example:
```json
{
    "success": true,
    "data": {
        "status": true,
        "_id": "<boardId>"
    }
}
```

6) Add or delte user on boadr

PATCH /boards/**boardId**

body :
```json
{
    "userId": "<userId>",
    "role": "<role>" // 'developer' || 'viewer'    
}
```
Response example: [Board](#board)
```json
{
    "success": true,
    "data": Board
}

```
---

### Column requests

1) Create column

POST /columns/**boardId**

body :
``` json
{
    "title": "Column title"
}
```
Response example: [Column](#column)
```json
{
    "success": true,
    "data": Column
}
```

2) Update column

PUT /columns/**columnId**

body :
```json
{
    "title": "New title"
}
```
Response example: [Column](#column)
```json
{
    "success": true,
    "data": Column
}
```

3) Delete column

DELETE /columns/**columnId**

Response example:
```json
{
    "success": true,
    "data": {
        "status": true,
        "_id": "<columnId>"
    }
}
```
---

### Task requests
1) Create task

POST /tasks/**columnId**

body :
```json
{
    "task": "Task"
}
```
Response example: [Task](#task)
```json
{
    "success": true,
    "data": Task
}
```

2) Update task

PUT /tasks/**:taskId**

body :
```json
{
    "task": "New name task"
}
```
Response example: [Task](#task)
```json
{
    "success": true,
    "data": Task
}
```
    
3) Delete task

DELETE /tasks/**taskId**

Response example:
```json
{
    "success": true,
    "data": {
        "status": true,
        "id": "<taskId>"
    }
}

```
    
4) Update users on task

PATCH /tasks/**taskId**

body :
``` json
{
    "userId": "<userId>"
}
```
Response example: [Task](#task)
```json
{
    "success": true,
    "data": Task
}
```

5) Change tasks status

PATCH /tasks/status/**:taskId**

Possible options 
```json
["ready to develop", "develop", "on hold", "test", "done"]
```

body :
```json
{
    "status": "New tasks status"
}
```
Response example: [Task](#task)
```json
{
    "success": true,
    "data": Task
}
```

6) Change tasks mark

PATCH /tasks/marks/**:taskId**

Possible options 
```json
["green", "yellow", "orange", "red", "purple", "blue"]
```

body :
```json
{
    "mark": "markName"
}
```
Response example: [Task](#task)
```json
{
    "success": true,
    "data": Task
}
```
---

### DND requests
1) DND task

PATCH /tasks

body :
```json
{
   "boardId": "<boardId>",
   "destination": {
      "droppableId": "<columnId>",
      "index": "<indexInColumn>"
   },
   "source": {
      "droppableId": "<columnId>",
      "index": "<indexInColumn>"
   },
  "taskId": "taskId"
}
```
Response example: [Board](#board)
```json
{
    "success": true,
    "data": Board
}
```

### Comment requests
1) Create comment

POST /comments/**taskId**

body :
```json
{
    "comment": "comment text",  //required
    "email": "<user email>",  //required
    "name": "<user name>"  //required
}
```
Response example: [Comment](#comment)
```json
{
    "success": true,
    "data": {
        "comment": Comment
    }
}
```

2) Delete comment

DELETE /comments/**commentId**

body :
```json
{
    "taskId": "<taskId>"
}
```
Response example:
```json
{
    "success": true,
    "data": {
        "status": true,
        "id": "<commentId>"
    }
}

```
---

# Models

## User
```json
{
    "_id": "<userId>",
    "name": "<name>",
    "email": "<email>",
    "createdAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",
    "updatedAt": "XXXX-XX-XXTXX:XX:XX.XXXZ"
}
```

## Board
[User](#user)  
[Column](#column)

```json
{  
    "_id": "<boardId>",  
    "title": "Title board",  
    "users": User,  
    "columns": [Column],  
    "createdAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",  
    "updatedAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",  
    "admin": User,  
    "developer": [User],  
    "viewer": [User],  
}
```

## Column
[Task](#task)
```json
{
    "_id": "<columnId>",
    "title": "Column title",
    "tasks": [Task],
    "createdAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",
    "updatedAt": "XXXX-XX-XXTXX:XX:XX.XXXZ"
    }
```

## Task
[User](#user)  
```json
{
    "_id": "<taskId>",
    "task": "Task",
    "users": [User],
    "comments": [Comment],
    "marks": ["marks"],
    "status": "status",
    "logs": [{
      "actions": "action",
      "date": "date"
    }],
    "createdAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",
    "updatedAt": "XXXX-XX-XXTXX:XX:XX.XXXZ"
}
```

## Comment
```json
{
    "_id": "<commentId>",
    "email": "<user email>",
    "name": "<user name>",
    "comment": "<comment text>",
    "createdAt": "XXXX-XX-XXTXX:XX:XX.XXXZ",
    "updatedAt": "XXXX-XX-XXTXX:XX:XX.XXXZ"
}
```
