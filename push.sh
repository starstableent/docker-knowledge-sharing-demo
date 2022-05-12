VERSION=$1
docker image tag my-express-api:latest gilbertnordhammar/my-express-api:$VERSION
docker image push gilbertnordhammar/my-express-api:$VERSION