import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "db_contacts_croo_user",
  password: "8wqhzQZ10UiV27TPIJ4Lh8Cs4yRwQm8r",
  database: "db_contacts_croo",
  host: "dpg-cv7mima3esus73dc4ai0-a.oregon-postgres.render.com",
  port: 5432,
  dialectOptions: {
    ssl: true,
  },
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

connectToDatabase();

export default sequelize;
