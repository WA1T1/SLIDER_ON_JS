const points = document.querySelectorAll('.completed-point');
const buttons = document.querySelectorAll('.completed-button');
const image = document.querySelector('.Completed-img');
const descriptions = document.querySelectorAll('.completed-description');

const data = [{
        image: 'completed1.png',
        first: 'Rostov-on-Don <br/> LCD admiral',
        second: '81 m2',
        third: '3.5 months',
    },
    {
        image: 'completed2.png',
        first: 'Sochi <br/> Thieves',
        second: '105 m2',
        third: '4 months',
    },
    {
        image: 'completed3.png',
        first: 'Rostov-on-Don <br/> Patriotic',
        second: '93 m2',
        third: '3 months',
    }]
let currentPoint = 0

function moveLeft() {
    points[currentPoint].classList.remove('white-point')
    buttons[currentPoint].classList.remove('completed-button-active')
    if(currentPoint===0) {
        currentPoint = 2
    }
    else {
        currentPoint -= 1
    }
    points[currentPoint].classList.add('white-point')
    buttons[currentPoint].classList.add('completed-button-active')
    image.src = './img/' + data[currentPoint].image
    descriptions[0].innerHTML = data[currentPoint].first
    descriptions[1].innerHTML = data[currentPoint].second
    descriptions[2].innerHTML = data[currentPoint].third

}

function moveRight() {
    points[currentPoint].classList.remove('white-point')
    buttons[currentPoint].classList.remove('completed-button-active')
    if(currentPoint===2) {
        currentPoint = 0
    }
    else {
        currentPoint += 1
    }
    points[currentPoint].classList.add('white-point')
    buttons[currentPoint].classList.add('completed-button-active')
    image.src = './img/' + data[currentPoint].image
    descriptions[0].innerHTML = data[currentPoint].first
    descriptions[1].innerHTML = data[currentPoint].second
    descriptions[2].innerHTML = data[currentPoint].third
}

function pointClick(number) {
    points[currentPoint].classList.remove('white-point')
    buttons[currentPoint].classList.remove('completed-button-active')
    currentPoint = number
    points[currentPoint].classList.add('white-point')
    buttons[currentPoint].classList.add('completed-button-active')
    image.src = './img/' + data[currentPoint].image
    descriptions[0].innerHTML = data[currentPoint].first
    descriptions[1].innerHTML = data[currentPoint].second
    descriptions[2].innerHTML = data[currentPoint].third
}