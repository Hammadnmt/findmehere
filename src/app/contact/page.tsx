export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-muted-foreground">
        Email:{" "}
        <a href="mailto:hammad.alinmt@gmail.com" className="text-brand-dark underline">
          hammad.alinmt@gmail.com
        </a>
      </p>
      <p className="mt-2">
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/hammadali909" target="_blank" className="text-brand-dark underline">
          linkedin.com/in/hammadali909
        </a>
      </p>
      <p className="mt-2">
        GitHub:{" "}
        <a href="https://github.com/Hammadnmt" target="_blank" className="text-brand-dark underline">
          github.com/Hammadnmt
        </a>
      </p>
    </section>
  );
}
