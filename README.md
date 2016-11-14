# Put asynchronous action into middlewares

Redux middlewares are killing features! You don't need to write these asynchronous stuff into the smart components anymore. Instead, put these logic into the middlwares (it might be a Promise).

Middlewares are like hooks between actions and reducers. Middlewares intercept the actions, do something you want, and then redirect them back to the original reducers.

### Getting Started


```
	> npm i
	> npm start
```
