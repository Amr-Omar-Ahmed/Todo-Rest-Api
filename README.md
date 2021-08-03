# Express REST API

To implement this project, you need to implement a simple TODO application using EExpress framework. Search for all comments starting with the `TODO:` in the code to find the placeholders that you need to implement.

# Functionality of the application
This application will allow creating/removing/updating/fetching TODO items. 

# TODO items

The application should store TODO items, and each TODO item contains the following fields:

* `_id` (string) - a unique id for an item
* `text` (string) - name of a TODO item (e.g. "Change a light bulb")
* `completed` (boolean) - true if an item was completed, false otherwise
* `completedAt` (string) - date and time by which an item is completed
* `attachmentUrl` (string) (optional) - a URL pointing to an image attached to a TODO item

You might also store an id of a user who created a TODO item.

## Instalation

```
npm install

npm start
```

## HTTP Verbs

Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:

| HTTP METHOD     | POST            | GET                      | PATCH       | DELETE      |
| --------------- | --------------- | ------------------------ | ----------- | ----------- |
| /todos          | Create new todo | List all todos from user | -           | -           |
| /todos/:id      | -               | List specific todo       | Update todo | Delete todo |

## Error handling

Error handling acording with REST API [standards](http://www.restapitutorial.com/httpstatuscodes.html)

| Code  | Description                                                                                         |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `200` | The request has succeeded                                                                           |
| `400` | The request could not be understood by the server due to malformed syntax                           |
| `401` | The request requires user authentication. The response must include a WWW-Authenticate header field |
| `404` | The server has not found anything matching the Request-URI                                          |

### POST /todos

Request body:
```json
{
  "text": "Sample todo",
  "attachmentUrl":"url for image",
}
```

### GET /todos/:id

Response body:
```json
{
  "todo": {
    "_id": "5aa587d1cfce06ecbef0a7ae",
    "text": "Sample Todo2",
    "completedAt": null,
    "completed": false
  }
}
```