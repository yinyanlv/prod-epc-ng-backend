@echo off
mongoimport -d epc-ng -c user --type json --file ./data/user.json --drop --jsonArray
mongoimport -d epc-ng -c lang --type json --file ./data/lang.json --drop --jsonArray
mongoimport -d epc-ng -c brand --type json --file ./data/brand.json --drop --jsonArray
mongoimport -d epc-ng -c series --type json --file ./data/series.json --drop --jsonArray
mongoimport -d epc-ng -c modelGroup --type json --file ./data/modelGroup.json --drop --jsonArray
mongoimport -d epc-ng -c model --type json --file ./data/model.json --drop --jsonArray
mongoimport -d epc-ng -c database --type json --file ./data/database.json --drop --jsonArray
mongoimport -d epc-ng -c query --type json --file ./data/query.json --drop --jsonArray
mongoimport -d epc-ng -c group --type json --file ./data/group.json --drop --jsonArray
mongoimport -d epc-ng -c usage --type json --file ./data/usage.json --drop --jsonArray
pause