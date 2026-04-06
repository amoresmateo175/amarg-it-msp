export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          IT Services for Toronto Businesses
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <article>
            <h3 className="text-xl font-semibold mb-2">Managed IT Services</h3>
            <p className="text-neutral">
              24/7 monitoring and proactive support to prevent issues before
              they impact your business.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-neutral">
              Protect your business from ransomware, phishing, and data breaches.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-neutral">
              Microsoft 365 and cloud infrastructure optimized for growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}