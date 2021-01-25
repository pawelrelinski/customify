#!/bin/bash
# Shell script to generate and serve compodoc documentation
# Command to run this script on Unix platform:
# /bin/zsh ./build_app.sh
echo "Try generate and serve documentation..."
# shellcheck disable=SC2164
(cd ./../.. && compodoc -p tsconfig.base.json -s)
