# An expense tracker app

## Setup
1. Clone the repo
2. Execute:

    ```
    docker-compose build
    docker-compose up -d
    ```
3. Goto <docker container's IP>:3000/api on browser

### Sync files between the host and container

```
docker cp src/ <container_name>:/api
```

#### How to get container name

```
docker ps --format "{{.Names}}"  | grep expenseapp_web
```


## APIs


#### Add user

  API: `/api/user/add`

  Type: POST

  Body:

  ```
  {
    "name": "Albin",
    "email": "albin@gmail.com"
  }
  ```

#### Get users

  API: `/api/user/<id>`

  Type: GET

#### List users

  API: `/api/user/list`

  Type: GET

### Add expense

 API: `/api/expense/add`

 Type: POST
