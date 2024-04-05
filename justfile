alias i := install

server-launch:
    cd server && poetry run uvicorn server:api --port 3001 --reload

client-launch:
    cd client && npm run start

install:
    cd client && npm install
    cd server && poetry install
