@echo off
Powershell Set-ExecutionPolicy -Scope CurrentUser RemoteSigned 
:loop
cd libs
phantomjs ..\js\script.js
Powershell -File ..\src\123.ps1
goto loop
