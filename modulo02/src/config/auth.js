// Objeto usado para gerar o token
export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
