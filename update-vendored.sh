#!/bin/bash

set -e pipefail
pnpm install
rm -rf javascripts/vendor/highlightjs-motoko
mkdir -p javascripts/vendor/highlightjs-motoko
cp node_modules/highlightjs-motoko/dist/motoko.es.min.js javascripts/vendor/highlightjs-motoko/motoko.js
cp node_modules/highlightjs-motoko/dist/candid.es.min.js javascripts/vendor/highlightjs-motoko/candid.js
echo "highlightjs-motoko updated"
