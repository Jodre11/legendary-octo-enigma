#!/bin/sh

export CI=true
if [ $# -eq 0 ]; then
  npm test
else
  npx vitest "$@"
fi