const r1 = document.getElementById('1');
const r2 = document.getElementById('2');
const r3 = document.getElementById('3');
const r4 = document.getElementById('4');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

const allR = document.querySelectorAll('input')
console.log(allR);

const button = document.querySelector('button')

const answerP = document.querySelector('.answer')

const map = new Map();

map.set('потрапити на очі', 'впасти у вічі');
map.set('не вмішуватися в справи', 'не втручатися в справи');
map.set('не дивлячись на перешкоди', 'попри перешкоди');
map.set('на рахунок цього', 'щодо цього');
map.set('терпіння лопнуло', 'терпець увірвався');
map.set('гарно виглядати', 'мати гарний вигляд');
map.set('нанести збитки', 'завдати збитки');
map.set('кілька років назад', 'кілька років тому');
map.set('згідно закону', 'згідно із законом');
map.set('здавати іспит', 'складати іспит');
map.set('в любий день', 'у будь-який день');
map.set('вибачте мене', 'вибачте мені');
map.set('заказати товар', 'замовити товар');
map.set('заключати договір', 'укладати договір');
map.set('на протязі місяця', 'протягом місяця');
map.set('приймати участь', 'брати участь');
map.set('прийняти міри', 'вжити заходів');
map.set('по крайній мірі', 'принаймні');
map.set('виключення', 'виняток');
map.set('підводити підсумки', 'підсумовувати');
map.set('приводити приклад', 'наводити приклад');
map.set('проблема заключається', 'проблема полягає');
map.set('слідуюча зупинка', 'наступна зупинка');
map.set('міроприємства', 'заходи');
map.set('потерпіти поразку', 'зазнати поразки');
map.set('оточуюче середовище', 'навколишнє середовище');
map.set('прийшло в голову', 'спало на думку');
map.set('корисне використання', 'правильне використання');
map.set('одноголосно проголосувати', 'проголосувати одностайно');
map.set('отримати підтримку', 'заручитися підтримкою');
map.set('на голодний шлунок', 'натщесерце');
map.set('під відкритим небом', 'просто неба');
map.set('бувший директор', 'колишній директор');
map.set('відкрити вікно', 'відчинити вікно');
map.set('багаточисельні дзвінки', 'численні дзвінки');
map.set('погляди співпадають', 'погляди збігаються');
map.set('освічене перехрестя', 'освітлене перехрестя');
map.set('виключатель', 'вимикач');
map.set('діюче законодавство', 'чинне законодавство');
map.set('являється прикладом', 'є прикладом');
map.set('на наступній неділі', 'на наступному тижні');
map.set('листати сторінки книги', 'гортати сторінки книги');
map.set('уніс вклад', 'зробив внесок');
map.set('проложив шлях', 'проклав шлях');
map.set('змістова доповідь', 'змістовна доповідь');
map.set('виключення з правила', 'виняток з правила');
map.set('співставити факти', 'зіставити факти');
map.set('обідати в столовій', 'обідати в їдальні');
map.set('вірна відповідь', 'правильна відповідь');
map.set('підчеркнути слово', 'підкреслити слово');



let ansver;
let ansverText;


const randomOptions = function(){
    p1.style.backgroundColor = '';
    p2.style.backgroundColor = '';
    p3.style.backgroundColor = '';
    p4.style.backgroundColor = '';
    allR.forEach((x, i, node) => x.checked = false)
    let mapKeys = map.keys();
    let mapValues = map.values();
    // let mapValues2 = map.values();
    // let mapValues3 = map.values();
    // let mapValues4 = map.values();
    let mapSize = map.size
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    let arrVal = [];
    for(let i = 0; i<mapSize; i++){
        arrVal.push(mapValues.next().value)
    }
    let key = arrKeys.splice(Math.floor(Math.random() * mapSize), 1);
    let val1 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val2 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val3 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);

    let determiner = Math.random()
    if(determiner < 0.25){
        p1.textContent = val1;
        p2.textContent = key;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 2;
    }
    if(determiner > 0.25 && determiner < 0.5){
        p1.textContent = key;
        p2.textContent = val1;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 1;
    }
    if(determiner > 0.5 && determiner < 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = key;
        p4.textContent = val3;
        ansverText = key;
        ansver = 3;
    }
    if(determiner > 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = val3;
        p4.textContent = key;
        ansverText = key;
        ansver = 4;
    }

}
const test = function(e){
    e.preventDefault()
    let mapSize = map.size
    let mapKeys = map.keys();
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    if(allR[ansver-1].checked){
        console.log('True');
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2500)
        // allR[ansver-1].checked = false
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
    } else{
        let check;
        allR.forEach((x, i, node) => {
            if(x.checked){
                check = x.value
            }
        });
        if(check == 1){
            p1.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 2){
            p2.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 3){
            p3.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 4){
            p4.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2500)
        
    }
}

button.addEventListener('click', test)
randomOptions()

