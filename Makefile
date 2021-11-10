port ?= 8000

install:
	yarn

build:
	yarn run compile 

run:
	docker-compose build
	docker-compose up -d  

stress:
	curl -X GET "http://localhost:$(port)/api/v1/endpoint"
	ab -k -c 20 -n 250 "http://localhost:$(port)/api/v1/endpoint"
	ab -k -c 20 -n 250 "http://localhost:$(port)/api/v1/endpoint"
	ab -k -c 20 -n 250 "http://localhost:$(port)/api/v1/endpoint"