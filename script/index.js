const canvas = document.querySelector('#canvas')

const context = canvas.getContext('2d')


const bird = new Image()

const bg = new Image()

const fg = new Image()

const pipeUp = new Image()

const pipeBottom = new Image()


bird.src = './images/bird.png'
bg.src = './images/bg.png'
fg.src = './images/fg.png'
pipeUp.src = './images/pipeUp.png'
pipeBottom.src = './images/pipeBottom.png'


const fly = new Audio()
const score_audio = new Audio()

fly.src = './audio/fly.mp3'
score_audio.src = './audio/score.mp3'

// слздание труб
const pipe = []
pipe[0] = {
    x: canvas.width,
    y: 0
}


// расстояние между труб

let gap = 100

// позиционирование 
let xPos = 10
let yPos = 150
// гравитация 
let grav = 1.5
let score = 0

// движение птицы
const moveUp = () => {
    yPos -= 45
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        moveUp()

        fly.play()
    }
})
document.addEventListener('click', moveUp,)



const draw = () => {
    context.drawImage(bg, 0, 0)
    context.drawImage(fg, 0, canvas.height - fg.height)
    context.drawImage(bird, xPos, yPos)




    for (let i = 0; i < pipe.length; i++) {
        context.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)


        pipe[i].x--
        if (pipe[i].x == 125) {
            pipe.push({
                x: canvas.width,
                y: Math.floor((Math.random() * pipeUp.height) - pipeUp.height)
            })
        }
        // отслеживание прикосновений 


        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height > + canvas.height - fg.height) (
                    location.reload()
                )
        if (pipe[i].x == 5) {
            score++
            score_audio.play

        }




    }


    context.fillText(`Score:${score}`, 10, canvas.height - 20)
    context.fillStyle = '#000'
    context.font = '24px Verdana'
    yPos += grav
    requestAnimationFrame(draw)
}




pipeBottom.onload = draw