#!/usr/bin/env bash

rm -rf $(find . -type d -name "node_modules")
rm -rf $(find . -type d -name ".next") # next build dir
rm -rf $(find . -type d -name "out") # `next export` output dir
