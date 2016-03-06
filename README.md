##A basic expense tracker app

###How to run
1. Clone the repo
2. Execute:

    ```
    docker-compose build
    docker-compose up -d
    ```
3. Goto <docker container's IP>:3000 on browser

###Sync files between the host and container

```
docker cp src/ <container_name>:/
```

####How to get container name

```
docker ps --format "{{.Names}}"  | grep expenseapp_web
```