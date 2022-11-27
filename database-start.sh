#!/bin/bash
source database-config.sh

cd "$database_dir/bin"
pwd
kill $(lsof -t -i:27017) #kill if mongodb is already running
./mongod --dbpath $data_path &