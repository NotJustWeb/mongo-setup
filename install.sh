
rm -r ./database
mkdir database
cd database
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.7.tgz
tar xvf mongodb-linux-x86_64-3.4.7.tgz -C .
mv mongodb-linux-x86_64-3.4.7/* .
mkdir data
chmod -R 777 ./bin/*
dir="$PWD"
bindir="$dir/bin"
datadir="$dir/data"
export PATH=$PATH:$bindir
cd bin
./mongod --dbpath $datadir &