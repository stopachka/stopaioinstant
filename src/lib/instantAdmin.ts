import { init } from "@instantdb/admin";

export type Schema = {
  body: { markdown: string };
  posts: {
    title: string;
    createdAt: number;
    number: number;
  }
}

const APP_ID = "af126e82-c4a8-4bdf-9e1e-8883a6d5ce31";
const db = init<Schema>({
  appId: APP_ID,
  adminToken: process.env.INSTANT_ADMIN_TOKEN!,
});

export default db;
