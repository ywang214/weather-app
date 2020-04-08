<b>A weather web application using React, SpringBoot</b>

## Backend Local Development
- Put your dark sky API key into springboot-backend/application.properties
- run ./gradlew bootRun
- Open the browser and enter http://localhost:8080/swagger-ui.html to see the API documentation.
## Frontend Local Development
- Intall nginx locally. For mac, run 
```brew install nginx
cd react-frontend
run nginx -c "$PWD/nginx.conf"
npm install
npm start
```
- Open the browser and enter https://localhost to see the UI interface. 
- Run nginx -s stop to stop nginx when you are done.

