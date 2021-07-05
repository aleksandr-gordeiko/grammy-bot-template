import {// Import necessary reply_codes
} from './reply_codes';

import { connect, connection } from 'mongoose';

const url: string = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
let db: typeof import('mongoose');

const connectDB = async (): Promise<void> => {
  try {
    db = await connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (err) {
    throw new Error(`DB connection error: ${err}`);
  }
};

const closeConnection = async (): Promise<void> => {
  try {
    await connection.close();
  } catch (err) {
    throw new Error('DB connection closure fail');
  }
};

// Your db interaction functions here

export {
  connectDB,
  closeConnection,
  // Export your db interaction functions
};
