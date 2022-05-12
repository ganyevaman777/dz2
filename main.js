const robots = [
    {
        username: "robot_1",
        power: 500,
        speed: 30
    },
    {
        username: "robot_2",
        power: 400,
        speed: 20
    },
    {
        username: "robot_3",
        power: 300,
        speed: 10
    },
    {
        username: "robot_4",
        power: 600,
        speed: 40
    },
    {
        username: "robot_5",
        power: 700,
        speed: 50
    },
    {
        username: "robot_6",
        power: 800,
        speed: 80
    }
]

for(let user of robots){
    if(user.power > 600){
        console.log(user)
    }
}
