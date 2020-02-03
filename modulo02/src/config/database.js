module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
