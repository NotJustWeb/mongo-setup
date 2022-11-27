#!/bin/bash
source databse-config.sh

cd "$database_dir/bin"
kill $(lsof -t -i:27017) #kill if mongodb is already running
./mongod --dbpath $datadir &