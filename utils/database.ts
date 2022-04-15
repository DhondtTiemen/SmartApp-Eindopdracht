import { openDatabase, SQLError, SQLResultSet, SQLTransaction, WebSQLDatabase } from "expo-sqlite"
import uuid from 'react-native-uuid';

const databaseName: string = "sneakerdb"

//Database openen
//Transaction function
export const transaction = (name: string = databaseName): Promise<SQLTransaction> => {
    const db: WebSQLDatabase = openDatabase(name);

    return new Promise((resolve, reject) => 
        db.transaction(
            (tx: SQLTransaction) => resolve(tx),
            (txError: SQLError) => reject(txError),
        ),
    )
}

//Statement function
export const statement = (tx: SQLTransaction, sql: string, params?: any[] | undefined): Promise<SQLResultSet> => {
    return new Promise((resolve, reject) => {
        tx.executeSql(
            sql, 
            params,
            (tx: SQLTransaction, res: SQLResultSet) => resolve(res),
            (tx: SQLTransaction, error: SQLError) => {
                reject(error)
                return false
            },
        )
    })
}

//Fill database
export const dummyData = async () => {
    console.log('Dummy data uitvoeren');

    //Tabel verwijderen
    console.log('Tabel verwijderen');
    const tx0: SQLTransaction = await transaction();
    const del: SQLResultSet | void = await statement(
        tx0,
        `DROP TABLE IF EXISTS 'tblSneaker';`
    )

    //Table aanmaken
    console.log('Tabel aanmaken');
    const tx: SQLTransaction = await transaction();
    const res: SQLResultSet | void = await statement(
        tx,
        `CREATE TABLE IF NOT EXISTS 'tblSneaker' (id integer primary key autoincrement, brand text, name text, price double, url text, description text, reminder boolean, releaseDate text, inCollection boolean)`,
    )
    console.log(res);

    //Data toevoegen
    console.log('Data aanmaken');
    const tx2: SQLTransaction = await transaction();
    const date: string = new Date().toDateString();
    // console.log("Datum: " + date);
    const insert: SQLResultSet | void = await statement(
        tx2,
        `INSERT INTO 'tblSneaker' (id, brand, name, price, url, description, reminder, releaseDate, inCollection) VALUES ('12345', 'Nike', 'Air Max 95', 175, 'https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/702757f21e44e28d79a9ce9419896c5e_1635268850.jpeg', 'Virgil Abloh‘s passing is still difficult to grasp, as he left such an impression on the world of sneakers as well as fashion. Nike, like many of us, mourns the late designer, and they’re soon to pay tribute to his legacy with the official release of the Off-White x Nike Blazer Low.', false, '${date}', true)`,
    )
    console.log(insert);
    const tx4: SQLTransaction = await transaction();
    const date2: string = new Date().toDateString();
    // console.log("Datum: " + date);
    const insert2: SQLResultSet | void = await statement(
        tx4,
        `INSERT INTO 'tblSneaker' (id, brand, name, price, url, description, reminder, releaseDate, inCollection) VALUES ('456789', 'Nike', 'Blazor Mid "77 Jumbo', 110, 'https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/d4ef486a9a0aff0c03387db9d60b97ec_1645727510.jpeg', 'Virgil Abloh‘s passing is still difficult to grasp, as he left such an impression on the world of sneakers as well as fashion. Nike, like many of us, mourns the late designer, and they’re soon to pay tribute to his legacy with the official release of the Off-White x Nike Blazer Low.', false, '${date2}', true)`,
    )
    console.log(insert2);

    //Data bekijken
    console.log('Data bekijken');
    const tx3: SQLTransaction = await transaction();
    const read: SQLResultSet | void = await statement(
        tx3,
        `SELECT * FROM 'tblSneaker'`,
    )
    console.log(read);
}