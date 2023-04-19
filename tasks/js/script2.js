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
    // getSportsmenInList(namesList, name, resultList) {
    //     for (let i = 0; i < namesList.length; i++) {
    //         if (name === namesList[i]) {
    //             resultList.push(namesList[i])
    //             namesList.splice(i, 1)
    //         }
    //     }
    //     this.render()
    // }
    createAllNamesList() {
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
    createNamesListInCompetitions() {
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
    // createSportsmensList(namesList, titleTable, imgSrc, resultList) {
    //     const allNamesContainer = document.createElement('div')
    //     allNamesContainer.className = 'name-list-container'
    //     const ul = document.createElement('ul')
    //     ul.className = 'name-list'
    //     const title = document.createElement('h2')
    //     title.innerText = titleTable
    //     ul.append(title)
    //     allNamesContainer.append(ul)
    //     for (const name of namesList) {
    //         const li = document.createElement('li')
    //         li.className = 'li'
    //         li.innerText = name
    //         ul.append(li)
    //         const arrow = document.createElement('img')
    //         arrow.setAttribute('id', 'arrow')
    //         arrow.src = imgSrc
    //         arrow.onclick = this.getSportsmenInList.bind(this, nameList, name, resultList)
    //         li.append(arrow)
    //     }
    //     return allNamesContainer
    // }
    render() {
        const resultContainer = document.getElementById('res')
        resultContainer.innerHTML = ''
        resultContainer.append(this.createAllNamesList())
        resultContainer.append(this.createNamesListInCompetitions())        
    }
   
    // render() {
    //     const resultContainer = document.getElementById('res')
    //     resultContainer.innerHTML = ''
    //     resultContainer.append(this.createSportsmensList(this.nameList, 'Список доступных спортсменов', './img/green_arrow.png', this.nameListInCompetition))
    //     resultContainer.append(this.createSportsmensList(this.nameListInCompetition, 'Список спортсменов в соревнованиях', './img/red_arrow.png', this.nameList))
    // }
    
}


const nameList = ['Max Cavalera', 'Philip Anselmo', 'Rob Flynn', 'Chuck Billy', 'Scot Ian', 'Roger Miret', 'Vinnie Stigma', 'Lou Koller', 'Henry Rollins']

window.onload = function () {
    const test = new SportsmensList(nameList)
    test.render()
}