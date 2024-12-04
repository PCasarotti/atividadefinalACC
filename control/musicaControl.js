const Musica = require("../model/entidades/musica");
const Database = require("../model/database");

class MusicaControl {
    
    constructor() {
        const db = new Database();
        this.musica = new Musica(db);
    }
    
    async getAll(req, res) {
        try {
            const result = await this.musica.getAll()
            return res.status(200).json(result)
        } catch (error) {
            console.log("Erro ao buscar musicas" + error)
            res.status(500).json({ error: "Erro ao buscar musicas" })
        }

    }

    async filtrar(req, res) {
        const filtro = req.body;
        try {
          const result = await this.musica.filtrar(filtro);
          return res.status(200).json(result);
        } catch (error) {
          console.error('Error during filtering:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }


    async getById(req, res) {
        const id = req.params.id;
        try {
            const result = await this.musica.getById(id)
            if (result) {
                return res.status(200).json(result)
            } else {
                res.status(404).json({ error: 'Musica não encontrada' })
            }
        } catch (error) {
            console.log("Erro ao buscar musicas" + error)
            res.status(500).json({ error: "Erro ao buscar musicas" })
        }

    }

}

module.exports = MusicaControl;