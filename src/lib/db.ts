import { createClient, type Client } from "@libsql/client";

export class Database {
  private static _instance: Database;
  private client: Client;

  private constructor() {
    // These props should be env vars
    this.client = createClient({
      url: "libsql://cole-personal-jlanders2.turso.io",
      authToken:
        "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1NDY2MjgsImlkIjoiMzk5ZTljN2UtMDRiYy00YjBhLTg5ZGQtYzAzMDUwZmM3MDYyIn0.E3cAn9_uXNGyVyQ7z4Lr8l6odbEytqVh7MhYkyDbqqArBOl3vrSPHDr8xTNQ43a6AXsHGGWk81lWaK9lztrYBw",
    });
  }

  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database();
    }

    return Database._instance;
  }

  public async getUsers(): Promise<void> {
    this.client.execute("SELECT * FROM users").then((value) => {
      console.log(value);
    });
  }
}
