import { init } from "@instantdb/admin";
import { Schema } from "@/lib/types";

const adminDB = init<Schema>({
  appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_ADMIN_TOKEN!,
});

export default adminDB;
