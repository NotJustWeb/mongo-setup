#!/bin/bash
source database-config.sh

cd "$database_dir/bin"
pwd
kill -2 `pgrep mongo` #kill if mongodb is already running
./mongod --dbpath $data_path &