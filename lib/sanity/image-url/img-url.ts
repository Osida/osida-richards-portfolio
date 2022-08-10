import {client} from "../client/client";
import imageUrlBuilder from '@sanity/image-url';
import {SanityImageSource} from '@sanity/image-url/lib/types/types';

// Quickly generate image urls from Sanity image records
const builder = imageUrlBuilder(client())

export const urlFor = (source: SanityImageSource) => builder.image(source)