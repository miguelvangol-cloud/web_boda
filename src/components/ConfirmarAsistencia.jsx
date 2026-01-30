import React, { useState, useEffect, useRef } from 'react';
import sadEmoji from '../assets/sad-emoji.png';

export default function ConfirmarAsistencia() {
  const [formData, setFormData] = useState({
    attendance: null, // 'yes', 'no'
    accompaniment: null, // 'yes', 'no'
    names: '', // User's name
    companionName: '', // Companion's name
    allergies: '',
    comments: ''
  });

  const [visibleSteps, setVisibleSteps] = useState(['attendance']);
  const [activeEffect, setActiveEffect] = useState(null); // 'sad' or 'fireworks'
  const [fireworks, setFireworks] = useState([]);
  const bottomRef = useRef(null);

  // Scroll to the latest step when it appears
  useEffect(() => {
    if (visibleSteps.length > 0) {
      const latestStep = visibleSteps[visibleSteps.length - 1];
      const element = document.getElementById(`step-${latestStep}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [visibleSteps]);

  const handleAttendance = (choice) => {
    setFormData(prev => ({ ...prev, attendance: choice }));
    if (choice === 'yes') {
      if (!visibleSteps.includes('accompaniment')) {
        setTimeout(() => setVisibleSteps(prev => [...prev, 'accompaniment']), 300);
      }
    } else {
      setVisibleSteps(['attendance', 'farewell-no']);
      triggerEffect('sad');
    }
  };

  const triggerEffect = (type) => {
    setActiveEffect(type);
    if (type === 'fireworks') {
      const newFireworks = Array.from({ length: 40 }).map((_, i) => ({
        id: Date.now() + i,
        left: 0 + Math.random() * 100,
        top: 10 + Math.random() * 70,
        color: ['#B78646', '#708238', '#CBB895', '#FFD700', '#FFFFFF'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 4
      }));
      setFireworks(newFireworks);
    }
    setTimeout(() => {
      setActiveEffect(null);
      setFireworks([]);
    }, 10000); // Party lasts 10 seconds
  };

  const handleAccompaniment = (choice) => {
    setFormData(prev => ({ ...prev, accompaniment: choice }));
    if (!visibleSteps.includes('names')) {
      setTimeout(() => setVisibleSteps(prev => [...prev, 'names']), 300);
    }
  };

  const handleNamesSubmit = (e) => {
    e.preventDefault();
    if (formData.names.trim()) {
      if (formData.accompaniment === 'yes' && !visibleSteps.includes('companionName')) {
        setVisibleSteps(prev => [...prev, 'companionName']);
      } else if (formData.accompaniment === 'no' && !visibleSteps.includes('allergies')) {
        setVisibleSteps(prev => [...prev, 'allergies']);
      }
    }
  };

  const handleCompanionNameSubmit = (e) => {
    e.preventDefault();
    if (formData.companionName.trim() && !visibleSteps.includes('allergies')) {
      setVisibleSteps(prev => [...prev, 'allergies']);
    }
  };

  const handleAllergiesSubmit = (e) => {
    e.preventDefault();
    if (!visibleSteps.includes('submit')) {
      setVisibleSteps(prev => [...prev, 'submit']);
      // Delay fireworks until the final card animation is mostly done
      setTimeout(() => triggerEffect('fireworks'), 130);
    }
  };

  return (
    <section className="confirm-section pt-12 pb-40 min-h-screen">
      <div className="container max-w-4xl mx-auto px-4">
        <header className="form-header-elegant text-center">
          <h2 className="assist-title-large" style={{ viewTransitionName: 'assist-title' }}>
            ¿Nos acompañarás en nuestro día?
          </h2>
        </header>

        <div className="form-sequential-container">
          
          {/* STEP 1: Attendance */}
          <div id="step-attendance" className="form-step-block fade-in">
            {formData.attendance === null ? (
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                <button onClick={() => handleAttendance('yes')} className="btn-elegant-choice primary">¡Claro que sí!</button>
                <button onClick={() => handleAttendance('no')} className="btn-elegant-choice outline">No podré asistir</button>
              </div>
            ) : (
            <div className="form-answer-display fade-in text-center">
                <span className="form-answer-value">
                  {formData.attendance === 'yes' ? '¡Claro que sí!' : 'No podré asistir'}
                </span>
                <button 
                  onClick={() => { 
                    setFormData({ 
                      attendance: null, accompaniment: null, names: '', companionName: '', 
                      allergies: '', comments: '' 
                    }); 
                    setVisibleSteps(['attendance']); 
                  }} 
                  className={`btn-change-subtle ${visibleSteps.includes('submit') ? 'is-hidden' : ''}`}
                >
                  Cambiar
                </button>
              </div>
            )}
          </div>

          {/* FAREWELL NO */}
          {visibleSteps.includes('farewell-no') && (
            <div id="step-farewell-no" className="form-step-block is-final-step fade-in">
              <div className="form-final-block">
                <p className="final-title-elegant">
                  Lo sentimos mucho
                </p>
                <p className="final-text-elegant">
                  Te vamos a echar de menos.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Accompaniment */}
          {visibleSteps.includes('accompaniment') && (
            <div id="step-accompaniment" className="form-step-block fade-in">
              <label className="form-label-elegant text-2xl font-heading text-verde-oliva-oscuro block text-center mb-6">
                ¿Vendrás acompañado?
              </label>
              
              {formData.accompaniment === null ? (
                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                  <button onClick={() => handleAccompaniment('yes')} className="btn-elegant-choice primary">Sí, iré con alguien</button>
                  <button onClick={() => handleAccompaniment('no')} className="btn-elegant-choice outline">Iré solo/a</button>
                </div>
              ) : (
                <div className="form-answer-display text-center">
                  <span className="form-answer-value">
                    {formData.accompaniment === 'yes' ? 'Sí, iré con alguien' : 'Iré solo/a'}
                  </span>
                  <button 
                    onClick={() => { 
                      setFormData(prev => ({ ...prev, accompaniment: null, names: '', companionName: '', allergies: '' })); 
                      setVisibleSteps(['attendance', 'accompaniment']); 
                    }} 
                    className={`btn-change-subtle ${visibleSteps.includes('submit') ? 'is-hidden' : ''}`}
                  >
                    Cambiar
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: User Name */}
          {visibleSteps.includes('names') && (
            <div id="step-names" className="form-step-block fade-in">
              <label className="form-label-elegant">
                Dinos tu nombre completo
              </label>
              {(formData.accompaniment === 'yes' ? visibleSteps.includes('companionName') : visibleSteps.includes('allergies')) ? (
                <div className="form-answer-display text-center">
                  <span className="form-answer-value">{formData.names}</span>
                  <button 
                    onClick={() => { 
                      setFormData(prev => ({ ...prev, names: '', companionName: '', allergies: '' })); 
                      setVisibleSteps(['attendance', 'accompaniment', 'names']); 
                    }} 
                    className={`btn-change-subtle ${visibleSteps.includes('submit') ? 'is-hidden' : ''}`}
                  >
                    Cambiar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNamesSubmit} className="w-full max-w-3xl mx-auto">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={formData.names}
                      onChange={(e) => setFormData(prev => ({ ...prev, names: e.target.value }))}
                      className="form-input-elegant w-full"
                      placeholder="Nombre y apellidos..."
                      required
                      autoFocus
                    />
                    <div className="input-underline"></div>
                  </div>
                  <button type="submit" className="btn-elegant-next mt-6">Siguiente paso</button>
                </form>
              )}
            </div>
          )}

          {/* STEP 4: Companion Name (Conditional) */}
          {visibleSteps.includes('companionName') && (
            <div id="step-names-companion" className="form-step-block fade-in">
              <label className="form-label-elegant">
                ¿Cuál es el nombre de tu acompañante?
              </label>
              {visibleSteps.includes('allergies') ? (
                <div className="form-answer-display text-center">
                  <span className="form-answer-value">{formData.companionName}</span>
                  <button 
                    onClick={() => { 
                      setFormData(prev => ({ ...prev, companionName: '', allergies: '' })); 
                      setVisibleSteps(['attendance', 'accompaniment', 'names', 'companionName']); 
                    }} 
                    className={`btn-change-subtle ${visibleSteps.includes('submit') ? 'is-hidden' : ''}`}
                  >
                    Cambiar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCompanionNameSubmit} className="w-full max-w-3xl mx-auto">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={formData.companionName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companionName: e.target.value }))}
                      className="form-input-elegant w-full"
                      placeholder="Nombre y apellidos..."
                      required
                      autoFocus
                    />
                    <div className="input-underline"></div>
                  </div>
                  <button type="submit" className="btn-elegant-next mt-6">Siguiente paso</button>
                </form>
              )}
            </div>
          )}

          {/* STEP 5: Allergies (Formerly Step 6) */}
          {visibleSteps.includes('allergies') && (
            <div id="step-allergies" className="form-step-block fade-in">
              <label className="form-label-elegant">
                {formData.accompaniment === 'yes' 
                  ? 'Si tenéis alguna intolerancia/alergia o seguís una dieta especial contádnoslo:' 
                  : 'Si tienes alguna intolerancia/alergia o sigues una dieta especial cuéntanoslo:'}
              </label>
              {visibleSteps.includes('submit') ? (
                <div className="form-answer-display text-center">
                  <span className="form-answer-value">
                    {formData.allergies || 'Ninguna'}
                  </span>
                  <button 
                    onClick={() => { 
                      setVisibleSteps(['attendance', 'accompaniment', 'names', 'companionName', 'allergies']); 
                    }} 
                    className={`btn-change-subtle ${visibleSteps.includes('submit') ? 'is-hidden' : ''}`}
                  >
                    Cambiar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAllergiesSubmit} className="w-full max-w-3xl mx-auto">
                  <textarea 
                    value={formData.allergies}
                    onChange={(e) => setFormData(prev => ({ ...prev, allergies: e.target.value }))}
                    className="form-input-elegant w-full min-h-[300px] py-6 px-4 text-xl leading-relaxed"
                    placeholder="Ej: Celíaco, alérgico a los frutos secos, vegano..."
                  />
                  <button type="submit" className="btn-elegant-submit mt-10">Confirmar Asistencia</button>
                </form>
              )}
            </div>
          )}

          {/* FINAL SUCCESS */}
          {visibleSteps.includes('submit') && (
            <div id="step-submit" className="form-step-block is-final-step fade-in">
              <div className="form-final-block">
                <p className="final-title-elegant">¡Todo listo!</p>
                <p className="final-text-elegant">
                  {formData.accompaniment === 'yes'
                    ? 'Vuestra confirmación ha sido recibida correctamente.'
                    : 'Tu confirmación ha sido recibida correctamente.'}
                  <br/>
                  {formData.accompaniment === 'yes'
                    ? '¡Estamos deseando veros y celebrar juntos nuestro gran día!'
                    : '¡Estamos deseando verte y celebrar juntos nuestro gran día!'}
                </p>
              </div>
            </div>
          )}

          <div className="h-20" />
        </div>
      </div>

      {/* Animation Effects Overlay */}
      {activeEffect === 'sad' && (
        <div className="effect-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="emoji-particle"
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0
              }}
            >
              <img src={sadEmoji} alt="Sad" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      )}

      {activeEffect === 'fireworks' && (
        <div className="effect-container">
          {fireworks.map((fw) => (
            <div 
              key={fw.id} 
              className="firework-burst" 
              style={{ 
                left: `${fw.left}%`, 
                top: `${fw.top}%`,
                animationDelay: `${fw.delay}s` 
              }}
            >
              {[...Array(25)].map((_, j) => {
                const angle = (j / 25) * 2 * Math.PI;
                const dist = 120 + Math.random() * 180; // Even bigger for fewer particles
                const size = 3 + Math.random() * 6; // slightly larger for visibility
                return (
                  <div 
                    key={j} 
                    className="firework-particle"
                    style={{
                      backgroundColor: fw.color,
                      width: `${size}px`,
                      height: `${size}px`,
                      '--dx': `${Math.cos(angle) * dist}px`,
                      '--dy': `${Math.sin(angle) * dist}px`,
                      animationDelay: `${fw.delay + Math.random() * 0.4}s`
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
