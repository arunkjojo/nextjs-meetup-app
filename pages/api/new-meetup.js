// api/new-meetup
import {MongoClient} from 'mongodb'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;
        // console.log(data);
        const client = await MongoClient.connect(
            "mongodb+srv://DevAJoin:DevAJoin2786@cluster0.slfxf.mongodb.net/meetups?retryWrites=true&w=majority"
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        // console.log(result);
        client.close();

        res.status(201).json({ massage: 'Meetup Insterted!' });

        // res.status(200).json({ massage: "Hi POST API Wornking" });
    }
    // if (req.method === 'GET') {
    //     res.status(200).json({ massage: 'Hi GET API Wornking' });
    // }
}