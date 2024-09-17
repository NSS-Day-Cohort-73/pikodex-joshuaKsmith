import { database } from './database.js'


export const constructPikodex = () => {
    let pikodexHTML = ``

    for(const pikomon of database) {
        pikodexHTML += `
            <article class="piko-card">
                <img src="${pikomon.imageUrl}" alt="${pikomon.name}'s image" class="piko-img">
                <h2 class="piko-name">
                    ${pikomon.name}
                </h2>
                <div class="piko-info">
                    <div class="info-text">
                        <p class="piko-category">
                            ${pikomon.category} Pikomon
                        </p>
                        <p class="piko-abilities">
                            Abilities: ${pikomon.abilities}
                        </p>
                        <p class="piko-weakness">
                            Weakness: ${pikomon.weakness}
                        </p>
                    </div>
                </div>
            </article>
        `
    }
    return pikodexHTML
}


export const renderPikodex = (html) => {
    const container = document.querySelector('#container')
    container.innerHTML = html
}