import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URI = `mongodb://kartik:18082002kk@ac-ixe6cgj-shard-00-00.ucpckdi.mongodb.net:27017,ac-ixe6cgj-shard-00-01.ucpckdi.mongodb.net:27017,ac-ixe6cgj-shard-00-02.ucpckdi.mongodb.net:27017/?ssl=true&replicaSet=atlas-o32602-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;