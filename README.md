# AngularClient

Uses Angular 18 client .
The backend service is present at https://github.com/SabariGanesh-K/unstoppable-service
Certain set of seats are prebooked  to illustrate the seat searching query

## Development server

- Uses local development service at port 8080 to interact
- DB is switched to local DB dockerized through the service 

## Development server
- Reachable at http://booking-v1-sabari.s3-website.eu-north-1.amazonaws.com
- Uses production   service deployed at AWS Elastic Beanstalk
- DB is switched to production  DB present at AWS RDS for postgresql [ Can use aurora as well - but no money :( ] 

## Instruction to execute
## Environment setup
- Refer to src/app/sample_enviroment
- Rename it to src/app/enviroment
- There are 2 files:
    - environment.ts = setup for development
    - environment.prod.ts = setup for production

## Development Client
- Ensure to setup the service backend using the api repo listed above and run it at port 8080
- Install all dpendencies and serve the angular client [default serve is set to development]
```bash
npm install 
npx ng serve
```` 

## Development Client
- Ensure to setup the service backend using the api repo listed above and run it at port 8080
- Install all dpendencies and serve the angular client [default serve is set to development]
```bash
npm install 
npx ng serve
```` 

## Production Client
- Ensure to setup the service backend with AWS service as mentioned in production enviornment in repo above or simply use local api
- Install all dpendencies and serve the angular client in production config
```bash
npm install 
npx ng serve:configuration
```` 


