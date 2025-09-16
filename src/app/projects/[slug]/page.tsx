import Image from "next/image";

const projectDetails: Record<string, { title: string; desc: string; img: string }> = {
  whooshbus: {
    title: "WhooshBus",
    desc: "A full-stack Next.js bus booking platform with authentication, seat booking, and real-time updates.",
    img: "/projects/whooshbus.png",
  },
  "mini-ecommerce": {
    title: "Mini E-commerce",
    desc: "A small-scale e-commerce demo app with product pages, cart functionality, and responsive UI.",
    img: "/projects/ecommerce.png",
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug];

  if (!project) return <p className="p-6">Project not found.</p>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.img}
        alt={project.title}
        width={800}
        height={500}
        className="rounded-lg shadow mb-6"
      />
      <p className="text-lg text-muted-foreground">{project.desc}</p>
    </section>
  );
}
