export default function Hero() {
  return (
    <section className="bg-primary text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Managed IT Services in Toronto & GTA
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          AMARG helps businesses stay secure, reduce downtime, and scale with
          reliable IT support and cybersecurity solutions.
        </p>

        <a
          href="#contact"
          className="bg-accent px-8 py-3 rounded font-semibold inline-block hover:opacity-90"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}