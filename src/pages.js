const Database = require('./database/db');

module.exports = {
  index(req, res) {
    return res.render("index");
  },

 async orphanage(req, res) {

  const id = req.query.id

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
      const orphanage = results[0]

      /* if ternario javascript */
      orphanage.open_on_weekends = orphanage.open_on_weekends == 1 ? true : false; 
      /*quebra o array de imagens */
      orphanage.images = orphanage.images.split(",")
      orphanage.firstImage = orphanage.images[0]

      return res.render("orphanage" , { orphanage })

    } catch (error) {
      console.log(erro)
      return res.send('Erro no banco de dados!')
    } 
  },

  async orphanages(req, res) {
    try {
        const db = await Database;
        const orphanages = await db.all("SELECT * FROM orphanages")
        return res.render("orphanages", { orphanages });
      
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  saveOrphanage(req, res) {
      
  }
};
