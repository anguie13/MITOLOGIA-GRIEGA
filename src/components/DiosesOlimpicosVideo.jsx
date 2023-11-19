import React from "react";
import { Link } from "react-router-dom";

function DiosesOlimpicosVideo({ url_video = "", link_to = "" }) {
  return (
    <div>
      <div className="video-container">
        <video controls width="800" height="600">
          <source src={url_video} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>

      <div className="btn-video">
        <Link to={link_to}>
          <button>Anterior</button>
        </Link>
        <Link to="/dioses_olimpo">
          <button>Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default DiosesOlimpicosVideo;
