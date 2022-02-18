module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "tcit",
      user: "me",
      password: " ",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
