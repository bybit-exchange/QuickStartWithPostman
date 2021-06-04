# bybit_api_monitor
## Quick run using newman

- install node & npm to your computer
- npm install -g newman
- newman run Bybit\ USDT_Perp\ for\ Newman.postman_collection.json -e BybitTestnet.postman_environment.json (this would place a testing order using the pre-configured account in testnet, read the order and then cancel it)
## How to use your own account
- register an account in testnet.bybit.com and generate your own api key/secret
- edit BybitTestnet.postman_environment.json and change the values for bybit-api-key and bybit-api-secret accordingly
- run step 3 in "Quick run using newman" again
