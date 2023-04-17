class Stars {
    constructor(leftPosition, topPosition, maxAnimation) {
        this.maxAnimation = maxAnimation
        this.leftPosition = leftPosition
        this.topPosition = topPosition
        this.stars = this.getStars()
    }
    getRandomLeftPosition() {
        return Math.floor(Math.random() * this.leftPosition)
    }
    getRandomTopPosition() {
        return Math.floor(Math.random() * this.topPosition)
    }
    getRandomAnimation() {
        return Math.floor(Math.random() * this.maxAnimation)
    }
    getStars() {
        this.star = document.createElement('div')
        this.star.className = 'star'
        this.star.style.left = `${this.getRandomLeftPosition()}%`
        this.star.style.top = `${this.getRandomTopPosition()}%`
        this.star.style.animationDelay = `1.${this.getRandomAnimation()}s`
        this.star.style.animationDuration = `${this.getRandomAnimation()}s`

        const resContainer = document.getElementById('res')
        resContainer.append(this.star)
    }
}

window.onload = function () {
    setInterval(() => {
        for (let i = 0; i < 100; i++) {
            new Stars(100, 80, 10)
        }
    }, 3000)
}