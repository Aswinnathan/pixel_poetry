import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div>
      {/* <video autoPlay loop muted className="w-full h-screen z-10">
        <source src="/gallery/teaser.mov" type="video/mp4" />
      </video> */}
      <PhotoGallery />
    </div>
  );
}
