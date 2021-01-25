#!/bin/bash
# Shell script to serve admin application on http://localhost:4300/
# Command to run this script on Unix platform:
# /bin/zsh ./build_app.sh
echo "Try serve admin application on http://localhost:4300/..."
# shellcheck disable=SC2164
(cd ./../.. && nx serve admin --port=4300)
