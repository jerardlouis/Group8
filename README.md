Book Busters
To use this repository, you must follow these steps:

In your terminal run git clone https://github.com/jerardlouis/Group8.git
Requirements
Install npm by running npm install
Install all the program dependencies by running pip install -r requirements.txt
Run echo "DANGEROUSLY_DISABLE_HOST_CHECK=true" > .env.development.local in the project directory
Setting up Emailjs
Sign up by visiting https://www.emailjs.com/
Click on Email Services and create a new Gmail Service
Click on your newly created Email Service and copy the Service ID and paste it into the .env file where it says REACT_APP_SERVICE_ID=
Click on Email Templates and create a new email template
Click on Integration copy the User ID and paste it in the .env file where it says REACT_APP_USER_ID=
Running the Program
Switch to the project directory
Run the command python app.py
Open a new terminal and switch to the project directory
While the python app.py is running in the old terminal run npm run start in the second terminal
Click on the preview button and view your newly created Book Busters App!
Deploying to Heroku
Run the command heroku login -i
Enter email and password
Create a Heroku app by running the following command heroku create --buildpack heroku/python
Add the nodejs buildpack by running heroku buildpacks:add --index 1 heroku/nodejs
Navigate to your app settings on Heroku and find ‘Config Vars’ section and click on Reveal Config Vars
Copy and paste all variables and values from the .env file
Push to heroku by running git push heroku main
