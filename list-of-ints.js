function highest_product(list_of_ints){

    //reverse sort
    var l = list_of_ints.sort((a,b) => b-a);

    return l[0]*l[1]*l[2];
}