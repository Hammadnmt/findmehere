import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectDetails: Record<string, { title: string; desc: string; img: string[] }> = {
  whooshbus: {
    title: "WhooshBus",
    desc: "A full-stack Next.js bus booking platform with authentication, seat booking, and real-time updates.",
    img: ["/w1.png", "/w2.png", "/w3.png", "/w4.png", "/w5.png"], // ✅ multiple images
  },
  "mini-ecommerce": {
    title: "Mini E-commerce",
    desc: "A small-scale e-commerce demo app with product pages, cart functionality, and responsive UI.",
    img: ["/ecom.png", "/ecom3.png", "/ecom4.png", "/ecom2.png"], // ✅ multiple images
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug];

  if (!project) return <p className="p-6">Project not found.</p>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {/* ✅ Carousel */}
      <Carousel className="w-full max-w-3xl mx-auto mb-6">
        <CarouselContent>
          {project.img.map((src, idx) => (
            <CarouselItem key={idx}>
              <div className="flex justify-center">
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={800}
                  height={500}
                  className="rounded-lg shadow"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="text-lg text-muted-foreground">{project.desc}</p>
    </section>
  );
}
