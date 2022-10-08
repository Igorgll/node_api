import { config } from "dotenv";
config();

export default {
  port: 5432 || 4000, //If port exists use it, if not, use 4000
  dbUser: "wuomzdwowzezce" || process.env.DB_USER,
  dbPassword:
    "bdac3c72f51b1bdd3f50a67a569b5d6986944e129ab5ab939004e8525f7b039a" || "",
  dbServer: "ec2-18-209-78-11.compute-1.amazonaws.com" || "",
  dbDatabase: "dbmlmhscum5b33" || "",
};
