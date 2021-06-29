import {// Import necessary reply_codes
} from './reply_codes';

import { Db } from 'mongodb';

const { MongoClient } = require('mongodb');

const url: string = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`;
let client: typeof MongoClient;
let db: Db;

const connect = async (): Promise<void> => {
  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(process.env.MONGO_DB_NAME);
  } catch (err) {
    throw new Error(`DB connection error: ${err}`);
  }
};

const closeConnection = async (): Promise<void> => {
  try {
    await client.close();
  } catch (err) {
    throw new Error('DB connection closure fail');
  }
};

// Your db interaction functions here

export {
  connect,
  closeConnection,
  // Export your db interaction functions
};
