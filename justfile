alias i := install

install:
    cd client && npm install
    cd server && poetry install
