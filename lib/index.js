const getCaptainsData = require('./dataSource');

/**
 * @param {string} isocode
 * @returns {object | null}
 * @public
 */
function findCaptain(isocode)
{
    var cnt = getCaptainsData.length;
    var captain=null;
    if(cnt > 0)
    {
        if(checkIsValidIso(isocode))
        {
           let captainObj = getCaptainsData.find(y => y.iso_cc === isocode);
           captain = captainObj;
        }
    }
    else
    {
        console.log("Empty Data");
    }
    
    return captain;
};

/**
 * @param {string} code
 * @returns {boolean}
 * @private
 */
function  checkIsValidIso(code)
{
    let obj  = getCaptainsData.find(x => x.iso_cc === code);
    if(!obj)
    {
      console.log(`Invalid Country Code ${code}`); 
      return false;
    }
    else
    {
       return true;
    }
}

exports.findCaptain = findCaptain;