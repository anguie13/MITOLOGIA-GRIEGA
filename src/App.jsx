import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
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
import ZeusVideo from "./components/ZeusVideo";
import VideoZeus from "./components/VideoZeus";
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
        <Route path="/zeus_video" element={<ZeusVideo />} />
        <Route path="/videozeus" element={<VideoZeus />} />
        <Route path="/fondo" element={<Fondo />} />
        <Route path="/pregunta_d" element={<PreguntaD />} />
      </Routes>
    </Router>
  );
}

export default App;
