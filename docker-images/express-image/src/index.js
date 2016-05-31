var Chance = require ('chance');
var chance = new Chance();

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(generateCurrency());
        
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server accepting HTTP requests on port 3000');
});


function generateCurrency() { 
  var numberOfCurrencies = chance.integer({ 
    min: 0, 
	max: 10
  }); 
  console.log(numberOfCurrencies); 
  var currency =  []; 
  for (var i = 0; i < numberOfCurrencies; i++) { 
    var randCurrency = chance.currency(); 
	
	currency.push({ 
		randCurrency
	}); 
	};
	console.log(currency); 
	return currency; 
}