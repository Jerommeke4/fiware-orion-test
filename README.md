# fiware-orion-test
Testing Fiware Orion broker functionality and publish-subscribe pattern

## contents
This project contains a docker-compose file that starts the Fiware orion broker and a MongoDB instance. (default behavior of the docker project)

Next to this I added a nodejs express app that contains an endpoint for the subscriber part which just outputs what orion sends to it.
