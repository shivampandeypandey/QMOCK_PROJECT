# QMOCK_PROJECT
# Q-Homes

> Realestate website built with the MERN stack & Redux.

### Variables

Add a ./Utils/config file and add the following


const config = {

    secret: "",
    frontendURL: "http://localhost:3000",
    mongoDB: "",
    AWS_ACCESS_KEY_ID: "",
    AWS_SECRET_ACCESS_KEY: "",
    AWS_REGION: "",
    AWS_BUCKET_NAME: "",
};
module.exports = config;


### Install Dependencies (frontend & backend)


cd frontend
npm install
cd backend
npm install


###  Run


# Run frontend
cd frontend
npm start

# Run backend only
cd backend
npm start
