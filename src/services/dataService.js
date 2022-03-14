var catalog=[
    {
        _id:"fender_strat",
        title:"Fender Stratocaster",
        price:449.99,
        stock:3,
        image:"IMG-1.jpg"
    },
    {
        _id:"gibson_lespaul",
        title:"Gibson Les Paul",
        price:499.99,
        stock:2,
        image:"IMG-2.jpg"
    },
    {
        _id:"fender_jazzmstr",
        title:"Fender Jazzmaster",
        price:479.99,
        stock:2,
        image:"IMG-3.jpg"

    },
    {
        _id:"guitar_strap",
        title:"Guitar Strap",
        price:14.99,
        stock:10,
        image:"IMG-4.jpg"

    },{
        _id:"guitar_strings",
        title:"Guitar Strings",
        price:4.99,
        stock:30,
        image:"IMG-5.jpg"

    }
];


class DataService{

    getCatalog(){
        //retrieve the data from the server 
        // var catalog = request();

        //mock the data
        return catalog;
    }

}

export default DataService;