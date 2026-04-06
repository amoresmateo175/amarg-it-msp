export default function Plans() {
  return (
    <section id="plans" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Managed IT Service Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Essential</h3>
            <ul className="text-left space-y-2 text-neutral mb-6">
              <li>✔ Remote Support</li>
              <li>✔ Monitoring</li>
              <li>✔ Updates</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow border-2 border-accent scale-105">
            <h3 className="text-xl font-bold mb-4">Professional</h3>
            <ul className="text-left space-y-2 text-neutral mb-6">
              <li>✔ 24/7 Support</li>
              <li>✔ Security</li>
              <li>✔ Backup</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <ul className="text-left space-y-2 text-neutral mb-6">
              <li>✔ Advanced Security</li>
              <li>✔ Compliance</li>
              <li>✔ vCIO</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}