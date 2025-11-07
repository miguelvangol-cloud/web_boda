export default function RSVPForm() {
  return (
  <section id="rsvp" className="py-16 px-6 bg-ivory">
      <div className="container">
        <div className="card text-center">
          <h2 className="text-3xl mb-6 font-cursive text-gold">Confirma tu asistencia</h2>
          <p className="text-muted mb-4">
            Por favor confirma antes del 15 de marzo de 2026.
          </p>

          <div className="max-w-xl mx-auto border-2 border-gold rounded-lg shadow-sm overflow-hidden ratio-16-9">
            <div className="ratio-inner">
              <iframe
                title="Formulario RSVP"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXX/viewform?embedded=true"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
