function get_all_products_of_all_ints_except_at_index(intArray){
    return intArray.map( (el, ii) => {
        const others = JSON.parse(JSON.stringify(intArray));
        const thisInt = others.splice(ii,1);
        return others.reduce((acc, curr)=> acc*curr, 1);
    })
}