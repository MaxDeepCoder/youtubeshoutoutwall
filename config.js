//All scripts are made by MASSKA
//Discord: MASSKA#4698
//Github: https://github.com/MASSKAgithub/Youtube-SHOUTOUT-WALL

var config = {
    addMessage: "You have been successfully added on the wall !", //message when a user is added
    errorMessage: "An error has occured please try again later.", //message when an error occurred
    wasAddedMessage: "You have been already added on the wall. (stop spamming)", 
    wrongUserIdMessage: "An error has occured please try again later. (wrong user id)", //message when a user was already added for avoir duplicated channels on the wall
    logDataInConsole: true, //boolean must be true or false for log added users on the wall in console
    logDataInFile: true, //also a boolean log data in the logs.txt file which is in data folder
    channelsNumber: 24, //the number of channels which can be on the wall
    googleApiToken: "AIzaSyBv3K8Mk-P5MyVnhrqhRPqq9hxLhHBzqJA", //Replace xxx by your google api token (youtube api v3) you can find it here: https://console.developers.google.com/apis/library
};

//When you add something replace only! Don't touch other things like if you want to
//change a message, replace text which is in "xxx" so you replace xxx and you DON'T delete the ""
//if in your text there is " then put \ before like that: \" or there will be bugs
//For every help or bug report please come on my discord server: https://discord.gg/BREsBq6fNQ