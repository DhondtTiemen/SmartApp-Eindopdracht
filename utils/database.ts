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

    // //Tabel verwijderen
    // console.log('Tabel verwijderen');
    // const tx0: SQLTransaction = await transaction();
    // const del: SQLResultSet | void = await statement(
    //     tx0,
    //     `DROP TABLE IF EXISTS 'tblSneaker';`
    // )

    // //Table aanmaken
    // console.log('Tabel aanmaken');
    // const tx: SQLTransaction = await transaction();
    // const res: SQLResultSet | void = await statement(
    //     tx,
    //     `CREATE TABLE IF NOT EXISTS 'tblSneaker' (id integer primary key autoincrement, brand text, name text, price double, url text, description text, reminder boolean, releaseDate text, inCollection boolean)`,
    // )
    // console.log(res);

    //Data toevoegen
    console.log('Data aanmaken');
    const tx2: SQLTransaction = await transaction();
    const date: string = new Date().toLocaleDateString();
    // console.log("Datum: " + date);
    const insert: SQLResultSet | void = await statement(
        tx2,
        `INSERT INTO 'tblSneaker' (id, brand, name, price, url, description, reminder, releaseDate, inCollection) VALUES ('897542', "M&M's x Adidas", 'Forum Low "Yellow"', 150, 'https://sneakernews.com/wp-content/uploads/2022/04/MM-adidads-Forum-Low-Yellow-5.jpg?w=1140', 'Every year, sneaker collaborations get progressively more interesting, merging industries that rarely ever mingled prior. Offerings such as the Dior x Air Jordan 1 and Chunky Dunky, for example, were genre-bending upon reveal, and sneakerheads have since adjusted their expectations. And yet, when you think you’ve seen it all, adidas surprises us with a partnership with M&M… yes, the candy.', false, "23/04/2022", false)`,
    )
    console.log(insert);
    const tx4: SQLTransaction = await transaction();
    const date2: string = new Date().toLocaleDateString();
    // console.log("Datum: " + date);
    const insert2: SQLResultSet | void = await statement(
        tx4,
        `INSERT INTO 'tblSneaker' (id, brand, name, price, url, description, reminder, releaseDate, inCollection) VALUES ('4654832', 'Yeezy', 'Foam Runner "Sulfur"', 90, 'https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/55b6c3e27e3ca36b13badbf4c1a37041_1647527452.jpg', 'Social media often portrays Ye (formerly Kanye West) as both a villain and a genius, with most able to easily separate the Chicago-raised artist’s personal life and work. His fashion, too, is treated the same way, though his fits and designs have become as divisive as the man himself. This is as true of the YZY NSLTD BT as it is the Foam Runner, though the latter has found a dedicated following among fans of adidas Yeezy.', false, "22/04/2022", true)`,
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