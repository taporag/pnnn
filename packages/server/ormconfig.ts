module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "tanjim",
    "password": "tanjim12345",
    "database": "dhmiddleware_dev",
    "entities": ["dist/**/entities/*.ts"],
    "migrationsTableName": "custom_migration_table",
    "migrations": ["dist/migration/*.js"],
    "cli": {
        "migrationsDir": "migration"
    }
}