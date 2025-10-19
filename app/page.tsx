import Image from "next/image";

export default function Home() {
  const images = [
    { id: 1, src: "/images/photo1.jpg", alt: "Photo 1" },
    { id: 2, src: "/images/photo2.jpg", alt: "Photo 2" },
    { id: 3, src: "/images/photo3.jpg", alt: "Photo 3" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Simple Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.id} className="border rounded shadow p-2 bg-white">
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              className="object-cover rounded"
            />
            <p className="text-center mt-2">{img.alt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
