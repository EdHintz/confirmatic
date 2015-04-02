confirmatic
========

>  Automatic appointment confirmations using SMS and the Bandwidth Application Platform.

[Insert Build status links here when set up]

**Current Status: Not usable, still in set up phase.
**

## Overview
Confirmatic is a service that helps you verify appointments with customers via SMS.  

Check back later.  
## Prerequisites

* Bandwidth account

* At least one Bandwidth phone number allocated to your account

Set the following environment variables:

    BW_USER_ID - Bandwidth user id
    BW_TOKEN - Bandwidth token
    BW_SECRET - Bandwidth secret

## Running
In order to receive SMS replies, Confirmatic needs to be reachable by the Bandwidth Application Server on the public internet.  Therefore, you will need to deploy it onto a publicly accessible machine to use full functionality.  Sending SMS can be done locally provided the local machine can reach the Bandwidth Application.
    
    $ npm install
    $ npm start


## Deploying

###Heroku
    $ git clone https://github.com/EdHintz/confirmatic.git
    $ git init
    $ git add -A
    $ heroku create
    $ git push heroku master
    $ heroku config:set BW_USER_ID='u-your_user_id_found_in_account_tab'
    $ heroku config:set BW_TOKEN='t-your_token_found_in_account_tab'
    $ heroku config:set BW_SECRET='your_secret_found_in_account_tab'
    
    

##Testing

Test checks code style, best practices and runs automated tests.  Testing can be done locally.

    $ npm install
    $ npm test



