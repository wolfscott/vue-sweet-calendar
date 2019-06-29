@echo off
echo ----------------[ CHANGE THE VERSION NUMBER ??? ]--------------------
echo.
echo Be sure to exit all running apps that are watching this folder
echo and then re-run the "npm install" on your target.
echo.
echo ---------------------------------------------------------------------
pause
@npm run build
