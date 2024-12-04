class Musica {
    
    constructor(db) {
        this.db = db;
    }

    async getAll() {
        const musicas = await this.db.ExecutaComando('SELECT * FROM musica')
        return musicas;
    }

    async filtrar({ codigo }) {
        try {
          const sql = 'SELECT * FROM musica WHERE id = ?';
      
          // Assuming ExecutaComando accepts parameters and returns a promise
          let musicas = await this.db.ExecutaComando(sql, [codigo]);
      
          return musicas;
        } catch (error) {
          console.error(error);
          throw error; // Optionally rethrow the error for the calling code to handle
        }
      }

    async create(dadosMusica) {
        await this.db.ExecutaComandoNonQuery('insert into musica set ?', dadosMusica)
    }

    async update(codigo, dadosMusica) {
        await this.db.ExecutaComandoNonQuery('update musica set ? where id = ?', [dadosMusica, id])
    }

    async getByCodigo(codigo) {
        const result = await this.db.ExecutaComando('SELECT * FROM musica WHERE id = ?', [id]);
        const musica = result[0];
        return musica;
    }
}

module.exports = Musica


