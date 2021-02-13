#!/bin/bash
# Shell script to serve api application on http://localhost:3434/
# Command to run this script on Unix platform:
# /bin/zsh ./build-api-app.sh
echo "Try serve api application on http://localhost:3434/..."
# shellcheck disable=SC2164
(cd ./../.. && nx serve api --port=3434)
