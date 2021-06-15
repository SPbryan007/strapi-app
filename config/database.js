module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql-db-1.ct6naw56oc5k.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'smartbus_db'),
        username: env('DATABASE_USERNAME', 'vnefvsee'),
        password: env('DATABASE_PASSWORD', 'Smartbus.bo19'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
