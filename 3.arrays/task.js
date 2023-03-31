function compareArrays(arr1, arr2) {

    if(arr1.length !== arr2.length){
        return false;
    }

    if(arr1.every((item, index) => arr2[index] === item
    )){
        return true;
    }else{
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {

    return users.filter((element, index) => users[index].gender === gender).reduce((sum, element, index, arr) => {
        
        sum += arr[index].age;
    
        if(index === arr.length - 1){
            return sum / arr.length;
        }

        return sum;
    }, 0)
}