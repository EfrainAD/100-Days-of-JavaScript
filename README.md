# 100-Days-of-JavaScript

## Day One

<p>I can't use something.innterTest > 0, but I CAN with innerHTML, so something.innerHTML > 0 does worked.</p>
<p>I can add eventListener to a contaner and have the element inside trigger it. Then I find out what one was clicked by using e.target to get the class name.</p>
<p>With above, a bitfall is that any element inside it will not trigger. "contaner > button > <i>" The i will not have the class name that button has. So careful</p>
<p>count.innerText = ++(count.innerText) can be count.innerText++</p>

## Day Two

<p>Better understood Math.random() now.</p>

## Day Three

<p>Cool Way to generate the numbers in one lne.</p>

## Day Four

<p>Got a needed reminder that form submit refreshes the page.</p>
<p>I now have a better understanding of position: absolute; </p>
<p>Learned how add closing animations to a modal.</p>

## Day Five

<p>I like my solution better. Less operations while being easier to read too</p>

## Day Six

<p>The .match(/([a,e,i,o,u])/) use was much nicer then mine solution. I really need to sit down and learn regex.</p>

## Day Seven

<p>So day seven gave me this little gum. I was getting an odd errer when I would tab over the the submit button verse just clicking on it.</p>
<blockquote>Assertion failed: Input argument is not an HTMLInputElement</blockquote>
<p>Turns out it a lastpass error.</p>
<p>This had all kinds of learning. I googled how to copy. I learned from the solution I can "select/highlight" the text. I think that a very nice touch.</p>

## Day Eight

<p>Wish they just gave directions so I didn't need to watch to figure out what it was to do. Then again maybe I should have ran the solution and guessed. I really don't want add video or audio to my google drive, but There is one place I wonder if maybe cold cause issues when working with the URL.</p>

## Day Nine

<p>Simple. I never used input before through the event listener.</p>
<p></p>

## Day Ten

<p>The solution given was much nicer. Mine only checks for a netwrok connection. Fetching a picture with a time stamp on the url so it wouldn't use your stored one was very nice.</p>

## Day Eleven

<p>I have never actaully seen class within class like that. I never had understood what that chaining looked like that I do all the time with premade librarys we use. Using pre-made and making your own definitely seem different at frist glance. I'm sure iwth more exposure, my mind can sttart thinking in that way.</p>

## Day Twelve

<p>Needed to see video to understand what was wanted, so this is on hold for later so I have time to forget what I saw.</p>
<p>Need to be careful about web browser security. And to change web broswers.</p>

## Day Thirteen

<p>Another needed to see video to understand what was wanted, so this is on hold for later so I have time to forget what I saw.</p>
<p>Back, definitly forgot what I saw. I read up it to get it. The solution was easer to read then mine without knwoing anything. I pulled from the example code on MDN.</p>
<p>I did learn if I add two js files in one html, my delairing carries over to te second file.</p>

## Day Fourteen

<p>Saw video coming back to it another day.</p>
<p></p>

## Day Fifteen

<p>Got date stuff reinforced. And a typo reinforced that I can use backticks/(template literals) in objects</p>

## Day Sixteen

<p>Got new idea to just change the display block and display none. I was remaking the list everytime. I did look to see if there was any nice build in way to add and take way form a li, there doesn't seem to be.</p>

## Day Seventeen

<p>Got some practice with dates. I had never chain them before.</p>

## Day Eighteen

<p>Learned more about clearInterval, and I did the times better.</p>

## Day Twenty

<p>I didn't know I could target thing like this document.querySelectorAll('.nav-list li a'), That would have been handy in the past.</p>
<p>I would use 'e.target.getAttribute('href')', I have not seen 'this.getAttribute("href")' I don't think it's as readable but I do think it is cleaner. I'll be messing around with this in the future.</p>

## Day TwentyOne

<p>Learned tat classList.toggle has a second pram that is a condition. That ocntrol if it can be added or removed, function as an if condition on if it can me added or removed.</p>

## Day TwentyTwo

<p>this. does not seem to work the way I thought I could use it. I need to keep an eye open for that.</p>
<p>Had a better way to remove 'active' class. I could grab the list then did a .querySelector on the active class.</p>
<p>I had a mis-understanding of what e.target will get when I click. I though if I put addEvntLister on .nav-list, I thought it would give me taht, not the a tag. I was wrong. I also relice that I need to put an if stament to check I have the right element before I tryed to do anything with e.target</p>

## Day TwentyThree - TwentyNine

<p>how I can use transition: all 0.3s; to take effect in both direction from changeing of adding a another class. I'll need to run an experement to make sure I understand this correctly.</p>

## Day Thirty

<p>Solution was clearning but I didn't like that if I want a symbol I may or not may not get it though. No idea how to tell what is better.</p>

## Day Thirtythree

<p>Fun one, I like my code better.</p>

## Day Thirtyfour

<p>Completed without looking, googled IBM calulation and what was overwait.</p>
<p>I did like the validationg height then weight, I think it left to better error messages for user</p>

## Day ThirtyFive

<p>I got the idea to move some repeated calculations into the loop where I was adding the event listener, so it will run that one time. because of this I created different functions for each task, which I believe reduces processing and makes the code more readable.</p>

## Day ThirtySeven

<ol>
   <li>I limited things down to one if stament.</li>
   <li>Also keeps my code more try.</li>
   <li>I had cone this field.addEventListener('input', convertAllFields), I learned I could have added that to the ocument.querySelector('form').addEventListener('input', convertAllFields)</li>
   <li>And becareful to not assume to fast about error messages. I didn't relize why, was throwing me an error. I relized when I looked at the line making it.</li>
   <li>input type="number" do not take , when you trying to pass them a value</li>
</ol>

## Day ThirtyEight

<p>I think I did better with this one then last one. And I think this one more readable too</p>

## Day ThirtyNine

<p>I had used hero.addEventListener('animationend', heroJumped), I think that is much cleaner then setTimeout.</p>

## Day FortyFour

<p>I ealrn from.reset()</p>
<p>I should have just taken the whole block of HTML and imported it with template strings. It would have been faster and more readable. Giving meaningful names took a good amount of time.</p>
