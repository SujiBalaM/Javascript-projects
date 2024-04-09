
const myDiv = document.querySelector('div')


for(let i = 1; i<=500;i++){
    const myImage = document.createElement('img');
    myImage.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    myDiv.append(myImage)
}