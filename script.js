let t = 0;

verb = [
    'FALL',
    'DANCE',
    'HOP',
    'SWAY',
    'HUM',
    'DRIZZLE',
    'POUR',
    'PRECIPITATE',
    'BUCKET',
    'LASH OUT'
] 


place = [
    'IN A GREEN, MOSSY TERRAIN',
    'IN AN OVERPOPULATED AREA',
    'BY THE SEA',
    'BY AN AONED LAKE',
    'IN A DESERTED FACTORY',
    'IN DENSE WOODS',
    'IN JAPAN',
    'AMONG SMALL HILLS',
    'IN SUTHERN FRANCE',
    'AMONG HIGH MOUNTAINS',
    'ON AN ISLAND',
    'IN A COLD, WINDY CLIMATE',
    'IN A PLACE  WITH BOTH HEAVY RAIN AND BRIGHT SUN',
    'IN A DESERTED AIR PORT',
    'IN A HOT CLIMATE',
    'INSIDE A MOUNTAIN',
    'ON THE SEA',
    'IN MICHIGAN',
    'IN HEAVY JUNGLE UNDER GROWTH',
    'BY A RIVER',
    'AMONG OTHER  HOUSES',
    'IN A DESERTED CHURCH',
    'IN A METROPOLIS',
    'UNDERWATER',
    'IN A DREAM WORLD',
    'ON A DESERTED ISLAND'
]

light_source = [
    'CANDLES',
    'ALL AVAILABLE LIGHTING',
    'ELECTRICITY',
    'NATURAL LIGHT'
]

inhabitants = [
    'PEOPLE WHO SLEEP VERY LITTLE  ', 
    'FARMERS', 
    'HORSES AND BIRDS', 
    'PEOPLE WHO SPEAK MANY LANGUAGES', 
    'LARGE AQUATIC ANIMALS', 
    'CHILDREN AND OLD PEOPLE', 
    'VARIOUS BIRDS AND FISH', 
    'LOVERS', 
    'FISHERMEN AND FAMILIES', 
    'PEOPLE WHO ENJOY EATING TOGETHER  ', 
    'PEOPLE WHO EAT A GREAT DEAL', 
    'COLLECTORS OF ALL TYPES', 
    'FRIENDS AND ENEMIES', 
    'PEOPLE WHO  SLEEP ALMOST ALL THE TIME', 
    'PEOPLE  FROM MANY WALKS   OF LIFE', 
    'FRIENDS', 
    'PEOPLE WHO LOVE TO READ',
    'PLUVIOPHILES',
]

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}

function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}

function stanza() {
    "use strict";
    return '<br>THE RAIN CONTINUES TO ' + choose(verb) + '<br>' + choose(place) + '<br>INHABITED BY ' + choose(inhabitants);
}

function litany() {
    "use strict";
    let main = document.querySelector('.content');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.querySelector('.content').firstChild);
    }
    let last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}

function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 2000);
}

function adjustToBackground() {
    "use strict";
    let vid_height = document.getElementById("rain-bg-video").offsetHeight;
    document.querySelector(".content").style.height = `${vid_height - (vid_height * 0.1)}px`;
}

window.addEventListener('resize', adjustToBackground);

produce_litany();