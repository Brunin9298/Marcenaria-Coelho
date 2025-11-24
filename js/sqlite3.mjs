const sqlite3 = await sqlite3InitModule();

class SQLite3 {
	constructor(filename) {
		this.db = new sqlite3.oo1.DB("/"+filename, "ct");
	}

	exec(sql, mode = "object") {
		let result = [];
		this.db.exec({
			sql: sql,
			rowMode: mode,
			resultRows: result
		});
		return(result);
	}
}

export { SQLite3 };

