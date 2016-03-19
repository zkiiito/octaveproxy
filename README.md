# octaveproxy
Proxy for handling https in Octave on Windows.

# usage
### 1. [install node.js](https://nodejs.org/en/)

### 2. install octaveproxy
```
git clone git@github.com:zkiiito/octaveproxy.git
cd octaveproxy
node index.js
```

### 3. change your urls in your Octave scripts, for example
```
submissionUrl = 'https://www-origin.coursera.org/api/onDemandProgrammingImmediateFormSubmissions.v1';
% becomes
submissionUrl = 'http://localhost:3000/www-origin.coursera.org/api/onDemandProgrammingImmediateFormSubmissions.v1';
```

### 4. run your scripts

# license
MIT