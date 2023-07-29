const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");

// function readPromise() {
//     db.collection("tasks").findOne()
//     .then(data => {
//         console.log(data);
//     });
// }

async function read() {
    const data = await db.collection("tasks").findOne();
    console.log(data);
}

read();

async function insert(data) {
    const result = await db.collection("tasks").insertOne(data);
    console.log(result)
}

insert({ subject: 'Milk', done: false });
insert({ subject: 'Banana', done: true });

async function updateDone(subject, done) {
    const result = await db.collection('tasks').updateOne(
        {
            subject
        },
        {
            $set: {done}
        }
    );

    console.log(result);
}

updateDone('Orange', false);


async function remove(subject) {
    const result = await db.collection("tasks").deleteOne(subject);
    console.log(result);
}

remove({subject: 'Milk'});