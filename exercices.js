// 1
const spreadsheet = { title: "Sales" }
const copy = spreadsheet
copy.title = copy.title + ' (Copy)'

/* console.log(spreadsheet.title)
 */

// 2
let batman = {
    address: { city: 'Gotham' }
}

let robin = {
    address: batman.address
}

// Side effects
/* batman.address.city = 'Ibiza' */

// No side effects
/* batman.address = { city: 'Ibiza' } */

/* console.log(robin) */

// 3
let chip = {
    address: { city: "Disneyland" }
}

let dale = {
    address: {
        city: chip.address.city
    }
}

// 4

let ilana = {
    address: { city: 'New York' }
}

/* let place = ilana.address
place = { city: 'Boulder' }
 */
/* console.log(ilana) */

// 5

let rick = {
    address: { city: 'C-137' }
}

let morty = {
    address: rick.address
}

/* rick.address.city = 'talula' */
rick.addess = { city: 'talula' }

/* console.log(morty) */

// 6

let daria = {
    address: { city: 'Lawndale' }
}

let place = daria.address
/* place.city = 'LA' */
daria.address = { city: 'LA' }

/* console.log(place) */

// 7

let walter = {
    address: { city: 'Albuquerque' }
}

let gustavo = {
    address: walter.address
}

walter = {
    address: { city: 'Manila' }
}

/* console.log(gustavo) */

// 8

/* let dipper = {
    address: {
        city: { name: 'Gravity Falls' }
    }
}

let mabel = {
    address: dipper.address
}

 */

// 9

let dipper = {
    address: {
        city: { name: 'Gravity Falls' }
    }
}

let mabel = {
    address: dipper.address
}

/* dipper = {
    address: {
        city: {
            name: 'Land of Ooo'
        }
    }
} */

dipper.address.city = {
    name: 'Land of Ooo'
}

console.log(mabel)