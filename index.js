let finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Unit 4 Challenge: Create code for analyzing the financial records of a company

let monthNum = 0;
let netTotal = 0;
let trackChange = new Array(2);
let profitChange =0;
let averageChange = 0;
let tempAmount = 0;
let tempMonth = ''
let dateProfit = 0;
let maxProfit = 0;
let dateLoss = 0;
let maxLoss = 0;

for(let i = 0; i< finances.length; i++){
    trackChange[i] = new Array(2);
}

// FIND THE TOTAL NUMBER OF MONTH
monthNum = finances.length;

// FIND THE NET TOTAL AMOUNT OF PROFITS/LOSSES OVER THE ENTIRE PERIOD
for (let i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
}

// console.log("*** TRACK CHANGE IN PROFIT/LOSS FROM MONTH TO MONTH AND DISPLAY THE CHANGE IN CONSOLE ***");

// TRACK CHANGE IN PROFIT/LOSS FROM MONTH TO MONTH BASED ON 1ST MONTH PROFIT/LOSSES OCCURING IN JAN 2010
// AND THE PRECEDING MONTH IS ZERO PROFIT/LOSSES
trackChange[0] = finances[0];
for (let k = 0; k < finances.length - 1; k++) {
    trackChange[k + 1][1] = finances[k + 1][1] - finances[k][1];
    trackChange[k + 1][0] = finances[k + 1][0];
    // console.log(trackChange[k]);
}

// DISPLAY THE CHANGE FROM MONTH TO MONTH IN CONSOLE (DISABLED)
// console.log(trackChange[finances.length - 1]);

// FIND Average Change
for (let i = 0; i < finances.length; i++) {
    profitChange += trackChange[i][1];
}
averageChange = profitChange / monthNum;
averageChange = Math.round(averageChange*100)/100;

// SORTING IN INCREASING ORDER OF THE CHANGE OF PROFTS/LOSSES
for(let i = 1; i < trackChange.length; i++) {
    for (let j = 0; j < i; j++) {
        if (trackChange[i][1] < trackChange[j][1]) {
            tempAmount = trackChange[i][1];
            tempMonth = trackChange[i][0]
            trackChange[i][1] = trackChange[j][1];
            trackChange[i][0] = trackChange[j][0];
            trackChange[j][1] = tempAmount;
            trackChange[j][0] = tempMonth;
        }
    }
}

// DISPLAY OF SORTING RESULT (DISABLED)
// console.log("***** DISPLAY OF SORTING RESULT *****");
// for (let k = 0; k < trackChange.length; k++) {
//     console.log(trackChange[k]);
// }

// FIND THE GREATEST INCREASE IN PROFITS AND THE GREATEST DECREASE IN LOSSES (DATE AND MONTH)
dateProfit = trackChange[(trackChange.length-1)][0];
maxProfit = trackChange[(trackChange.length-1)][1];
dateLoss = trackChange[(0)][0];
maxLoss = trackChange[(0)][1];

// DISPLAY THE RESULT OF OF FINANCIAL ANALYSIS
// console.log("***** DISPLAY THE RESULT OF FINANCIAL ANALYSIS ******");
console.log("Financial Analysis\n----------------------------");
console.log("Total Months: " + monthNum + "\n" + "Total: " + "$" + netTotal
    + "\n" + "Average Change: " + "$" + averageChange + "\n" + "Greatest Increase in Profits: " + dateProfit
    + " ($" + maxProfit + ")" + "\n" + "Greatest Increase in Profits: " + dateLoss + " ($" + maxLoss + ")");

