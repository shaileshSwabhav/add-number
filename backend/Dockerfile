FROM golang:1.17-alpine 

RUN mkdir -p /home/app

WORKDIR /home/app

COPY go.mod /home/app

# set default dir so that next commands executes in /home/app dir

# will execute npm install in /home/app because of WORKDIR
#RUN npm install
RUN go mod tidy

COPY . /home/app

# RUN go build -o main .
# no need for /home/app/server.js because of WORKDIR
CMD ["go", "run", "main.go"]