Tech Stack Used:-
Node.js
Express.js
MongoDB Atlas


Work Flow:-
There is no frontend. So, creating Data is not possible. MongoDb connect information is remained blank but in case if any frontend is there then Company can fill information. Files Explanation:-

server.js:-
It creates a Node server. With available port or on port 3000.

app.js:-
It is used to set up mongodb and to solve CROS error. It routes incoming requests to there places.

Assumption of Work flow for frontend:-
There is a frontend which has a home page which displays all the companies available. Frontend requests for all compaines and request is proceed to compaines.js(exist) and from there list of all companies sent to frontend as JSON file. There is a Login and SignUp option on the Frontend Page. And If User clicks on Login, user has to fill a form and the data is sent to backend and there it is saved in Mongo database. If user clicks on signup button after filling all the details data is sent to backend and there it is first checked if user is already exist or not. If exist then Send an error message. There is an option to create company where owner has to filled details to register Company and details is sent to backend and before that owner must be authorised it checked by backend(auth.js checks this). User can apply to company by filling details and if user already registered to another company then request can't prossesed otherwise it successfully registered. And there would seperate page created for each company.

Models folder:-
Data schema is mentioned in models folder for employee and Companies.

Router folder:-
Process request to controllers folder where all the process is being done like saving data, updating info in database.

Additional tools added:-
Password is hashed using bcrypt so that information of users is secure.
Can update description of companies like hiring or not.
 

