const  Database = require('./db');
const  saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    
   // await saveOrphanage(db, {
    //    lat: "-8.0612817",
    //    lng: "-34.8996457", 
    //    name: "Lar das meninos",
    //    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //    whatsapp: "9855654552",
    //    images: [

    //        "https://images.unsplash.com/photo-1570662518230-e097e6620e12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&//id=eyJhcHBfaWQiOjF9",

    //        "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&//id=eyJhcHBfaWQiOjF9"

    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    //})

    //console.log(selectedOrphanages)
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")

})

