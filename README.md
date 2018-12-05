
# 🍕 SELECTlunch 🥗

## Initial Requirements
### Requirements

- [ ] Simple web app with a node server and a database
- [ ] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [ ] Database hosted on Heroku, or locally
- [ ] Build script for your database
- [ ] Security concerns appropriately considered (you must protect against script injections!)
- [ ] Content dynamic, but DOM manipulation kept to a minimum
- [ ] Mobile-first design
- [ ] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
- [ ] test your server routes with supertest
- [ ] test your pure functions both server and client side
- [ ] set up a test database so that you can test your database queries

## Installation

```npm install```

## Dependencies
- **Tape** for testing
- **Tap-spec** for test output formatting
- **Nodemon** for running a server in development
- **Supertest** for testing requests

## Known bugs/issues

## Our Process

### Wednesday 

- After coming to a decision about what we wanted to create - a tool to help organize community lunches at Space4 - we spent some time whiteboarding and talking in order to plan how we would start our project:

![](https://i.imgur.com/AP6UUFm.jpg)

![](https://i.imgur.com/w39Tfxr.jpg)


#### Plan of attack! 💪
- [x] 1. Create Github repo ✅
- [x] 2. Create overarching file structure (see below) ✅
- [ ] 3. Create database table structure
- [ ] 4. 🎨 Break time - Colour scheme 🎨
- [ ] 5. Create HTML basic structure
- [ ] 6. Create basic server
    - [ ] server.js
    - [ ] router.js
        - [ ] root
        - [ ] public
        - [ ] getData
        - [ ] postData
    - [ ] handler.js
- [ ] 7. On load 
    - [ ] Get request for lunch data for dropdown
        - (to be broken down further)
    - [ ] Get request for booked data to be put into list
        - (to be broken down further)
- [ ] 8. On submit button
    - [ ] Post request to put input into database
        - (to be broken down further)
    - [ ] Get request for new data to be put into list
        - (to be broken down further)

### File structure
![](https://i.imgur.com/rlaLJvN.png)
