/*
 * @Author: qugang 
 * @Date: 2018-01-06 18:07:51 
 * @Last Modified by:   qugang 
 * @Last Modified time: 2018-01-06 18:07:51 
 */

import Web3 from 'web3'

//var Web3 = require('./web3')

var config = require('config')

const host = config.get("appConfig.web3.host")

const port = config.get("appConfig.web3.port")

var provider = new Web3.providers.HttpProvider(`http://${host}:${port}`)

let web3 = new Web3(provider)

web3.eth.getBlockNumber(function(error, result){
    if(!error)
        console.log('chain block number is:',JSON.stringify(result));
    else
        console.error(error);
})
  
module.exports = web3