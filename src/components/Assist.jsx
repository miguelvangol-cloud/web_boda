import React, { useState } from "react";

export default function Assist() {
  const [form, setForm] = useState({ name: '', guests: '', attending: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Assist form submitted', form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  function handleAddGoogle(e) {
    e && e.preventDefault();
    const title = 'Boda Celia & Miguel';
    const dates = '20260919/20260920';
    const details = 'Boda en El Cigarral del Ángel, Toledo';
    const location = 'El Cigarral del Ángel, Toledo';
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&ctz=Europe/Madrid`;
    window.open(url, '_blank', 'noopener');
  }

  return (
    <section id="asistencia" className="assist-section" aria-labelledby="assist-title">
      <div className="assist-bg" aria-hidden></div>
      <div className="assist-container">
        <div className="assist-card">
          <div className="assist-deco">✶</div>
          <h2 id="assist-title" className="assist-title">RSVP</h2>
          <form onSubmit={handleSubmit} className="assist-form">
            <label>
              Nombre
              <input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required />
            </label>

            <div className="assist-row">
              <label>
                Número de invitados
                <input name="guests" value={form.guests} onChange={handleChange} placeholder="0" type="number" min="0" />
              </label>
              <label>
                ¿Asistirás?
                <select name="attending" value={form.attending} onChange={handleChange}>
                  <option value="">-- Selecciona --</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>

            <label>
              Email
              <input name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" type="email" />
            </label>

            <label>
              Mensaje
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Alguna nota (opcional)" />
            </label>

            <div className="assist-actions">
              <button type="button" className="assist-calendar" onClick={handleAddGoogle} aria-label="Añadir al calendario">Añadir al calendario</button>
              <button type="submit" className="assist-submit">{sent ? 'Enviado ✓' : 'Enviar mensaje'}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
