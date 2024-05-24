export type Schema = {
  body: { markdown: string };
  posts: {
    title: string;
    createdAt: number;
    updatedAt: number;
    number: number;
  }
}
