
import { MongoClient, ServerApiVersion } from "mongodb";
import { COLL } from "../utils/constants";

const uri = process.env.ATLAS || "missing";
// const coll = process.env.NODE_ENV !== "dev" ? COLL.testing: COLL.users

/**
 * Main entry for MongoDB connection.
 * @returns 
 */
export async function conn() {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    
    },
    ssl: true,
    tls: true,
  });
  try {
    const conn = await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("deep-code-challenge");
    await db.collection(COLL.users).createIndex({ email: 1 }, { unique: true })

    return conn.db("deep-code-challenge");
  } catch (e) {
    console.error(e);
    throw new Error("Failed to connect");
  }
}

/**
 *   shorthand function for connecting to users collection
 * @returns 
 */
export async function usersColl() {
  return (await conn()).collection(COLL.users);
}