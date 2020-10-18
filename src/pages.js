const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];

      /* if ternario javascript */
      orphanage.open_on_weekends =
        orphanage.open_on_weekends == 1 ? true : false;
      /*quebra o array de imagens */
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(erro);
      return res.send("Erro no banco de dados!");
    }
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    try {
      //salvar um orfanato
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      //redirecionar
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro! Impossível salvar no banco de dados");
    }
  },
  async listOrphanages(req, res) {
    const db = await Database;
    const results = await db.all("SELECT * FROM orphanages");
    
    return res.render("list-orphanages", { listOrphanages: results });
  },
  async deleteOrphanage(req, res) {
    const id = req.body.id;
    const db = await Database;
    await db.run(`DELETE FROM orphanages WHERE id = "${id}"`);

    return res.redirect("/orphanages");
  }
};
