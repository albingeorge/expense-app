##A basic expense tracker app

###How to run
1. Clone the repo
2. Execute:

    ```
    docker build --rm=false -t expense .
    docker run -d -p 3000:3000 expense
    ```
3. Goto <docker container's IP>:3000 on browser