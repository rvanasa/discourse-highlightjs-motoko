#!/bin/bash

set -e pipefail
yarn install
rm -rf javascripts/vendor/highlightjs-glimmer
mkdir -p javascripts/vendor/highlightjs-glimmer
cp node_modules/highlightjs-glimmer/dist/glimmer.esm.min.js javascripts/vendor/highlightjs-glimmer/index.js
echo "highlightjs-glimmer updated"
