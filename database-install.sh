
#!/bin/bash
source databse-config.sh

if [ -d "$databse_dir" ]; then
  # Removing the datbase directory
  rm -r $database_dir
  mkdir $database_dir
fi

cd $database_dir

curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.7.tgz
tar xvf mongodb-linux-x86_64-3.4.7.tgz -C .
mv mongodb-linux-x86_64-3.4.7/* .
mkdir data
chmod -R 777 ./bin/*

export PATH=$PATH:$bindir