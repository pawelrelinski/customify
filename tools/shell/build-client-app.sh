#!/bin/bash
# Shell script to serve client application on http://localhost:4200/
# Command to run this script on Unix platform:
# /bin/zsh ./build-client-app.sh
echo "Try serve client application on http://localhost:4200/..."
# shellcheck disable=SC2164
(cd ./../.. && nx serve client --port=4200)
