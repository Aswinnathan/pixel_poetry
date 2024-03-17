"use client";

import PhotoAlbum from "react-photo-album";

import NextJsImage from "@/components/NextJsImage";
// import photos from "@/components/photos";

const ogphotos = [
  { src: "/gallery/1.jpg", width: 3840, height: 5760 },
  { src: "/gallery/2.jpg", width: 3840, height: 5760 },
  { src: "/gallery/3.jpg", width: 5760, height: 3840 },
  { src: "/gallery/4.jpg", width: 3840, height: 5760 },
  { src: "/gallery/5.jpg", width: 5760, height: 3840 },
  { src: "/gallery/6.jpg", width: 4672, height: 7008 },
  { src: "/gallery/7.jpg", width: 3840, height: 5760 },
  { src: "/gallery/8.jpg", width: 5760, height: 3840 },
  { src: "/gallery/71.jpg", width: 5760, height: 3840 },
  { src: "/gallery/38.jpg", width: 3840, height: 5760 },
];

let photos = ogphotos
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export default function PhotoGallery() {
  console.log(photos);
  return (
    <PhotoAlbum
      layout="masonry"
      renderPhoto={NextJsImage}
      photos={photos}
      // defaultContainerWidth={1200}
      // sizes={{
      //   size: "calc(100vw - 40px)",
      //   sizes: [
      //     { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
      //     { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
      //     { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
      //   ],
      // }}
    />
  );
}
