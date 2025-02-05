@echo off
set "caminho_para_src=%~dp0"
echo "%~dp0"
echo O diretorio atual é: %CD%
cd %caminho_para_src%
echo Agora, o diretorio atual é: %CD%

set "caminho_para_src=%~dp0\server.js"
pm2 start "%caminho_para_src%" --name RestMultiavatar --cron "0 7 * * *"
pm2 save