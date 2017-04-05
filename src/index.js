import React from 'react';
import ReactDOM from 'react-dom';

require('./index.scss');


import App from "./cmps/app.js";

/* 

Objectives:
  
  Overall: display a table with campers from FreeCodeCamp stuff. Display their nick, avatar, brownies this month and
  brownies at all time.

  1. Getting a data from sources:

    last 30 days brownies earned (100 campers):

        https://fcctop100.herokuapp.com/api/fccusers/top/recent

    total brownies (100 campers):

        https://fcctop100.herokuapp.com/api/fccusers/top/alltime

  2. Sorting 

      You can choose to sort between total brownies (ASC and DESC) and 30 days brownies


  3. Nice and responsive
  


*/

ReactDOM.render(<App />, document.querySelector('#app'));