# TaskAccenture

Instruction
1. To run the original code please type 'npm start' in terminal after clone it to local
2. Only to view the output (the bundle.js in ./dist) after using webpack, please only download the dist folder and open the index.html


About the cup counter application

There are three buttons: Return, Take and Trace cups and a cup counter in this app

The counter shows the remeaning cups. The counter will decrease when user take a cup and it will increase when user return the cup
It will show 'ALL CUPS HAVE BEEN TAKEN' when the remeanung cup is zero.

For taking cups, users need to press the Take button and a popup box will appear. The popup box is used to mark a record with users' serial number when they are going to take cups. 
Error message 'This field is required!' will be shown if the serial number field is empty. 
The counter will be decreased after users inputted valid serial number (for this app their serial number can be any string or integer) and clicked the Continuous button. 
The popup box will not be shown if the remeaning cup is zero. 

For tracking cups, users need to press the Trace cups button. A popup box contains record with their serial number , date and time when the take a cup

For returning cups, users need to press the Return button. Same as the 'take' process, a popup box will be shown and users need to input their serial number.
Error message 'This field is required!' will be shown if the seial number field is empty
Error message 'Inptted serial number didn't take any cup' will be shown if users didn't take any cup (Their serial number not in tracking list)
The popup box will not be shown if the remeaning cup is the max number of cups.  (This time is set to 10)
