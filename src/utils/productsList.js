const productsList = [
    {
        id: 1,
        category: "Nuts",
        product: "Almonds",
        price: 95.30,
        presentation: ["100g","250g","500g"],
        stock:"15 kg",
        image: "https://static-blogs.mujerhoy.com/adelgazar/wp-content/uploads/sites/9/2018/10/almendras-e1539679036813-1024x848.jpg"
    },
    {
        id: 2,
        category: "Nuts",
        product: "Walnuts",
        price: 87.50,
        presentation: ["100g","250g","500g"],
        stock:"15 kg",
        image: "https://i.blogs.es/220479/walnut-4186311_1280/840_560.jpeg"
    },
    {
        id: 3,
        category: "Nuts",
        product: "Peanut",
        price: 43.30,
        presentation: ["100g","250g","500g"],
        stock:"20 kg",
        image: "https://www.saborusa.com/uy/wp-content/uploads/sites/13/2019/10/Sabias-que-el-mani-es-un-super-alimento-Foto-destacada.png"
    },
    {
        id: 4,
        category: "Nuts",
        product: "Pistachio",
        price: 73.80,
        presentation: ["100g","250g","500g"],
        stock:"15 kg",
        image: "https://www.excelenciasgourmet.com/sites/default/files/styles/slideshow_large/public/2020-02/Pistachos-frutos-secos.jpg?itok=lI7v_haV"
    },
    {
        id: 5,
        category: "Nuts",
        product: "Cashew Chestnuts",
        price: 280,
        presentation: ["100g","250g","500g"],
        stock:"20 kg",
        image: "https://www.gemadistribuidora.com.ar/wp-content/uploads/2020/06/D_NQ_NP_758152-MLA42436205666_072020-O.jpg"
    },
    {
        id: 6,
        category: "Flours",
        product: "Wholemeal Flour",
        price: 20,
        presentation: ["100g","250g","500g"],
        stock:"30 kg",
        image: "https://www.manna.ec/wp-content/uploads/2020/04/HARINA-INTEGRAL.jpg"
    },
    {
        id: 7,
        category: "Flours",
        product: "Oat Flour",
        price: 31,
        presentation: ["100g","250g","500g"],
        stock:"30 kg",
        image: "https://cdn.kiwilimon.com/articuloimagen/30227/28429.jpg"
    },
    {
        id: 8,
        category: "Flours",
        product: "Chickpea Flour",
        price: 25,
        presentation: ["100g","250g","500g"],
        stock:"20 kg",
        image: "https://mativate.com.ar/wp-content/uploads/2021/08/Harina-de-garbanzo.jpg"
    },
    {
        id: 9,
        category: "Flours",
        product: "Soybean Flour",
        price: 20,
        presentation: ["100g","250g","500g"],
        stock:"20 kg",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/318/348/products/harina-de-soja_01-3d463e800ec14907c916007941502525-1024-1024.jpg"
    },
    {
        id: 10,
        category: "Flours",
        product: "Pea Flour",
        price: 22,
        presentation: ["100g","250g","500g"],
        stock:"20 kg",
        image: "https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/harina-de-arveja1-57bfda950318ac459c15214074451351-1024-1024.jpg"
    },
    {
        id: 11,
        category: "Seeds",
        product: "Flax Seeds",
        price: 56.50,
        presentation: ["100g", "250g"],
        stock: "10 kg",
        image: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/09/beneficios-de-la-linaza.jpg"
    },
    {
        id: 12,
        category: "Seeds",
        product: "Sesame Seeds",
        price: 92,
        presentation: ["100g", "250g"],
        stock: "10 kg",
        image: "https://mejorconsalud.as.com/wp-content/uploads/2013/10/semillas-sesamo-recipiente.jpg"
    },
    {
        id: 13,
        category: "Seeds",
        product: "Chia Seeds",
        price: 130,
        presentation: ["100g", "250g"],
        stock: "10 kg",
        image: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2021-08/semillas-de-chi%CC%81a%C2%A9iStock.jpg?itok=cFT_i9R9"
    },
    {
        id: 14,
        category: "Seeds",
        product: "Sunflower Seeds",
        price: 53,
        presentation: ["100g", "250g"],
        stock: "10 kg",
        image: "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/beneficios-de-las-semillas-de-girasol-recetas-670x447.jpg"
    },
    {
        id: 15,
        category: "Seeds",
        product: "Poppy Seeds",
        price: 191.20,
        presentation: ["100g", "250g"],
        stock: "10 kg",
        image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/695/products/100-gr-semillas-amapola-adormidera-poppy-seed-reposteria-d_nq_np_786282-mlm29338891018_022019-f1-4d64862c5e7933af3715894710631710-640-0.jpg"
    },
    {
        id: 16,
        category: "Grain",
        product: "Yamaní Rice",
        price: 25,
        presentation: ["100g", "250g","500g"],
        stock:"20 kg",
        image: "https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/04/495257.jpg"
    },
    {
        id: 17,
        category: "Grain",
        product: "Brown Rice",
        price: 25,
        presentation: ["100g", "250g","500g"],
        stock:"20 kg",
        image: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/07/beneficios-del-arroz-integral-1.jpg"
    },
    {
        id: 18,
        category: "Grain",
        product: "Rolled Oats",
        price: 31,
        presentation: ["100g", "250g","500g"],
        stock:"20 kg",
        image: "https://http2.mlstatic.com/D_NQ_NP_739950-MLA28541773602_102018-O.jpg"
    },
    {
        id: 19,
        category: "Grain",
        product: "Quinoa",
        price: 120,
        presentation: ["100g", "250g","500g"],
        stock:"20 kg",
        image: "https://www.cien.adexperu.org.pe/wp-content/uploads/2021/06/quinua-para-exportacion-y-mercado-nacional-D_NQ_NP_908294-MPE26175605618_102017-F-800x445.jpg"
    },
    {
        id: 20,
        category: "Grain",
        product: "Rye",
        price: 52,
        presentation: ["100g", "250g","500g"],
        stock:"20 kg",
        image: "https://www.ngenespanol.com/wp-content/uploads/2018/08/Centeno.jpg"
    },
    {
        id: 21,
        category: "Miscellaneous",
        product: "Caramel Cookies",
        price: 350.30,
        presentation: ["12 units"],
        stock:"20 units",
        image: "https://www.ohmybowl.eu/wp-content/uploads/2019/03/alfajores-de-membrillo-2-1024x683.jpg"
    },
    {
        id: 22,
        category: "Miscellaneous",
        product: "Cereal Bars",
        price: 81.50,
        presentation: ["100g"],
        stock: "50 units",
        image: "https://laverdadonline.com/wp-content/uploads/2020/11/barras-cereal-min-1000x600.jpg"
    },
    {
        id: 23,
        category: "Miscellaneous",
        product: "Cookies",
        price: 85.20,
        presentation: ["250g"],
        stock:"30 units",
        image: "https://i.blogs.es/7a96cb/1366_2000-1/450_1000.jpg"
    },
    {
        id: 24,
        category: "Miscellaneous",
        product: "Muffins",
        price: 53.80,
        presentation: ["100g"],
        stock:"50 units",
        image: "https://www.elmundoeats.com/wp-content/uploads/2019/04/Healthy-Blueberry-Oatmeal-Muffins.jpg"
    },
    {
        id: 25,
        category: "Miscellaneous",
        product: "Sponge Puddings",
        price: 410.20,
        presentation: ["500g"],
        stock:"20 units",
        image: "https://img-global.cpcdn.com/recipes/5d49e9f5f779f838/1200x630cq70/photo.jpg"
    },
    
]

export const singleProduct = {
    id: 25,
        category: "Miscellaneous",
        product: "Sponge Puddings",
        price: 410.20,
        presentation: ["500g"],
        stock:"20 units",
        image: "https://img-global.cpcdn.com/recipes/5d49e9f5f779f838/1200x630cq70/photo.jpg",
        description: "A delicious wholemeal pudding with nuts, sweetened with muscovado sugar and stevia, banana flavor. Perfect for your snacks and breakfasts, and low in calories."
}

export default productsList