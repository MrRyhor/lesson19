class SportsmensList {
    constructor(nameList) {
        this.nameList = nameList
        console.log(this.nameList)
        this.nameListInCompetition = []
        console.log(this.nameListInCompetition)
    }
    getSportsmenInCompetition(name) {
        for (let i = 0; i < this.nameList.length; i++) {
            if (name === this.nameList[i]) {
                this.nameListInCompetition.push(this.nameList[i])
                this.nameList.splice(i, 1)
            }
        }
        this.render()
    }
    outSportsmenFromCompetition(name) {
        for (let i = 0; i < this.nameListInCompetition.length; i++) {
            if (name === this.nameListInCompetition[i]) {
                this.nameList.push(this.nameListInCompetition[i])
                this.nameListInCompetition.splice(i, 1)
            }
        }
        this.render()
    }
    renderAllNames() {
        const allNamesContainer = document.createElement('div')
        allNamesContainer.className = 'name-list-container'
        const ul = document.createElement('ul')
        ul.className = 'name-list'
        const title = document.createElement('h2')
        title.innerText = 'Список доступных спортсменов'
        ul.append(title)
        allNamesContainer.append(ul)
        for (const name of this.nameList) {
            const li = document.createElement('li')
            li.className = 'li'
            li.innerText = name
            ul.append(li)
            const arrow1 = document.createElement('img')
            arrow1.setAttribute('id', 'arrow1')
            arrow1.src = './img/green_arrow.png'
            arrow1.onclick = this.getSportsmenInCompetition.bind(this, name)
            li.append(arrow1)
        }
        return allNamesContainer
    }
    renderNamesListInCompetitions() {
        const namesListInCompetitions = document.createElement('div')
        namesListInCompetitions.className = 'name-list-container'
        const ul = document.createElement('ul')
        ul.className = 'name-list'
        const title = document.createElement('h2')
        title.innerText = 'Список спортсменов в соревнованиях'
        ul.append(title)
        namesListInCompetitions.append(ul)
        for (const name of this.nameListInCompetition) {
            const li = document.createElement('li')
            li.className = 'li'
            li.innerText = name
            ul.append(li)
            const arrow2 = document.createElement('img')
            arrow2.setAttribute('id', 'arrow2')
            arrow2.src = './img/red_arrow.png'
            arrow2.onclick = this.outSportsmenFromCompetition.bind(this, name)
            li.append(arrow2)
        }
        return namesListInCompetitions
    }
    render() {
        this.resultContainer = document.getElementById('res')
        this.resultContainer.innerHTML = ''
        this.resultContainer.append(this.renderAllNames())
        this.resultContainer.append(this.renderNamesListInCompetitions())
    }
}


const nameList = ['Max Cavalera', 'Philip Anselmo', 'Rob Flynn', 'Chuck Billy', 'Scot Ian', 'Roger Miret', 'Vinnie Stigma', 'Lou Koller', 'Henry Rollins']

window.onload = function () {
    const test = new SportsmensList(nameList)
    test.render('res')
}