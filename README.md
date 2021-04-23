# Book Busters
Heroku link : https://morning-savannah-63873.herokuapp.com/
To use this repository, you must follow these steps: 

## Requirements
1. Install npm by running npm install
2. Install all the program dependencies by running pip install -r requirements.txt
3. Run  `echo "DANGEROUSLY_DISABLE_HOST_CHECK=true" > .env.development.local`  in the project directory

## Setting up Emailjs 
1. Sign up by visiting https://www.emailjs.com/
2. Click on Email Services and create a new Gmail Service
3. Click on your newly created Email Service and copy the Service ID and paste it into the .env file where it says REACT_APP_SERVICE_ID=
4. Click on Email Templates and create a new email template
5. Click on Integration copy the User ID and paste it in the .env file where it says REACT_APP_USER_ID=

## Running the Program  
1. Switch to the project directory
2. Run the command python app.py
3. Open a new terminal and switch to the project directory
4. While the python app.py is running in the old terminal run npm run start in the second terminal
5. Click on the preview button and view your newly created Book Busters App!

## Deploying to Heroku

1. Run the command heroku login -i
2. Enter email and password
3. Create a Heroku app by running the following command heroku create --buildpack heroku/python
4. Add the nodejs buildpack by running heroku buildpacks:add --index 1 heroku/nodejs
5. Navigate to your app settings on Heroku and find 'Config Vars' section and click on Reveal Config Vars
6. Copy and paste all variables and values from the .env file 
7. Push to heroku by running git push heroku main
