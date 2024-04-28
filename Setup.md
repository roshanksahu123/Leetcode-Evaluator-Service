## How to setup a new typescript + Express Project
1.
```
npm init -y
```
2.
```
npm install -D typescript 
```
3.
```
tsc --init
```
4. 
```
Add the following scripts in the package.json file
"scripts": {
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill others \"npm run watch\" \"npm start\""
  }
```
Note: Make relevant config changes in tsconfig.json file 
5.
```
npm run dev
```