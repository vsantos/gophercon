FROM golang:1.12.9-alpine3.10 as builder

WORKDIR /app

COPY main.go /app

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o response_mocker main.go

# run stage
FROM golang:1.12.9-alpine3.10 as runner

RUN apk add --update \
    curl \
  && rm -rf /var/cache/apk/*

WORKDIR /app
COPY --from=builder /app/response_mocker /app
EXPOSE 5000

ENTRYPOINT ["/app/response_mocker"]
