#!/bin/bash

FINAL_FILE="JammedScript/jammedscript.js"

rm -rf JammedScript/
mkdir JammedScript
cat *.js > ${FINAL_FILE}
