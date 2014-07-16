#!/bin/bash
 
if [ `sudo /sbin/initctl status hyperion | grep running | wc -l` = 1 ]
then    
    sudo /sbin/initctl stop hyperion
 
else    
    sudo /sbin/initctl start hyperion
fi