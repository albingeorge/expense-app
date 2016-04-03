module.exports = {
    "db_URL": "mongodb://" + (process.env.DB_1_PORT_27017_TCP_ADDR || "localhost") + ":27017/expensedb"
}