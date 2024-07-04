function woodCalculator(chairquantity,badquantity,tablequantiy){
    const perchairwood =3;
    const perbedwood =10;
    const pertablerwood =50;

    const chairwood = chairquantity * perchairwood;
    const bedwood = badquantity * perbedwood;
    const tablewood = pertablerwood * tablequantiy;

    const totalwood = chairwood+bedwood+tablewood;
    return totalwood;

}

const totalwood = woodCalculator(1,1,1);
console.log("totalwood required",totalwood);