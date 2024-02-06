# HEAT PUMP CALCULATOR

## Set up environment

```bash
# from root dir of repo
cd client/ ; npm install
cd ../server/ ; npm install
```
```bash
# from root dir of repo
cd client/ ; npm install html2canvas jspdf
cd ../server/ ; npm install html2canvas jspdf
```

## Run the application

### Using provided script

Use the start script provided:

```bash
# from the root of the project
./start.sh
```

Easiest way I know of to kill the client and server is `killall`:

```bash
killall node # IF YOU HAVE OTHER NODE PROCESSES THIS WILL KILL THEM TOO
```

### Manually

Either two terminals or good shell-fu is needed cause there's two separate
applications. Start both terminals in the root of the repo.

```bash
# Terminal 1
cd server/
npm start
```

```bash
# Terminal 2
cd client/
npm start
```

Close the processes as you normally would.
