This package is sample package which will used to find out CRICKET World Cup 2019 squads captain by passing ISO country code

Pass the ISO country code @findCaptain method to find out captain of world cup 2019 squads

It will return object on success or null on failure if invalid argument pass to the method 

USE below ISO CODE to get Captains DATA

'IND','AFG','AUS', 'BNG','ENG','NZL','PAK','ZAF','LKA', 'WIND'

EX.

var  dataModel = require('./lib/index');
console.log(dataModel.findCaptain('IND').c);

It will out put indian team captain name.

This in beta stage.