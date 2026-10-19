const levels = [
    {
        levelName: "Level 1",
        startXY: { x: 0, y: 0 },
        doors: [
            { x: 1, y: 3, q: "I get wetter the more I dry. What am I?", a: "towel" },
            { x: 5, y: 3, q: "What has to be broken before you can use it?", a: "egg" },
            { x: 1, y: 4, q: "What has teeth but can't bite?", a: "comb" },
            { x: 4, y: 7, q: "I go up but never come down. What am I?", a: "age" },
            { x: 3, y: 8, q: "I have hands but can't clap. What am I?", a: "clock" },
            { x: 5, y: 8, q: "What runs but never walks?", a: "river" }
        ],
        mapLayout: [
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [1, 2, 1, 1, 1, 2, 1, 1, 0, 0],
            [1, 2, 1, 1, 0, 0, 0, 1, 0, 0],
            [1, 5, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 6, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 4, 2, 1, 1, 1, 1, 1],
            [1, 7, 0, 2, 0, 2, 0, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    },
    {
        levelName: "Level 2",
        startXY: { x: 0, y: 0 },
        doors: [
            { x: 4, y: 4, q: "The more of me there is, the less you see. What am I?", a: "darkness" },
            { x: 4, y: 6, q: "The more of me there is, the less you see. What am I?", a: "darkness" },
            { x: 3, y: 5, q: "The more of me there is, the less you see. What am I?", a: "darkness" },
            { x: 5, y: 5, q: "The more of me there is, the less you see. What am I?", a: "darkness" },
            { x: 4, y: 3, q: "What has a neck but no head?", a: "bottle" },
            { x: 2, y: 5, q: "What has a neck but no head?", a: "bottle" },
            { x: 6, y: 5, q: "What has a neck but no head?", a: "bottle" },
            { x: 4, y: 7, q: "What has a neck but no head?", a: "bottle" },
            { x: 3, y: 4, q: "What has a neck but no head?", a: "bottle" },
            { x: 5, y: 4, q: "What has a neck but no head?", a: "bottle" },
            { x: 3, y: 6, q: "What has a neck but no head?", a: "bottle" },
            { x: 5, y: 6, q: "What has a neck but no head?", a: "bottle" },
            { x: 8, y: 8, q: "What can you catch but not throw?", a: "cold" },
            { x: 9, y: 8, q: "What can you catch but not throw?", a: "cold" },
            { x: 8, y: 9, q: "What can you catch but not throw?", a: "cold" }
        ],
        mapLayout: [
            [0, 0, 0, 0, 0, 0, 0, 1, 4, 5],
            [0, 0, 0, 0, 0, 0, 0, 1, 6, 5],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 2, 2, 3, 2, 2, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
            [1, 1, 1, 0, 2, 0, 0, 0, 0, 0],
            [4, 6, 1, 0, 0, 0, 0, 0, 2, 2],
            [4, 5, 1, 0, 0, 0, 0, 0, 2, 7]
        ]
    },
    {
        levelName: "Level 3",
        startXY: { x: 0, y: 0 },
        doors: [
            { x: 2, y: 1, q: "What is the pasword?!?", a: "Bodie20is14the12greatest15" },
            { x: 1, y: 1, q: "What is the pasword?!?", a: "Bodie20is14the12greatest15" },
            { x: 2, y: 2, q: "What is the pasword?!?", a: "Bodie20is14the12greatest15" },
            { x: 1, y: 2, q: "What is the pasword?!?", a: "Bodie20is14the12greatest15" },
            {
                x: 9,
                y: 0,
                q: "A boy has two brothers. Each boy has 2 sisters. They have a playdate, and every boy invites 2 friends, and every girl invites 3. How many kids are at the playdate",
                a: "17"
            },
            {
                x: 0,
                y: 9,
                q: "A boy has two brothers. Each boy has 2 sisters. They have a playdate, and every boy invites 2 friends, and every girl invites 3. How many kids are at the playdate",
                a: "17"
            }
        ],
        mapLayout: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 2, 2, 1, 1, 1, 1, 1, 1, 0],
            [0, 2, 2, 0, 0, 0, 0, 6, 1, 0],
            [0, 1, 5, 0, 0, 3, 0, 0, 1, 0],
            [0, 1, 0, 3, 4, 0, 0, 0, 1, 0],
            [0, 1, 5, 0, 0, 0, 6, 0, 1, 0],
            [0, 1, 3, 0, 3, 0, 0, 0, 1, 0],
            [0, 1, 0, 4, 0, 0, 6, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 7]
        ]
    },

    {
        levelName: "Zyo Vin Scren",
        startXY: { x: 0, y: 0 },
        doors: [],
        mapLayout: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    }
];
let level = 0;
let timertime = false;
// 150 is Imposible, 200 is Hard, 250 is Medium, 300 is Easy
let timer = 250;
let moletime;
let everyonedies = false;
let points = 0;
const grid = document.getElementById("grid");
const scoretext = document.getElementById("scoretext");
const time = document.getElementById("time");
let levelData = levels[level];
let map = JSON.parse(JSON.stringify(levelData.mapLayout));
let Xpos = 0;
let Ypos = 0;
function draw() {
    grid.innerHTML = "";
    if (points > 0) {
        scoretext.innerHTML = `Score: ${points},000,000`;
    } else {
        scoretext.innerHTML = `Score: 0`;
    }
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            const prisoncell = document.createElement("div");
            prisoncell.classList.add("prisoncell");
            if (x == Xpos && y == Ypos) {
                prisoncell.innerText = "🦍";
            }
            if (map[y][x] == 1) {
                prisoncell.innerText = "🌳";
            } else if (map[y][x] == 2) {
                prisoncell.innerText = "🦧";
            } else if (map[y][x] == 3) {
                prisoncell.innerText = "🍍 ";
            } else if (map[y][x] == 4) {
                prisoncell.innerText = "🍌";
            } else if (map[y][x] == 5) {
                prisoncell.innerText = "🥭";
            } else if (map[y][x] == 6) {
                prisoncell.innerText = "🥥";
            } else if (map[y][x] == 7) {
                prisoncell.innerText = "🏆";
            }
            grid.appendChild(prisoncell);
        }
    }
}
function TIME() {
    moletime = Date.now() + timer * 1000;
    const theMoleTimer = setInterval(() => {
        let themoletimeleft = moletime - Date.now();
        if (level == 3) {
            return;
        }
        if (themoletimeleft > 0) {
            time.innerHTML = `Time: ${Math.ceil(themoletimeleft / 1000)}`;
        } else {
            scoretext.textContent = `LOOOOOOOOOOOOOOSER \n Your score: ${points}`;
            everyonedies = true;
            clearInterval(theMoleTimer);
        }
    }, 1000);
}
function nextlevel() {
    level++;
    levelData = levels[level];
    map = JSON.parse(JSON.stringify(levelData.mapLayout));
    Xpos = 0;
    Ypos = 0;
    draw();
}
document.addEventListener("keydown", (e) => {
    if (everyonedies) {
        return;
    }
    let newx = Xpos;
    if (timertime == false) {
        timertime = true;
        TIME();
    }
    let newy = Ypos;
    if (e.key == "ArrowRight") newx += 1;
    if (e.key == "ArrowLeft") newx -= 1;
    if (e.key == "ArrowUp") newy -= 1;
    if (e.key == "ArrowDown") newy += 1;
    if (newx < 0 || newx >= map[0].length) {
        return;
    }
    if (map[newy][newx] == 1) {
        return;
    } else if (map[newy][newx] == 2) {
        const doorData = levels[level].doors.find((d) => d.x === newx && d.y === newy);
        if (doorData) {
            let answer = prompt(`${doorData.q}`);
            if (answer == doorData.a) {
                map[newy][newx] = 0;
                draw();
            }
        }
        return;
    } else if (map[newy][newx] == 7) {
        scoretext.textContent = `WIIIIIIIIIIIIIINER \n Your score: ${points}`;
        setTimeout(() => {
            nextlevel();
        }, 1000);
        return;
    } else if (map[newy][newx] == 5) {
        points += 5;
        alert("You got 5 MILLION DOLLARS!");
        map[newy][newx] = 0;
        draw();
    } else if (map[newy][newx] == 4) {
        points += 50;
        alert("You got 50 MILLION DOLLARS!");
        map[newy][newx] = 0;
        draw();
    } else if (map[newy][newx] == 3) {
        points += 800;
        alert("You got 800 MILLION DOLLARS!");
        map[newy][newx] = 0;
        draw();
    } else if (map[newy][newx] == 6) {
        points += 20;
        alert("You got 20 MILLION DOLLARS!");
        map[newy][newx] = 0;
        draw();
    }
    Xpos = newx;
    Ypos = newy;
    draw();
});
draw();
