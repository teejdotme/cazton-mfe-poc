#!/bin/bash

# build all components
cd root && yarn install && yarn build && cd ..
cd globals && yarn install && yarn build && cd ..
cd apps/account && yarn install && yarn build && cd ../..
cd apps/home && yarn install && yarn build && cd ../..
cd apps/navbar && yarn install && yarn build && cd ../..
cd apps/search && yarn install && yarn build && cd ../..

# setup docs directory
rm -Rf docs
mkdir -p docs
cp -r root/dist/* docs/
cp -r root/src/assets/* docs/
cp --parents -r globals/dist/* docs/
cp --parents -r apps/*/dist/* docs/
cp -r docs-importmap.json docs/importmap.json