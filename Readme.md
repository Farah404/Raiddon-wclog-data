[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Farah404/Raiddon-bnet-data/blob/master/LICENSE)
[![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://www.docker.com/)
[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://i.pinimg.com/originals/21/f0/92/21f0929a92ebe840eb932af199fb3260.gif)
<br />
[![My Skills](https://skills.thijs.gg/icons?i=nodejs)](https://skills.thijs.gg)
[![My Skills](https://skills.thijs.gg/icons?i=python)](https://skills.thijs.gg)
[![My Skills](https://skills.thijs.gg/icons?i=js)](https://skills.thijs.gg)
[![My Skills](https://skills.thijs.gg/icons?i=docker)](https://skills.thijs.gg)
[![My Skills](https://skills.thijs.gg/icons?i=git)](https://skills.thijs.gg)
[![My Skills](https://skills.thijs.gg/icons?i=mongodb)](https://skills.thijs.gg)

![RAIDDON](https://user-images.githubusercontent.com/96427557/201051613-6f8d86f6-e411-4ef5-a9a8-39c9b4522b0c.png)

# Warcraft Log API using python and oAUTH

## Get your clientId and clientSecret from [Warcraft Logs website](https://classic.warcraftlogs.com/)

### Warcraft Logs uses OAuth 2.0 for API authentication. 
```
OAuth allows clients to request and then use an access token to authenticate API requests.
When using a library, developers typically need four items to get started: 
  > client_id, 
  > client_secret, 
  > authorize_uri , and 
  > token_uri.
  ```
  ```
The first step in using OAuth is getting a client_id and client_secret by creating a new client.

    > Log in to Warcraft Logs.
    > Go to the client management page and click Create Client.
    > Enter a client name. The client name is used to identify the client in the list view.
    > Enter any redirect URIs needed. 
    > Click Create. 
```

The Authorization URI is: https://www.warcraftlogs.com/oauth/authorize

The Token URI is: https://www.warcraftlogs.com/oauth/token 

## Client Credentials Flow
To request access tokens, an application must make a POST request with the following multipart form data to the token URI: grant_type=client_credentials 
The application must pass basic HTTP auth credentials using the client_id as the user and the client_secret as the password. 
```
curl -u {client_id}:{client_secret} -d grant_type=client_credentials https://www.warcraftlogs.com/oauth/token
```
After an application retrieves an access token, it provides that token when making requests to API resources. This is done via an authorization header:
```
curl --header "Authorization: Bearer <access_token>" <GRAPHQL API URL>
```
## How to use wowlog-data



### Export your clientId and clientSecret to Shell environment using the following two commands
```
echo "export userId='YOUR USER ID'" >> ~/.zshrc
```
```
echo "export userSECRET='YOUR USER SECRET'" >> ~/.zshrc
```
### To verify that the variables are saved
```echo $userId```
```echo secretId```

### Run the app
```python app.py```

The app will fetch the access token, store it in a hidden json file and then fetch it in order to send a query to warcraft logs API.
You will need to [install python](https://www.python.org/downloads/) and add it to your environmental path 

### Example retrived data
```[{'id': 10, 'name': 'Rage Winterchill', 'startTime': 17142991, 'endTime': 17315564}, 
{'id': 19, 'name': 'Anetheron', 'startTime': 18002072, 'endTime': 18153347}, 
{'id': 28, 'name': "Kaz'rogal", 'startTime': 19310047, 'endTime': 19456852}, 
{'id': 38, 'name': 'Azgalor', 'startTime': 20412751, 'endTime': 20642786}, 
{'id': 48, 'name': 'Azgalor', 'startTime': 21755912, 'endTime': 21950501}, 
{'id': 49, 'name': 'Archimonde', 'startTime': 22511684, 'endTime': 22597698}, 
{'id': 50, 'name': 'Archimonde', 'startTime': 23006011, 'endTime': 23112268}, 
{'id': 51, 'name': 'Archimonde', 'startTime': 23565082, 'endTime': 23766114}, 
{'id': 52, 'name': 'Archimonde', 'startTime': 24402390, 'endTime': 24667629}]
```

# Heroku Deployment

[Raiddon WarcraftLogs API](https://raiddon-wclog-api.herokuapp.com/html/index.html)

## Viewing Detailed Documentation

GraphQL uses schemas that document everything, so if you use a client like Insomnia, you can fetch the schemas and start browsing the API documentation in the client itself.

You can also view the schema in your browser by clicking [here](https://www.warcraftlogs.com/v2-api-docs/warcraft/).

## Legal
This project is not authored, affiliated or endorsed in any way by WarcraftLogs.<br/>
If you have any support questions, please reach out to support team at support@warcraftlogs.com.
