#!/bin/bash

FINAL_FILE="JammedScript/jammedscript.js"

rm -f ${FINAL_FILE}
cat *.js > ${FINAL_FILE}
