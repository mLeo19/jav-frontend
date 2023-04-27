import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "j9kbjzf5",
  dataset: "production",
  apiVersion: "2023-04-27",
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);