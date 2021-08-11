# Start Project

## Clone and install

``` txt
git clone https://github.com/joselmq/OConstructions.git
cd OConstructions
yarn
```

### In case of Yarn error

``` txt
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

## Add ".env.local" file with Firebase keys

### Add Project

![](readme_imgs/Add-Project.png)

### Add a name

![](readme_imgs/Add-a-name.png)

### Create Project

![](readme_imgs/Create-Project.png)

### Choose Web

![](readme_imgs/Web.png)

### Register app

![](readme_imgs/Register-app.png)

### Copy Data

![](readme_imgs/Copy-Data.png)

### Paste it on `.env.local` file

![](readme_imgs/Env-file.png)

### Example (replace data after "=")

``` txt
REACT_APP_FIREBASE_API_KEY=AIzaSyCz6b5zULY_5kRV18fe4iFrtJ1IQo0em80
REACT_APP_FIREBASE_AUTH_DOMAIN=test-be3a2.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=test-be3a2
REACT_APP_FIREBASE_STORAGE_BUCKET=test-be3a2.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=674817952261
REACT_APP_FIREBASE_APP_ID=1:674817952261:web:249c073427fbd0b1e5ea6c
```

### To use register/login enable: autentication -> Sign-in method -> Email/Password

![](readme_imgs/Auth.png)

### To install firebase
``` txt
yarn add firebase
```

### Finally write `yarn start` in the directory to start the project 
