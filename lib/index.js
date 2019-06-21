const getCaptainsData = require('./dataSource');

/**
 * @param {string} isocode
 * @param {int}    year
 * @returns {object | null}
 * @public
 */
function findCaptain(isocode, year)
{
    var cnt = getCaptainsData.length;
    var captain = null;
    if (cnt > 0)
    {
        getCwcHeldYrs(); return false;
        
        if (!year || !isocode)
        {
            console.log(`Empty Country Code Or CWC Year!`);
        } else
        {
            //getCwcYears();
            let captainObj = getCaptainsData.find(y => y.iso_cc === isocode && y.year === year);
            if (!captainObj) // ISO code check
            {
                console.log(`Invalid Country Code ${isocode} OR CWC Year ${year}`);
            } else
            {
                captain = captainObj;
            }
        }
    } else
    {
        console.log("Empty Data");
    }

    return captain;
}
;

/**
 * @returns {Array|nm$_index.getCwcYears.cwcyrs|getCwcYears.cwcyrs}
 */

function getCwcYears()
{
    var startYear = 1975;
    var cwcyrs = [startYear];
    var cwc_held_freq = 4;
    var date = new Date();
    var cnt_cwc_held = (date.getFullYear() - startYear) / cwc_held_freq;
    console.log("How many time cwc held till date " + cnt_cwc_held);
    for (var i = 0; i < cnt_cwc_held; i++)
    {
        startYear = startYear + 4;
        cwcyrs.push(startYear);
    }
    console.log(cwcyrs.toString());
    return cwcyrs;
}
/**
 * @returns {Array|nm$_index.getCwcIsoCc.uniquearr|getCwcIsoCc.uniquearr}
 */
function getCwcIsoCc()
{
    var uniquearr = [];
    getCaptainsData.forEach(function (x) {
        if (!uniquearr.find(y => y === x.iso_cc))
        {
            uniquearr.push(x.iso_cc);
        }
    });

    console.log(uniquearr.toString());
    return uniquearr;
}
/**
 * @returns {Array|nm$_index.getCwcHeldYrs.uniquearr|getCwcHeldYrs.uniquearr}
 */
function getCwcHeldYrs()
{
    var uniquearr = [];
    getCaptainsData.forEach(function (x) {
        if (!uniquearr.find(y => y === x.year))
        {
            uniquearr.push(x.year);
        }
    });

    console.log(uniquearr.toString());
    return uniquearr;
}

exports.findCaptain = findCaptain;