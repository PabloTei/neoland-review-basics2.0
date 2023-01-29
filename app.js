// 1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let newArray = [];
for (const movie of movies) {
    const arrayCategories = movie.categories;
    for (const categorie of arrayCategories) {
        if (!newArray.includes(categorie)) {
            newArray.push(categorie)
        }
    }
}
console.log(newArray);

// 2

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalCount = 0;
for (const user of users) {
    for (const key in user.favoritesSounds) {
        totalCount += user.favoritesSounds[key].volume
    }
}
console.log(totalCount / users.length);
    
// 3

const users1 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let count = [];
for (const user of users1) {
    for (const sound in user.favoritesSounds) {
       if (count[sound]) {
        count[sound]++;
       } else {
        count[sound] = 1;
       }
    }
}
console.log(count);

// 4

function findArrayIndex(array, text) {
    if (array.includes(text)) {
        return `La palabra ${text}, se encuentra en la posición ${array.indexOf(text)+1} de la lista: ${array}.`
    } else {
        return `La palabra ${text}, no se encuentra en la lista ${array}.`;
    }   
}
console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Ajolote"));

// 5

function rolldice(caras) {
    return Math.floor(Math.random() * caras);
}
console.log(rolldice(7))
