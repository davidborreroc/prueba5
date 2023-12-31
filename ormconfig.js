module.exports = {
    type: 'postgres',
    host:  process.env.RDS_HOSTNAME,
    port:  process.env.RDS_PORT,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [/*...*/],
    synchronize: true, // Solo para entornos de desarrollo. No usar en producción.
};
