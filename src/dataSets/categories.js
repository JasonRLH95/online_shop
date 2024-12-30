import products from "./products";

const categoriesArr=[
    {
        name:'Laptop',
        header:'מחשבים',
        // logo:products[0].laptop_6
        logo:products[5].image//[0] => laptops
    },
    {
        name:'TV',
        header:'טלוויזיות',
        // logo:products[1].TV_1
        logo:products[8].image//[1] => televisions
    },
    {
        name:"Phone",
        header:"סמארטפונים",
        logo:products[26].image
    },

]
export default categoriesArr;