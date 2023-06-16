# notetaking-serverless-backend
A NodeJS backend that connects to a M0 MongoDB cluster meant to be deployed onto AWS Lambda as a serverless infrastructure example. This is a flexible boilerplate is that can be adapted to fit other business needs. 

To use this:

1. Clone or fork this repository.
2. Create your own MongoDB cluster (ex: with MongoDB Atlas).
3. For that cluster, whitelist any desired IP addresses and create necessary database users.
4. This backend authenticates with user credentials- copy them from Atlas and add them to the env as `DB=mongodb+srv://dbAdmin:<password>@<clustername>.cucs2.mongodb.net/<dbname>`.
5. Update or change any models, handlers, and/or functions for your needs.
5. Install the necessary NPM packages and run the repo with `sls offline start --skipCacheInvalidation -s dev` to simulate AWS Lambda and API Gateway locally for local development and testing.
6. Before deploying to AWS, adjust the API throttling as needed in the serverless.yml.
7. Deploy to AWS with `sls deploy -s dev`.

Reference: https://medium.com/tech-at-nordstrom/building-a-rest-api-in-node-js-using-aws-services-mongodb-and-serverless-framework-9e0530baaa3f
