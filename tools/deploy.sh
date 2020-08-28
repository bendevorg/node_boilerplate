setup() {
  echo "Setting up our server to new dist"
  pm2 delete $2
  cd github/$1
  git pull
  npm install
  npm run build
}

update_server() {
  echo "Restart server"
  pm2 start --name $1 npm -- run $2
}

create_folder $1 $2 $3
clone_dist $1 $2 $3
ssh -i $3 $1@$2 "$(typeset -f setup update_server); setup $4 $5; update_server $5 $6"