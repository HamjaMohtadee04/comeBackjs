const numbers=[454,5445,5454,545,45454];

// for (let i=0;i<numbers.length;i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1,name:'xiomi phone',price:4164164},
    {id:2,name:'notebook',price:414141412524264164},
    {id:3,name:'kybd',price:41644141160000004},
    {id:4,name:'aiiiii phone',price:416101041244164},
    {id:5,name:'abudogi phone',price:416525164},
    {id:6,name:'dgfgdfgfd ',price:416525164},
    {id:5,name:'abudogi ',price:41654444425164},
    {id:5,name:'abudogkkki',price:416525164},
    {id:5,name:'abudogidsdda phone',price:416525164},
];
// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products,search){
    const matched =[];
    for (const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products,'phone');
console.log(result);




