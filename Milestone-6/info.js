const user = {
    id : 5001,
    name  : 'Henry',
    address :{
        street :{
            first : '35/A kochu khet lane ',
            second : 'Third floor',
            third : 'right side'
        },
        postOffice : 'Cantonment',
        city : 'Dhaka'
    }
}


const userFloor = user.address.street.third
console.log(userFloor)