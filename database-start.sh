#!/bin/bash
source './database-config.sh'

cd "$database_dir/bin"
pwd
kill -2 `pgrep mongo` #kill if mongodb is already running
echo $data_path
./mongod --dbpath "$data_path" --logpath "$dir/mongod.log"