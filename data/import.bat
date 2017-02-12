mongoimport --db SBOKA --collection steps --drop --file steps.json
mongoimport --db SBOKA --collection procs --drop --file procs.json
mongoimport --db SBOKA --collection tables --drop --file table.json
mongoimport --db SBOKA --collection items --drop --file principles.json
mongoimport --db SBOKA --collection items --file item08.json
mongoimport --db SBOKA --collection items --file items09.json
mongoimport --db SBOKA --collection items --file items10.json
mongoimport --db SBOKA --collection items --file items11.json
mongoimport --db SBOKA --collection items --file items12.json
mongoimport --db SBOKA --collection items --file organization.json
mongoimport --db SBOKA --collection items --file justification.json
mongoimport --db SBOKA --collection items --file quality.json
mongoimport --db SBOKA --collection items --file change.json
mongoimport --db SBOKA --collection items --file risks.json

