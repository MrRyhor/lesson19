class Bayraktar {
    constructor(maxNum, maxAnimation) {
        this.maxNum = maxNum
        this.maxAnimation = maxAnimation
        this.tank = this.getBatleField()
    }
    getRandomAnimation() {
        return Math.floor(Math.random() * this.maxAnimation)
    }
    getRandomPosition() {
        return Math.floor(Math.random() * this.maxNum)
    }
    getBatleField() {
        const tank = document.createElement('div')
        tank.className = 'tank'
        tank.style.left = `${this.getRandomPosition()}%`
        tank.style.animationDelay = `0.${this.getRandomAnimation()}s`
        tank.style.animationDuration = `5.${this.getRandomAnimation()}s`        
        this.item = document.createElement('div')
        this.item.className = 'item'
        this.item.style.animationDelay = `${this.getRandomAnimation()}s`
        this.item.style.animationDuration = `0.${this.getRandomAnimation()}s`
        tank.append(this.item)

        const resContainer = document.getElementById('res')
        resContainer.append(tank)

        tank.onclick = this.getShot.bind(this)
    }
    getShot(){
        this.item.classList.add('explode')     
    }

}

window.onload = function () {
    setInterval(() => {
        for (let i = 0; i < 3; i++) {
            new Bayraktar(98, 100)
        }
    }, 5000);
}
