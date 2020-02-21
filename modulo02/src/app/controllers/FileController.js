// Carrega o models de upload de avatar
import File from '../models/File';

class FileController {
  // Faz um upload do avatar do usuário
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });
    return res.status(201).json(file);
  }
}

export default new FileController();
