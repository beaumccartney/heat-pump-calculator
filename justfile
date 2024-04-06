alias i      := install
alias ip     := install-parallel
alias server := server-launch
alias client := client-launch

default:
  @just --list

server-launch:
    cd server && poetry run uvicorn server:api --port 3001 --reload

client-launch:
    cd client && npm run start

install: install-client install-server

install-parallel: install-client-parallel install-server-parallel

install-client:
    cd client && npm install

install-server:
    cd server && poetry install

install-client-parallel:
    cd client && npm install &

install-server-parallel:
    cd server && poetry install &
