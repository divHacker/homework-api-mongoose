# homework-api-mongoose

Start Mongodb
```
$ mongod --dbpath ./data
```

Start App
```
$ nodemon index.js
```

POST -> http://domain/api/homework
GET -> http://domain/api/homework

JSON
```
{
	ip_addr: String,
	port: number,
	name: String
}
```