# How to install Node.js?

----
#### Step 0: The Quick Guide to Get Node.js Installed on Windows.
1. Open the official page for [Node.js downloads] (https://nodejs.org/en/download) and download Node.js for Windows by clicking the "Windows Installer" option.
2. Run the downloaded Node.js `.msi` Installer - including accepting the license, selecting the destination, and authenticating for the install.
    - This requires Administrator privileges, and you may need to authenticate
3. To ensure Node.js has been installed, run `node -v` in your terminal - you should get something like `v6.9.5`
4. Update your version of npm with `npm install npm --global`
    - This requires Administrator privileges, and you may need to authenticate
5. Congratulations - you've now got Node.js installed, and are ready to start building!

----
#### Step 1: Download the Node.js `.msi` Installer
As the first step to installing Node.js on Windows, you'll need to download the installer. You'll be able to grab the installer from the [official downloads page for Node.js] (https://nodejs.org/en/download/).

You'll be able to download the Windows Node.js installer by clicking the `Windows Installer` option at the top of the page - when you click this, you'll get an MSI installer download. Make sure to save it somewhere that you'll be able to find it!

----
#### Step 2: Run the Node.js Installer

- You've got the Windows Installer - great! Now, you need to install it on your PC. The installer is a pretty typical Wizard interface for installing software on Windows - there are a few steps to it, but you can have it done in under a minute. You can get through it by following the guide below:
    - Welcome to the Node.js Setup Wizard
        - Select `Next`
    - End-User License Agreement (EULA)
        - Check `I accept the terms in the License Agreement`
        - Select `Next`
    - Destination Folder
        - Select `Next`
    - Custom Setup
        - Select `Next`
    - Ready to install Node.js
        - Select `Install`
        - *Note*: This step requires Administrator privlidges.
        - If prompted, authenticate as an Administrator
    - Installing Node.js
        - Let the installer run to completion
    - Completed the Node.js Setup Wizard
        - Click `Finish`
----
#### Step 3: Verify that Node.js was Properly installed
To double check that Node.js was installed fully on your PC, you can test the following command in your Command Prompt (regardless of if you're using `cmd.exe`, `Powershell`, or any other command prompt):

```
$ node -v
```

If Node.js was installed fully, the command prompt will print something similar to (but probably not *exactly*) this:

```
$ node -v // The command we ran - prints out the version of Node.js that's currently installed 
v6.9.5 // The printed version of Node.js that's currently installed - v6.9.5 was the most current LTS release at the time of writing.
```
----
#### Step 4: Update the Local npm Version

As the final step in getting Node.js installed, we'll update your version of npm - the package manager that comes bundled with Node.js.

Node.js always ships with a specific version of npm - Node.js doesn't (and shouldn't!) automatically update npm. The release cycle of the npm CLI client isn't in sync with the Node.js releases. Because of this, there's almost certainly going to be a newer version of npm available than the one that is installed as a default in any given Node release.

To quickly and easily update `npm`, you can run the following command:

```
npm install npm --global // Update the `npm` CLI client
```
----
#### Step 5: Install our modules to be able to start the server.
In order for the server to work, you must first install its modules:

```
npm install --save express multer body-parser cors crypto-js mongoose jsonwebtoken paypal-express-checkout express-fileupload path @google-cloud/storage mongoose-pagination crypto nodemon
```
----
#### Step 6: Start Server.
At your command prompt, type:

`npm start`

Ok, done. The server was started and you were able to view our project.