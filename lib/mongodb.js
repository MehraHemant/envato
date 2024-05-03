import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let db;

const connectDB = async () => {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('admin');
  }
  return db;
};

const getDB = () => {
  if (!db) {
    throw new Error('Must connect to MongoDB before calling this function');
  }
  return db;
};

export { connectDB, getDB };

