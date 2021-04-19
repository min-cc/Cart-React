var initialState = [
    {
        id : 1,
        name :'Iphone 7 Plus',
        image : 'http://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/7-plus/thumbs/(600x600)_crop_7_plus_red_800x800.jpg',
        description : 'Apple',
        price : 500,
        inventory : 10,
        rating  : 3
    },
    {
        id : 2,
        name :'Samsung Galaxy',
        image : 'https://dienmaythienhoa.vn/static/images/4.%20hinh%20sp/SAMSUNG-SM-G980FZADXXV-S20-hong--.jpg',
        description : 'Samsung',
        price : 400,
        inventory : 15,
        rating  : 4
    },
    {
        id : 3,
        name :'Oppo',
        image : 'https://img.router-switch.com/media/customoptions/12/1/4/oppo-reno3-5g-phone-blue-starry-night.jpg',
        description : 'Oppo',
        price : 300,
        inventory : 5,
        rating  : 5
    }
];

const products =(state=initialState, action)=>{
    switch(action.type){
        default : return [...state]
    }
}


export default products;