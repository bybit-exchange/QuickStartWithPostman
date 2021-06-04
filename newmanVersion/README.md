# bybit_api_monitor
## What's newman?
- newman is a commandline tool of Postman; for more details, please refer to - https://www.npmjs.com/package/newman

## Get your own Bybit API key/secret ready
### Testnet Mode
- git clone https://github.com/bybit-exchange/QuickStartWithPostman
- cd QuickStartWithPostman/newmanVersion
- register an account in testnet.bybit.com and generate your own api key/secret; You can refer to this for more details - https://help.bybit.com/hc/en-us/articles/360039749613-How-to-create-a-new-API-key-
- edit Bybit.postman_environment.json and change the values for bybit-api-key and bybit-api-secret accordingly
- Go to next step - "Quick run using newman"

### Mainnet Mode
- Basically the same way as testnet except that you need to access www.bybit.com instead of testnet.bybit.com and edit Bybit.postman_environment.json to change the default value of "url" from api-testnet.bybit.com to api.bybit.com

## Quick run using newman

- install node & npm to your computer
- npm install -g newman
- newman run Bybit\ USDT_Perp\ for\ Newman.postman_collection.json -e Bybit.postman_environment.json


