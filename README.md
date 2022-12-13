# CS308-Team05

RATE12-LET THE FANS DECIDE!

For client deployment page visit here: https://cs308-renderclient.onrender.com
For server deployment page visit here: https://cs308-renderserver.onrender.com

DESCRIPTION

RATE12, in association with the Turkish Football Federation, is a web application designed to give users, football clubs and TFF affiliates a common platform from which they can reach: individual match data, league standings, comment sections, question/answer forms etc.
The application has customizable user information where the users can change their credentials (email, password, username, etc..). It also has an FAQ page where users can view the most asked questions and their respective answers given by the administrators. This allows the users to be quickly informed without any other extra activity, easing the time of receiving information. If the user could not find an answer that satisfied them in the FAQ page, they can always send their question to our admins: Just enter the user name, the admin name and your question and our admins will quickly return to you!
It also has a comment section, where many users can express their thoughts and ideas on any topic (i.e the latest matches, how the application is, team discussions, fruitful football debates, etc.). We believe this allows for the strengthening of bonds between the football community which ultimately is hoped to improve the current football culture in Turkey since RATE12 is a common medium for not only the fans, but also football clubs and TFF affiliates. However, users have to be careful, polite and not insulting in the comment section as they can be banned or restricted from our application. Any account that violates such protocols will be under review and left to the decision of the administrator.
RATE12 also provides an -although rather small- news page, where the users can view the last 3 tweets from the official Twitter account of the Turkish Football Federation. This way, users can be up-to-date with the latest news in the world of football.
With RATE12, we aimed to give our users an easy and efficient platform where they can receive crucial data on specific matches like the player names, formations, goals scored, goals conceded points won/lost, rate of players in certain matches etc.; the league standings, news about TFF and many more. We believe RATE12's most important aspect and selling point though, is the coherent existence of various account types like clubs and affiliates along with the general user. This allows the general user to be more in touch with what is going on in the league as they can contact these accounts. Our application plays the role of a medium, in which users can debate, express their opinions and consult to others for corrections or just to gather information in general. The football culture in Turkey has been seeing corruption and decrease in quality over the years. RATE12 aims to play a role in improving the culture and bring back football to where it was in the past: The top of the sports ladder in our country!
 
USER DOCUMENTATION

HOW TO INSTALL THE SOFTWARE
In order to install the software, the user must download React.js and node.js to his/her computer. The user can use the git clone command to download the RATE12 codes.

1- Download the CS308-Team05.zip from the latest release.
2- Extract the .zip file and locate client and server folders.
	Use the client  folder to access the front-end.
	Use the server folder to access the back-end
3- Copy the file of your choice into your project directory.
4- Enjoy RATE12 :)

HOW TO REPORT A BUG
If a bug is found, the user can report the bug by opening an issue in the github page and linking the project. Additionally, through RATE12, you can also use our question submission page which is accessible from under the FAQ page to send and inform our admins about the bugs you have found. Just enter your name, the admin name and the content of your message (in this case, a bug report).

KNOWN BUGS
- On the /PlayerPage page, if the user clicks on a team button and then clicks the other team, the previously opened data does not close and both data becomes visible on the page. 
- On the /PlayerPage page, if a team button is pressed, there is no way to close the data and the only way of closing it is to press the “go back” button and then return back.
- The location of the TFF logo and RATE12 logo changes according to the page format.
- When the administrator enters the name of the user he/she wants to give an answer to, ALL questions sent by that user are marked as “resolved” even though they may not be.
- Users/admins can write names other than their own user names to the questions and answers pages.

DEVELOPER DOCUMENTATION

HOW TO OBTAIN THE SOURCE CODE
Downloading the code directly from the github will be enough to obtain the source code. The front-end and back-end part of our project are in the same repository.

THE LAYOUT OF THE DIRECTORY STRUCTURE
The user can access the front end related directories from /client folder. The back end related directories are held in the /server folder.

HOW TO DEPLOY AND BUILD THE SOFTWARE
In order to run the website locally, the user must open 2 terminals and write the following code lines.

For /client:
cd client
npm install
npm start

For /server:
cd server
npm install
node index.js
