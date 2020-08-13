@echo off
set /p commit=commit:
title auto commit
D:\Program Files\Git\bin\git.exe add -A
D:\Program Files\Git\bin\git.exe commit -m %commit%
D:\Program Files\Git\bin\git.exe push origin master
exit

