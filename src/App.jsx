import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Index from "./components/Index";
import Menu from "./components/Menu";
import DiosesOlimpo from "./components/DiosesOlimpo";
import DescripciónDiosesZeus from "./components/DescripciónDiosesZeus";
import DescripciónDiosesHera from "./components/DescripciónDiosesHera";
import DescripciónDiosesPoseidon from "./components/DescripciónDiosesPoseidon";
import DescripciónDiosesAtenea from "./components/DescripciónDiosesAtenea";
import DescripciónDiosesHefesto from "./components/DescripciónDiosesHefesto";
import DescripciónDiosesApolo from "./components/DescripciónDiosesApolo";
import DescripciónDiosesArtemisa from "./components/DescripciónDiosesArtemisa";
import DescripciónDiosesHermes from "./components/DescripciónDiosesHermes";
import DescripciónDiosesAres from "./components/DescripciónDiosesAres";
import DescripciónDiosesAfrodita from "./components/DescripciónDiosesAfrodita";
import DescripciónDiosesDionisio from "./components/DescripciónDiosesDionisio";
import DescripciónDiosesDemeter from "./components/DescripciónDiosesDemeter";
import Zeus from "./components/Zeus";
import Hera from "./components/Hera";
import Poseidon from "./components/Poseidon";
import Atenea from "./components/Atenea";
import Hefesto from "./components/Hefesto";
import Apolo from "./components/Apolo";
import Artemisa from "./components/Artemisa";
import Hermes from "./components/Hermes";
import Ares from "./components/Ares";
import Afrodita from "./components/Afrodita";
import Dionisio from "./components/Dionisio";
import Demeter from "./components/Demeter";
import DiosesOlimpicosVideo from "./components/DiosesOlimpicosVideo";
import OtrosDioses from "./components/OtrosDioses";
import OtrosDiosesCaracteristicas from "./components/OtrosDiosesCaracteristicas";

import Fondo from "./components/fondo";
import PreguntaD from "./components/PreguntaD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dioses_olimpo" element={<DiosesOlimpo />} />
        <Route
          path="/descripcion_dioses_zeus"
          element={<DescripciónDiosesZeus />}
        />
        <Route
          path="/descripcion_dioses_hera"
          element={<DescripciónDiosesHera />}
        />
        <Route
          path="/descripcion_dioses_poseidon"
          element={<DescripciónDiosesPoseidon />}
        />
        <Route
          path="/descripcion_dioses_atenea"
          element={<DescripciónDiosesAtenea />}
        />
        <Route
          path="/descripcion_dioses_hefesto"
          element={<DescripciónDiosesHefesto />}
        />
        <Route
          path="/descripcion_dioses_apolo"
          element={<DescripciónDiosesApolo />}
        />
        <Route
          path="/descripcion_dioses_artemisa"
          element={<DescripciónDiosesArtemisa />}
        />
        <Route
          path="/descripcion_dioses_hermes"
          element={<DescripciónDiosesHermes />}
        />
        <Route
          path="/descripcion_dioses_ares"
          element={<DescripciónDiosesAres />}
        />
        <Route
          path="/descripcion_dioses_afrodita"
          element={<DescripciónDiosesAfrodita />}
        />
        <Route
          path="/descripcion_dioses_dionisio"
          element={<DescripciónDiosesDionisio />}
        />
        <Route
          path="/descripcion_dioses_demeter"
          element={<DescripciónDiosesDemeter />}
        />
        <Route path="/zeus" element={<Zeus />} />
        <Route path="/hera" element={<Hera />} />
        <Route path="/poseidon" element={<Poseidon />} />
        <Route path="/atenea" element={<Atenea />} />
        <Route path="/hefesto" element={<Hefesto />} />
        <Route path="/apolo" element={<Apolo />} />
        <Route path="/artemisa" element={<Artemisa />} />
        <Route path="/hermes" element={<Hermes />} />
        <Route path="/ares" element={<Ares />} />
        <Route path="/afrodita" element={<Afrodita />} />
        <Route path="/dionisio" element={<Dionisio />} />
        <Route path="/demeter" element={<Demeter />} />
        <Route
          path="/zeus_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Zeus.mp4"
              link_to="/zeus"
            />
          }
        />
        <Route
          path="/hera_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Hera.mp4"
              link_to="/hera"
            />
          }
        />
        <Route
          path="/poseidon_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Poseidon.mp4"
              link_to="/poseidon"
            />
          }
        />
        <Route
          path="/atenea_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Atenea.mp4"
              link_to="/atenea"
            />
          }
        />
        <Route
          path="/hefesto_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Hefesto.mp4"
              link_to="/hefesto"
            />
          }
        />
        <Route
          path="/apolo_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Apolo.mp4"
              link_to="/apolo"
            />
          }
        />
        <Route
          path="/artemisa_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Artemisa.mp4"
              link_to="/artemisa"
            />
          }
        />
        <Route
          path="/hermes_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Hermes.mp4"
              link_to="/hermes"
            />
          }
        />
        <Route
          path="/ares_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Ares.mp4"
              link_to="/ares"
            />
          }
        />
        <Route
          path="/afrodita_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Afrodita.mp4"
              link_to="/afrodita"
            />
          }
        />
        <Route
          path="/dionisio_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Dionisio.mp4"
              link_to="/dionisio"
            />
          }
        />
        <Route
          path="/demeter_video"
          element={
            <DiosesOlimpicosVideo
              url_video="src/assets/video/Olimpicos_Demeter.mp4"
              link_to="/demeter"
            />
          }
        />
        <Route path="/otros_dioses" element={<OtrosDioses />} />
        <Route
          path="/otros_dioses_caracteristicas_gea"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/gea.jpg"
              nom_dios="GEA"
              dominio="Tierra, madre de los dioses"
              simbolos="Tierra, naturaleza, maternidad"
              caracteristicas="Gea es la personificación de la Tierra en la mitología griega. Es
              una de las deidades primordiales y es la madre de los titanes y
              otros seres divinos."
              ruta_anterior="/otros_dioses"
              ruta_siguiente="/otros_dioses_caracteristicas_urano"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_urano"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/urano.webp"
              nom_dios="URANO"
              dominio="Cielo, padre del cosmos."
              simbolos="Tierra, naturaleza, maternidad"
              caracteristicas="Urano es la personificación del cielo y es el primer dios en la mitología griega. Es el esposo de Gea (la Tierra) y el padre de los titanes. Urano fue castrado por su hijo Crono, lo que llevó a la separación del cielo y la Tierra."
              ruta_anterior="/otros_dioses_caracteristicas_gea"
              ruta_siguiente="/otros_dioses_caracteristicas_crono"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_crono"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/cronos.jpg"
              nom_dios="CRONO"
              dominio="Tiempo"
              simbolos="La hoz"
              caracteristicas="Crono desafió a su padre Urano y asumió el poder después de castrarlo. Gobernó durante la Edad de Oro, pero temiendo ser destronado por uno de sus hijos, devoraba a sus propios descendientes. Fue finalmente destronado por su hijo Zeus."
              ruta_anterior="/otros_dioses_caracteristicas_urano"
              ruta_siguiente="/otros_dioses_caracteristicas_rea"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_rea"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/rea.jpg"
              nom_dios="REA"
              dominio="Fertilidad"
              simbolos="La corona de torres"
              caracteristicas="Rea es conocida como la madre de los dioses olímpicos, pero su papel se destaca principalmente en el mito en el que salva a su hijo Zeus al engañar a Crono. Le da una piedra envuelta en pañales para que Crono la devore en lugar de Zeus."
              ruta_anterior="/otros_dioses_caracteristicas_crono"
              ruta_siguiente="/otros_dioses_caracteristicas_hades"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_hades"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/hades.jpg"
              nom_dios="HADES"
              dominio="inframundo, el reino de los muertos"
              simbolos="El casco de invisibilidad"
              caracteristicas="Hades es hijo de Crono y Rea. Después de que los tres hermanos, Zeus, Poseidón y Hades, derrotaron a los titanes, Hades recibió el inframundo como su reino. Aunque a menudo se asocia con la muerte, no es considerado malévolo."
              ruta_anterior="/otros_dioses_caracteristicas_rea"
              ruta_siguiente="/otros_dioses_caracteristicas_metis"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_metis"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/metis.jpg"
              nom_dios="METIS"
              dominio="Sabiduría, astucia."
              simbolos="No tiene un símbolo específico"
              caracteristicas="Metis era una titánide conocida por su sabiduría y astucia. Fue la primera esposa de Zeus, y su destino estaba vinculado a dar a luz a un hijo que superaría a su padre. Para evitarlo, Zeus la engañó y la devoró, pero adquirió su sabiduría en el proceso."
              ruta_anterior="/otros_dioses_caracteristicas_hades"
              ruta_siguiente="/otros_dioses_caracteristicas_persefone"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_persefone"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/persefone.webp"
              nom_dios="PERSÉFONE"
              dominio="reina del inframundo y está asociada con el renacimiento y los ciclos de la naturaleza."
              simbolos="La granada"
              caracteristicas="Perséfone fue raptada por Hades y llevada al inframundo, donde se convirtió en la reina. Deméter, la diosa de la cosecha, causó la estación invernal cuando Perséfone estaba en el inframundo, y la primavera cuando regresaba."
              ruta_anterior="/otros_dioses_caracteristicas_metis"
              ruta_siguiente="/otros_dioses_caracteristicas_hecate"
            />
          }
        />
        <Route
          path="/otros_dioses_caracteristicas_hecate"
          element={
            <OtrosDiosesCaracteristicas
              img_dios="src/assets/img/hecate.jpg"
              nom_dios="HÉCATE"
              dominio="Magia, brujería"
              simbolos="La antorcha"
              caracteristicas="Hécate es una diosa triple asociada con la magia. A menudo es invocada en rituales mágicos y se asocia con la Luna."
              ruta_anterior="/otros_dioses_caracteristicas_persefone"
              ruta_siguiente="/otros_dioses"
            />
          }
        />
        <Route path="/fondo" element={<Fondo />} />
        <Route path="/pregunta_d" element={<PreguntaD />} />
      </Routes>
    </Router>
  );
}

export default App;
