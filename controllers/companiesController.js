const axios = require("axios");
const db = require("../models");
const apiToken = apiToken;

module.exports = {
    saveAll: function(req, res) {
        axios.get('https://cloud.iexapis.com/beta/ref-data/symbols?token=' + apiToken)
        .then(response => {
    const goodDataArr = response.data;

    const stockArr =[];
 goodDataArr.forEach((obj) => {
    const newObj= {};


    //  console.log(obj.symbol, obj.name)
     const companyName = obj.name;
     const tickerSymbol = obj.symbol;
     newObj.name = companyName;
     newObj.symbol = tickerSymbol;

     stockArr.push(newObj)
    //  console.log(stockArr)
 })
    return stockArr
        })
        .then(companyData => 
            // Supposed to take our data and throw it into our db, aka: companiesData.js
            // We gotta push our stockArr to the db

            companyData.forEach(object => {
                // Now we gotta post each object to the db
                // Not final, may not be right
                db.Company.create()
                .then(dbmodel => 
                   res.json(dbmodel) )

            })
        )
    }
};