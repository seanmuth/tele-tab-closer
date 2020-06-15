@echo off
set zipfile="zoom-tab-closer.zip"
echo Cleaning up...
if exist %zipfile% del %zipfile%
echo Creating zip...
zip %zipfile% background.js icon-128.png manifest.json
echo Done!

::pause
