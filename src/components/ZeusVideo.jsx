import React from "react";
import { Link } from "react-router-dom";

function ZeusVideo() {
  return (
    <div>
      <div className="video-container">
        <video controls width="800" height="600">
          <source src="src/assets/video/Olimpicos_Zeus.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>

      <div className="btn-video">
        <Link to="/zeus">
          <button>Anterior</button>
        </Link>
        <Link to="/dioses_olimpo">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default ZeusVideo;
