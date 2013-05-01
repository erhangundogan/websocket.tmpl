
exports.db = {
  connection: "mongodb://localhost/siteTemplate",
  session: {
    host: "localhost",
    port: 27017,
    dbName: "siteTemplate",
    collection: "sessions",
    serverOptions: { auto_reconnect: true, native_parser:true },
    dbOptions: {}
  }
};