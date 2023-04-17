class Snow {
    constructor(maxNum, maxAnimation) {
        this.maxNum = maxNum
        this.maxAnimation = maxAnimation
        this.snowflakes = this.getSnowflakes()
    }
    getRandomAnimation() {
        return Math.floor(Math.random() * this.maxAnimation)
    }
    getRandomQnt() {
        return Math.floor(Math.random() * this.maxNum)
    }
    getSnowflakes() {
        this.snowflakes = document.createElement('div')
        this.snowflakes.className = 'snowflakes'
        this.snowflakes.style.left = `${this.getRandomQnt()}%`
        this.snowflakes.style.animationDelay = `0.${this.getRandomAnimation()}s`
        this.snowflakes.style.animationDuration = `2.${this.getRandomAnimation()}s`
        this.item = document.createElement('div')
        this.item.className = 'item'
        this.item.style.animationDelay = `0.${this.getRandomAnimation()}s`
        this.item.style.animationDuration = `1.${this.getRandomAnimation()}s`
        this.snowflakes.append(this.item)

        const resContainer = document.getElementById('res')
        resContainer.append(this.snowflakes)
    }
}

window.onload = function () {
   for (let i = 0; i < 200; i++) {
        new Snow(100, 80)
    }
}