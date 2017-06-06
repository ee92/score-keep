import {Meteor} from 'meteor/meteor';
import {Players} from '../imports/api/players.js';

Meteor.startup(function(){

});

let house = {
  bedrooms: 3,
  bathrooms: 2
}

let year = 1995

let myhouse = {
  ...house,
  year,
  bathrooms: 1.5,
  flooring: "carpet"
}

console.log(myhouse)
