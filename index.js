let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
};

let john = {
    surname: 'Watson',
    address: sherlock.address
};

// Mutation with side effects
/**
 * With john.address.city = "Malibu", the wire on the left is john.address.city. 
 * We were mutating the city property of the object reachable via john.address. 
 * But the same object was also reachable via sherlock.address. 
 * As a result, we unintentionally mutated shared data.
 */
/* john.address.city = "Malibu" */

// Mutation withtout side effects (mutating another object)
/**
 * With john.address = { city: 'Malibu' }, the wire on the left is john.address. 
 * We are mutating the address property of the object that john points at. 
 * In other words, we are only mutating the object representing John’s data. 
 * This is why sherlock.address.city remains unchanged
 */
/* john.address = { city: 'Malibu' }; */

// No Object Mutation
/**
 * Here, we don’t mutate John’s object at all. 
 * Instead, we reassign the john variable to point at a “new version” of John’s data.
 */
/* john = {
    surname: 'Lennon',
    address: { city: 'Malibu' }
}; */

console.log(sherlock)