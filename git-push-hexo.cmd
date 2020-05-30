@echo off
set /p commit=commit:
title auto commit
cd D:\Git\Git\bin\
git.exe add -A
git.exe commit -m %commit%
git.exe push
echo done
pause >null