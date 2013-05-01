
exports.db = {
  connection: "mongodb://localhost/wtmpl",
  session: {
    host: "localhost",
    port: 27017,
    dbName: "wtmpl",
    collection: "sessions",
    serverOptions: { auto_reconnect: true, native_parser:true },
    dbOptions: {}
  }
};