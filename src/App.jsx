import { useState } from 'react'
import './App.css'
import foto1 from './fotos/Marco floral transparente rosa y dorado.png'
import foto2 from './fotos/Marco dorado barroco simétrico.png'
import foto3 from './fotos/Marco floral simétrico en oro y lirios rosas.png'
import Countdown from './Countdown';
import { MousePointer2, MapPin, MessageCircle, Gift } from 'lucide-react';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpened) {
    return (
      <div className="entrance-screen">
        <h1 className="title">Sammy Dakota</h1>
        <p className="subtitle">XV AÑOS</p>
        <p className="welcome-text">Esta invitación es para:</p>
        <h2 className="guest-name">Hector Stiven Vigoya</h2>
        <button onClick={() => setIsOpened(true)} className="open-button">
          Abrir Invitación
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Fondo: imágenes en secuencia */}
      <div className="background">
        <img src={foto1} alt="Marco 1" className="bg-img" />
        <img src={foto2} alt="Marco 2" className="bg-img bg-img-2" />
        <img src={foto3} alt="Marco 3" className="bg-img bg-img-3" />
      </div>

      {/* Contenido: texto encima */}
      <div className="content">
        <h1 className="title">Sammy Dakota</h1>
        <h2 className="subtitle">XV AÑOS</h2>
        <p className="invitation-text">
          Celebro mis XV años con la alegría de compartir este momento especial con quienes más quiero. 
          Te espero para hacer de esta noche, un recuerdo inolvidable.
        </p>
        <div className="date">
          <span className="date-text">09 de enero de 2027</span>
          <span className="time-text">7:00 pm</span>
        </div>
        
        <Countdown />

        <div className="instructions">
          <p>Descubre los detalles de mi celebración</p>
          <MousePointer2 className="select-icon" size={28} />
        </div>

        <div className="functions">
          <a href="https://www.google.com/maps?q=4.105971813201904,-73.55353546142578&z=17&hl=es" target="_blank" rel="noopener noreferrer" className="function-link">
            <div className="icon-wrapper">
              <MapPin size={30} />
            </div>
            <p className="artistic-text">Ubicación</p>
          </a>
          <a href="https://wa.me/573143194326" target="_blank" rel="noopener noreferrer" className="function-link">
            <div className="icon-wrapper">
              <MessageCircle size={30} />
            </div>
            <p className="artistic-text">Asistencia</p>
          </a>
          <a href="#" className="function-link">
            <div className="icon-wrapper">
              <Gift size={30} />
            </div>
            <p className="artistic-text">Regalos</p>
          </a>
        </div>
        
        <div className="closing-info">
          <p className="dress-code">Código de vestimenta: Elegante</p>
          <p className="closing-message">¡Esperamos contar con tu presencia en este día tan especial!</p>
        </div>
      </div>
    </div>
  )
}

export default App
