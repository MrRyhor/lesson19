class Cards {
    constructor({ lable, imgSrc, title, link, price }) {
        this.lable = lable
        this.imgSrc = imgSrc
        this.title = title
        this.link = link
        this.price = price
    }
    render(divId) {
        this.cardContainer = document.createElement('div')
        this.cardContainer.className = 'card-container'

        const lable = document.createElement('div')
        lable.className = 'lable'
        lable.innerText = this.lable
        if (this.lable === 'акция') lable.setAttribute('id', 'discount')
        this.cardContainer.append(lable)

        const imageContainer = document.createElement('div')
        imageContainer.className = 'image-container'
        const image = document.createElement('img')
        image.className = 'img'
        image.src = this.imgSrc
        imageContainer.append(image)
        this.cardContainer.append(imageContainer)

        const titleContainer = document.createElement('div')
        titleContainer.className = 'title-container'
        const title = document.createElement('a')
        title.innerText = this.title
        title.href = this.link
        title.target = '_blank'
        titleContainer.append(title)
        this.cardContainer.append(titleContainer)

        const price = document.createElement('h2')
        price.className = 'price'
        price.innerText = this.price
        this.cardContainer.append(price)

        const targetContainer = document.getElementById(divId)
        targetContainer.append(this.cardContainer)
        
        this.cardContainer.onmouseover = this.onHover.bind(this)
        this.cardContainer.onmouseleave = this.onLeave.bind(this)
    }
    onHover(){
        this.cardContainer.setAttribute('id', 'active')
    }
    onLeave(){
        this.cardContainer.removeAttribute('id')
    }
}

const linksSet = [
    {
        lable: 'топ продаж',
        imgSrc: './img/laptop-1.png',
        title: 'Hоутбук Asus TUF Gaming FX705D',
        link: 'https://rozetka.com.ua/360606204/p360606204/',
        price: '31 500 ₴'
    },
    {
        lable: 'топ продаж',
        imgSrc: './img/laptop-2.png',
        title: 'Ноутбук Lenovo IdeaPad L3 15ITL6',
        link: 'https://rozetka.com.ua/lenovo-82hl00hcra/p352335126/',
        price: '16 999 ₴'
    },
    {
        lable: 'акция',
        imgSrc: './img/laptop-3.png',
        title: 'Ноутбук Lenovo IdeaPad Gaming 3 15IAH7',
        link: 'https://rozetka.com.ua/lenovo-82s900uhra/p351264234/',
        price: '39 999 ₴'
    },
    {
        lable: 'топ продаж',
        imgSrc: './img/laptop-4.png',
        title: 'Ноутбук Acer Nitro 5 AN515-57-54LP',
        link: 'https://rozetka.com.ua/acer-nhqeweu00u/p356240535/',
        price: '43 999 ₴'
    }
]

window.onload = function () {
    for (const linkData of linksSet) {
        new Cards(linkData).render('res')
    }
}