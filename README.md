This package is used to find out Cricket World Cup skipper by passing ISO country code and CWC year

Pass the ISO country code as well as CWC year @findCaptain method to find out skipper.

It will return object on success or null on failure if invalid argument pass to the method 

USE below ISO CODE & CWC held years to find out Skipper.

IND,AFG,AUS,BNG,ENG,NZL,PAK,ZAF,LKA,WIND,KEN,NLD,IRL,ZWE,UAE,GBR,CAN,BMU,NAD

2019,2015,2011,2007,2003,1999,1996,1992,1987,1983,1979,1975

EX.

var  dataModel = require('./lib/index');
console.log(dataModel.findCaptain('IND',1975).c);

It will out put indian team captain name.
