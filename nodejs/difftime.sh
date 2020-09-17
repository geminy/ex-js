#/usr/bin/env bash

START=$(date +%s%N)
du -sh ~/Test
END=$(date +%s%N)
DIFF_N=$(($END - $START))
DIFF_M=`expr $DIFF_N / 1000000`
echo "time(ms): $DIFF_M"
