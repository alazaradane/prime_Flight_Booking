# Authentication and Authorization: 
## Authentication: 
- It is a process using which we can uniquely identify users on our application. This process tells us about who the user is. The general signUp/ login/logout flow is used to authenticate a user.

## Authorization: 
- It is a process which we can identify the capabilities of a user, what a user can do on our application.

## How to do Authentication: 
- 1. Mobile No.(otp/link)
- 2. OmniAuth(Oauth) -> gmail, fb, github, google.
- 3. web otp(new ).
- 4. Token based authentication.(using in this project)(Building from scratch)(JWT)
(passport is a package which provides functionalities for authentication.)

## Token Based Authentication: 

1. Client login to Server using email, password. 
- Server checks for that mail in the database, if present then compares the password with the password store in db else do not allow for login. IF user is able to login then a unique token is generated and sent to the client as response.
(for every session, new token is generated.)
The token is stored on the client's browser.(Server does not store this token.)

- Now for the current session in which the token is generated , when the user access different routes, server verifies the token and authenticates the user.

### JWT(json web token): 
- To generate jwt token , we actually use the client credentials.
- So server does not store the token for verification, it uses client credentials for verification.
- There will be expiry time for token, after which token will be expired and we have to login again.
(Cookies are not the safe place for storing the token).