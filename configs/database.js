import { MongoClient } from "mongodb";

export const client = new MongoClient(
  "mongodb+srv://namddp2000:Namhuy.1@namddp.gfdrjtd.mongodb.net/test"
);

export const inventories = client.db("baitest").collection("Inventory");
export const orders = client.db("baitest").collection("Order");
export const users = client.db("baitest").collection("Users");
