Init scipt

```
#! /bin/bash
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
gcloud source repos clone load-balancer-learn --project=vital-pillar-328717
cd load-balancer-learn
npm install
node app.js &
```