.PHONY: startdb
startdb:
	docker run -d --name pagination-db \
    -v postgres_data:/var/lib/postgresql/data \
    -e POSTGRES_USER=codedadi \
    -e POSTGRES_PASSWORD=123456 \
    -e POSTGRES_DB=pagination \
    -p 5432:5432 \
    postgres:latest


.PHONY: stopdb
stopdb:
	docker stop pagination-db

.PHONY: removedb
stopdb:
	docker rm pagination-db

.PHONY: cleandb
stopdb:
	docker volume rm postgres_data