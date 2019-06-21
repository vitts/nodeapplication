/*
 * Example demonstrated  
 * Pass the ISO country code @findCaptain method to find out captain of world cup 2019 squads.
 * It will return object on success or null on failure if invalid argument pass to the method 
 * USE below ISO CODE to get Captains DATA
 * 'IND','AFG','AUS', 'BNG','ENG','NZL','PAK','ZAF','LKA', 'WIND', 
 */

var  dataModel = require('./lib/index');
console.log(dataModel.findCaptain('IND',1999));  