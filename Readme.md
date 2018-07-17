## Windows Update Blocker

Windows Update (while mostly useful) is largely useless to me since my laptop is 5 years old and most of the updates dont work properly or mess up my computer. After the latest update, my laptop could not play audio anymore. It used to show me a error screen on bootup saying my Windows was not activated (It has been running on a digital license ever since I bought it). And worse, even Microsoft Office could not work with it. 

To solve this issue, I wrote a small script which will check if Windows Update Service is running, and if it is running, the script will shut it down.

### How to build

Download this repo. Open up the terminal and navigate to the repo where you downloaded it. Make sure you have NodeJS installed.

Install dependencies
    npm install

Run the script
    node .

I'm working on creating an exe version which can run on windows. Once it is available on the repo, it will be enough to just double click on it and run it.