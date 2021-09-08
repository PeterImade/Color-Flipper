const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
   /* let hexColor = '#';
    let n1 = hex[Math.floor(Math.random() * hex.length)];
    let n2 = hex[Math.floor(Math.random() * hex.length)];
    let n3 = hex[Math.floor(Math.random() * hex.length)];
    let n4 = hex[Math.floor(Math.random() * hex.length)];
    let n5 = hex[Math.floor(Math.random() * hex.length)];
    let n6 = hex[Math.floor(Math.random() * hex.length)];

    let randomColor = hexColor + n1 + n2 + n3 + n4 + n5 + n6;
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor; */

    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[Math.floor(Math.random() * hex.length)]
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;
    }
})