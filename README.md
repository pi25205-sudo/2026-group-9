# 2026-group-9
2026 COMSM0166 group 9

<img width="1920" height="1080" alt="MainMenu" src="https://github.com/user-attachments/assets/7d509195-b73f-4de7-8836-eb1c6b9c4b80" />

🔗[Link of Latest version of the Game!]

https://uob-comsm0166.github.io/2026-group-9/

📝[Link of our Kanban board]

(https://offjjx.atlassian.net/jira/software/projects/GROUP/boards/34?atlOrigin=eyJpIjoiYWU5Y2M0ZmY3Y2NmNDExNzgzNGQ3MmViMWU3OTEzMmEiLCJwIjoiaiJ9)

## ☣️KTV☣️

KTV☣️:Kill that Virus is a Roguelike game inspired by Vampire Survivors and Plague Inc. 
You play as a single cell within the human body, 
on a mission to purge all foreign pathogens and impurities. 
Players can dive into the Story Mode to experience a meticulously designed plot full of twists and turns, 
or test their limits in Endless Mode for a pure, adrenaline-pumping Roguelike combat experience.
Across both modes, players can enjoy the following signature features crafted by our team:

☣️Diverse Arsenal: A wide variety of weapons to choose from.

🧪Miraculous Items: Power-ups with unique and awesome effects.

✏️Hand-Drawn Environments: Game scenes 100% hand-painted by our development team.

💀Escalating Challenges: Enemies that grow increasingly difficult as you progress.

😈Intense Boss Fights: Heart-pounding encounters against massive pathogens.

📗Educational Trivia: Fun facts and insights into how the human body works.

And many more hidden surprises!
In KTV, the gameplay experience evolves based on your actions and choices. 
As your capabilities grow, the enemies and levels will 
continuously challenge your reflexes and tactical skills. 
We strive to deliver a unique, heart-racing, and addictive experience for every player!

—Purge or be purged. The choice is yours.—
Group 9 Developers

📸[Snapshot of Latest version of the Game!]

![messageImage_1773355627386](https://github.com/user-attachments/assets/bc6467a4-8cf6-4ad3-b1dc-55f7babb7f24)


🎮[Demo video!]

![新增專案](https://github.com/user-attachments/assets/bf459aad-1ec8-4561-bec8-25a3b12d70c9)


## Your Group

GROUP PHOTO. Add a group photo here.
![b5fa1d2dc8a17b01f6c224e67302c3bb](https://github.com/user-attachments/assets/f1b4bfc4-1020-4e09-a5f2-37b27771b751)


- Group member 1, Jack Feng, yj25938@bristol.ac.uk, role
- Group member 2, Sinan Xu, pi25205@bristol.ac.uk , role
- Group member 3, Yize Yang, jn25127@bristol.ac.uk, role
- Group member 4, Zhanyu xu, pr25318@bristol.ac.uk, role
- Group member 5, Jianjiang Yang, dx25555@bristol.ac.uk, role

## Project Report

### Introduction

- This game is based on Vampire Survivors and expands on the original gameplay with richer content and more diverse mechanics. It is a top-down 2D survival game in which players only need to use the WASD keys to control the character’s movement and the mouse to point toward enemies; the character will then attack automatically without additional input. Enemies continuously spawn outside the player’s field of view and quickly move toward the character to launch attacks. Whenever the character takes damage, their health bar decreases, and if health reaches zero, the run ends.
- The core innovation of our game lies in the deep integration of classic roguelike elements into the original structure. Once the game starts, it proceeds in real time without pausing, creating a tense and immersive experience. After defeating a certain number of enemies, players earn rewards such as new weapons, passive items, or buffs that enhance their combat ability. As time passes, they face increasingly powerful and numerous enemy waves. Each run features random upgrades and enemy combinations, ensuring that no two playthroughs feel the same. 

### Requirements 

- 15% ~750 words
- Early stages design. Ideation process. How did you decide as a team what to develop? Use case diagrams, user stories. 

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the TWO areas of *technical challenge* in developing your game. 

### ✍️Evaluation💭

**Qualitative Analysis: Think Aloud**

🤔User Observations:

Attack Frequency: Players complained that having to click the mouse for every single attack was exhausting due to the high frequency of repetitive actions.

Game Guidance: Players suggested adding various in-game instructions to reduce the sense of confusion during their first playthrough.

Visual Feedback (Projectiles): Players recommended adding flight trajectories (trails) to attacks for better visual identification and clarity.

Impact Feedback (Damage): Players suggested adding screen shake and prominent warning effects when taking damage to enhance the overall gameplay experience and feel.

Tutorial Level: Players suggested implementing a tutorial stage to help them better understand the mechanics and objectives of the game.

✨Analysis Outcome:

Optimizing Attack Mechanics: The most frequent feedback received was regarding the "one click, one attack" constraint. Players found constant clicking tedious, especially when facing large swarms of enemies. To resolve this and improve immersion, we will implement an auto-fire feature that allows continuous weapon use by holding down the mouse button.

Improving Intuitive Design: Requests for both game instructions and tutorial levels reflect a core issue: the current gameplay experience is not intuitive enough. While this can be addressed through tutorials, we aim to prioritize improving the UI/UX design and providing clearer on-screen guidance to create a more seamless learning curve.

Enhancing Visual Clarity: Suggestions for prominent flight trajectories indicate that our current object rendering and visual emphasis need improvement. We will adopt this feedback by using high-contrast, vivid color palettes for future weapons and adding visual trails where necessary to improve tracking.

Refining Game "Feel" (Juiciness): Compared to the current system where taking damage only results in a numerical HP deduction, adding screen shake and visual alerts will significantly improve the "game feel" and sensory feedback. We have decided to implement these features in the next update.

- One quantitative evaluation (of your choice) 
- Description of how code was tested. 



**Quantitative Evaluation**

SUS(System Usability Scale)

SUS is an internationally common user experience evaluation scale, which contains ten questions. The visualization results of the SUS table are as follows.

![1776181791253](C:\Users\ADMINI~1\AppData\Local\Temp\1776181791253.png)



Descriptive statistics： 

| **Question** **No.** | **Simplified** **Question Description**                    | **Reve rse Scor ing** | **M**   **ea** **n** **Sc or** **e** | **Me** **dia** **n** | **Stan dard** **Devia** **tion** | **Mini mum Score** | **Maxi mum Score** | **Rati** **ng** **Leve** **l** |
| -------------------- | ---------------------------------------------------------- | --------------------- | ------------------------------------ | -------------------- | -------------------------------- | ------------------ | ------------------ | ------------------------------ |
| 1                    | I   think that I would like to use this system frequently. | No                    | 4.10                                 | 4.00                 | 0.70                             | 3                  | 5                  | Goo d (4.0-   4.4)             |
| 2                    | I found the   system unnecessarily complex.                | Yes                   | 2.40                                 | 2.00                 | 1.43                             | 1                  | 5                  | Poor (<3.   0)                 |
| 3    | I thought   the system was easy to use.                      | No   | 4.60 | 5.00 | 0.49 | 4    | 5    | Exce llent (4.5   +) |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- | ---- | -------------------- |
| 4    | I think that I would need the support of a technical person   to use this system. | Yes  | 1.60 | 1.50 | 0.66 | 1    | 3    | Poor (<3.   0)       |
| 5    | I found   the various functions in   this system were well integrated. | Yes  | 4.00 | 4.00 | 0.77 | 3    | 5    | Goo d (4.0-   4.4)   |
| 6    | I thought there was too much inconsistency in this   system. | No   | 1.60 | 1.00 | 0.80 | 1    | 3    | Poor (<3.   0)       |
| 7    | I would   imagine that most people   would learn to use this system quickly. | Yes  | 4.60 | 5.00 | 0.92 | 2    | 5    | Exce llent (4.5   +) |
| 8    | I found the system very cumbersome to use.                   | No   | 2.30 | 2.00 | 1.19 | 1    | 5    | Poor (<3.   0)       |
| 9    | I felt   very confident using the   system.                  | Yes  | 4.60 | 5.00 | 0.49 | 4    | 5    | Exce llent (4.5   +) |
| 10   | I needed to learn a lot   of things before I could use this   system. | No   | 1.70 | 1.00 | 1.27 | 1    | 5    | Poor (<3.   0)       |

1、 Project advantages (Q3, Q7, Q9, Q4, Q6): The game is easy to use and the threshold is low. The core operation is to control the direction and attack of the mouse movement with the right hand, and the movement of the character with the left hand. It adopts the common style of the industry, which reduces the cognitive cost of players. It only needs a brief introduction, and the novice teaching will be added to the starting interface. The difficulty of the level is from simple to deep, which makes players familiar with the operation method and increases their confidence in using the game.

2、 Good items (Q1, Q5, Q10): players' willingness to use, function integration needs to be improved. It is necessary to improve the playability and complexity of the game. At this stage, it is only the initial version, so give users a little simple feedback on the game, and the later version will increase the playability and complexity of the game.

(1). Increase the types of weapons, from ordinary firearms at this stage to pistols, sniper rifles, daggers and grenades, etc.

(2). As the level increases, new enemies and new mechanisms are added to improve the difficulty of the game.

3、 Differential items (Q2, Q8): Technicians are required to guide the problem. There is no self-group solution. The later sequence needs to be improved, because the interface has not been introduced at this stage, and technical personnel still need to introduce the gameplay, so it is necessary to add a normative introduction process to assist players in getting started. At the same time, the operation fault tolerance design is added. For example, the attack judgment range is expanded without precise positioning. Reduce the levels caused by players' operating errors, and reduce the need for help from the root cause.



NASA:

![1776181992904](C:\Users\ADMINI~1\AppData\Local\Temp\1776181992904.png)

| Jean         | 4.06 | 2.14 | 1    | 2.75 | 4    | 5     | 8    | 2.25 |
| ------------ | ---- | ---- | ---- | ---- | ---- | ----- | ---- | ---- |
| Shanl ey     | 3.75 | 2.41 | 1    | 2.00 | 3    | 5     | 9    | 3.00 |
| Yuton g Liu  | 4.62 | 3.05 | 1    | 1.75 | 4.50 | 7.25  | 10   | 5.50 |
| Chien Yu Kuo | 5.50 | 3.61 | 1    | 2.75 | 4.00 | 10.00 | 10   | 7.25 |
| Hsin man Liu | 4.06 | 2.35 | 1    | 2.00 | 5.00 | 5.00  | 9    | 3.00 |
| Chuc k       | 4.38 | 1.59 | 2    | 3.00 | 4.00 | 5.00  | 8    | 2.00 |
| Frida        | 4.75 | 2.89 | 1    | 2.00 | 4.00 | 8.00  | 9    | 6.00 |
| Jinni Li     | 4.81 | 3.06 | 1    | 1.00 | 5.00 | 7.25  | 10   | 6.25 |



In summary, the evaluation data of the above six core dimensions, as well as the discreteness and high and low score characteristics of the evaluator's score, from the three core directions of reducing unreasonable task load, improving player performance satisfaction, and reducing frustration, provide implementable optimization suggestions for the group's subsequent development, and adapt to the core attributes of the game "light experience, low threshold, high fun", as follows:

1. High time pressure

The overall score of the time pressure dimension in the evaluation is high, which is one of the core load points, indicating that the task promotion rhythm, operation response window, level timing settings, etc. of the current game are beyond the adaptation range of some players, resulting in urgent negative experiences for players. The difficulty of the primary level has been reduced,

Optimize the level timing design: cancel the forced timing of non-core links (such as scene exploration and prop selection), and only set reasonable timing in the core challenge links; and the timing threshold refers to the completion speed setting of the evaluator with a low score, and reserve buffer time.

2. Differentiated and high value of frustration , Effort and Performance Satisfaction do not match

The frustration dimension score is highly discrete (some evaluators score up to 10 points), and it is inversely related to "self-performance satisfaction", indicating that the player's negative emotions mainly come from the high cost of failure, lack of feedback, and the rapid increase in difficulty, which is a key problem affecting the retention of the game. The player's investment has not been The positive return should be reduced, thus reducing the game experience.

Optimize the failure replay mechanism to reduce the sunk cost: after failing to break through the level, you don't need to start from the beginning, and you can revive from the key node of the current level.

Increase instant positive feedback in the whole process: When players complete small operations, such as clicking correctly, collecting props, and unlocking small goals, they give feedback through visual effects, short sound effects, and light numerical rewards, rather than just feedback after the end of the level; even if the operation is wrong, only gentle hints are given to avoid negative accusation copywriting.

3. The score for the evaluator is very discrete.

The scoring standard difference in all dimensions is high, indicating that the game experience of different players varies greatly. The mini-game lacks universal experience design and needs to take into account the needs of different players.

Do layered design for players to realize the basic experience of "thousands of people and thousands of faces": when entering the game for the first time, players can choose the difficulty or skip the preliminary test level. Unify the core interaction logic, reduce experience deviations, let players form operating habits, and reduce experience deviations caused by interaction inconsistency.



Testing:

With the improvement of functions and pages in the future of the game, test codes will be added one after another to prevent errors, and the simple test code will be designed in the current version:

1. White box test code

It is used to verify internal functions and variable logic. The following code cases are only for display to test whether the player's initial health is correct and whether the position is in the middle:

let player = {};

function resetPlayer() { 

player.x = 960;

player.y = 540;

player.hp = 10;

}

 

function assert(condition, testName) { 

if (condition) {

console.log(`testing pass： ${testName}`);

} else {

console.log(`testing fail： ${testName}`);

}

}

resetPlayer();

assert(player.x === 960 && player.y === 540 && player.hp === 10, “player’s initial HP=10、 position=(960,540)”);

 

2. Black box test code

It is used to verify the performance of the player's input and output function, and give a case: the player presses the D key, and the output effect is that the character moves four units to the right:

 

let player = { x: 960, y: 540 };

function movePlayer(key) { 

if (key === "D") {

player.x += 4;

}

}

function assert(condition, testName) { 

if (condition) {

console.log(`testing pass： ${testName}`);

} else {

console.log(`testing fail： ${testName}`);

}

}

const originalX = player.x; 

movePlayer("D");

assert(player.x === originalX + 4, "The player presses the D key and moves 4 units to the right");



### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools and methods did you use? Did you define team roles? Reflection on how you worked together. Be honest, we want to hear about what didn't work as well as what did work, and importantly how your team adapted throughout the project.

### Conclusion

- 10% ~500 words

- Reflect on the project as a whole. Lessons learnt. Reflect on challenges. Future work, describe both immediate next steps for your current game and also what you would potentially do if you had chance to develop a sequel.

### Contribution Statement

- Provide a table of everyone's contribution, which *may* be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Please let us know as soon as possible if there are any issues with teamwork as soon as they are apparent and we will do our best to help your team work harmoniously together.

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5% of report grade) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.
- **Documentation** of code (5% of report grade)
  - Organise your code so that it could easily be picked up by another team in the future and developed further.
  - Is your repo clearly organised? Is code well commented throughout?
