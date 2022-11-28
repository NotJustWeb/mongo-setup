
#!/bin/bash
source database-config.sh

#  Frest install the setup
if [ -d "$database_dir" ]; then
  # Removing the datbase directory
  echo $database_dir " - Directory exists --"
  echo "Hence, deleting the existing to install new"
  rm -r $database_dir
fi

mkdir $database_dir

# Create a data directory if not exists
echo $data_dir
if [ ! -d "$data_dir" ]; then
  mkdir $data_dir
fi

cd $database_dir

# curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.7.tgz

if [ "$1" == "mac" ]; then
  filename="mongodb-macos-x86_64-6.0.3";
  curl -O https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-6.0.3.tgz # Mac 
else
  filename="mongodb-linux-x86_64-amazon2-6.0.3"
  curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-amazon2-6.0.3.tgz # Linux amazon
fi;


tar xvf "$filename.tgz" -C .
mv $filename/* .
chmod -R 777 ./bin/*

export PATH=$PATH:$bin_dir