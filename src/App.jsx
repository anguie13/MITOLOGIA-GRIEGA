import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import JuegoDioses from "./components/JuegoDioses";
import Heroes from "./components/Heroes";
import DescripcionHeroes from "./components/DescripcionHeroes";
import Criaturas from "./components/Criaturas";
import DescripcionCriaturas from "./components/DescripcionCriaturas";
import Oraculos from "./components/Oraculos";
import DescripcionOraculos from "./components/DescripcionOraculos";

import Game from "./Game";

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
        <Route path="/game" element={<Game />} />
        <Route path="/juego_dioses" element={<JuegoDioses />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route
          path="/descripcion_heroes_aquiles"
          element={
            <DescripcionHeroes
              nom="AQUILES"
              resumen="Aquiles es uno de los héroes más destacados de la mitología griega y es conocido por su valentía y destreza en la guerra. Es un guerrero griego invulnerable en todo su cuerpo, excepto por su talón, donde su madre lo sujetó al sumergirlo en el río Estigia."
              url_img="src/assets/img/aquiles.jpg"
              btn_ant="/heroes"
              btn_sig="/descripcion_heroes_ulises"
            />
          }
        />
        <Route
          path="/descripcion_heroes_ulises"
          element={
            <DescripcionHeroes
              nom="ULISES"
              resumen="Ulises es conocido por su astucia y habilidad para la estrategia. Es el protagonista de la 'Odisea', un poema épico atribuido a Homero. Ulises es famoso por su ingenio y su viaje de regreso a casa después de la Guerra de Troya."
              url_img="src/assets/img/ulises.png"
              btn_ant="/descripcion_heroes_aquiles"
              btn_sig="/descripcion_heroes_orfeo"
            />
          }
        />
        <Route
          path="/descripcion_heroes_orfeo"
          element={
            <DescripcionHeroes
              nom="ORFEO"
              resumen="Orfeo es un músico y poeta legendario conocido por su extraordinario talento con la lira. Se le atribuye haber encantado a la naturaleza con su música y haber descendido al inframundo para intentar recuperar a su amada esposa, Eurídice."
              url_img="src/assets/img/orfeo.webp"
              btn_ant="/descripcion_heroes_ulises"
              btn_sig="/descripcion_heroes_perseo"
            />
          }
        />
        <Route
          path="/descripcion_heroes_perseo"
          element={
            <DescripcionHeroes
              nom="PERSEO"
              resumen="Perseo es conocido por su valentía y destreza en la lucha contra monstruos. Es famoso por matar a la Gorgona Medusa y por su participación en la historia de Andrómeda."
              url_img="src/assets/img/perseo.webp"
              btn_ant="/descripcion_heroes_orfeo"
              btn_sig="/descripcion_heroes_edipo"
            />
          }
        />
        <Route
          path="/descripcion_heroes_edipo"
          element={
            <DescripcionHeroes
              nom="EDIPO"
              resumen="Edipo es una figura trágica en la mitología griega. Su historia está vinculada a la profecía de matar a su padre y casarse con su madre, sin saber que estos eran sus padres biológicos."
              url_img="src/assets/img/edipo.webp"
              btn_ant="/descripcion_heroes_perseo"
              btn_sig="/descripcion_heroes_heracles"
            />
          }
        />
        <Route
          path="/descripcion_heroes_heracles"
          element={
            <DescripcionHeroes
              nom="HERACLES"
              resumen="Heracles es uno de los héroes más fuertes y famosos de la mitología griega. Es conocido por sus doce trabajos, hazañas sobresalientes y su fuerza sobrehumana."
              url_img="src/assets/img/heracles.avif"
              btn_ant="/descripcion_heroes_edipo"
              btn_sig="/heroes"
            />
          }
        />
        <Route path="/criaturas" element={<Criaturas />} />
        <Route
          path="/descripcion_criaturas_quimera"
          element={
            <DescripcionCriaturas
              nom="QUIMERA"
              resumen="La Quimera es una criatura híbrida con partes de varios animales. Suele tener la cabeza de un león, el cuerpo de una cabra y una cola de serpiente. Fue derrotada por Belerofonte, quien la venció montando al mítico caballo alado Pegaso"
              url_img="src/assets/img/quimera.jpg"
              btn_ant="/criaturas"
              btn_sig="/descripcion_criaturas_minotauro"
            />
          }
        />
        <Route
          path="/descripcion_criaturas_minotauro"
          element={
            <DescripcionCriaturas
              nom="MINOTAURO"
              resumen="El Minotauro es un ser mitad humano y mitad toro. Se encuentra en el centro del laberinto en Creta y es el resultado de la unión de la reina Pasífae y un toro blanco enviado por Poseidón. Fue finalmente derrotado por Teseo."
              url_img="src/assets/img/minotauro.webp"
              btn_ant="/descripcion_criaturas_quimera"
              btn_sig="/descripcion_criaturas_cerbero"
            />
          }
        />
        <Route
          path="/descripcion_criaturas_cerbero"
          element={
            <DescripcionCriaturas
              nom="CERBERO"
              resumen="Cerbero es el feroz perro de tres cabezas que guarda la entrada al inframundo en la mitología griega. Es hijo de Tifón y Equidna. Cerbero asegura que los muertos no escapen y que los vivos no entren sin permiso."
              url_img="src/assets/img/cerbero.jpg"
              btn_ant="/descripcion_criaturas_minotauro"
              btn_sig="/descripcion_criaturas_ciclope"
            />
          }
        />
        <Route
          path="/descripcion_criaturas_ciclope"
          element={
            <DescripcionCriaturas
              nom="CICLOPE"
              resumen="Los Cíclopes son gigantes con un solo ojo en el centro de la frente. Son conocidos por su habilidad para forjar objetos poderosos. El más famoso de ellos, Polifemo, fue derrotado por Odiseo (Ulises) durante su viaje de regreso a casa"
              url_img="src/assets/img/ciclope.jpg"
              btn_ant="/descripcion_criaturas_cerbero"
              btn_sig="/descripcion_criaturas_grifo"
            />
          }
        />
        <Route
          path="/descripcion_criaturas_grifo"
          element={
            <DescripcionCriaturas
              nom="GRIFO"
              resumen="Los Grifos son criaturas con cuerpo de león y cabeza de águila. A menudo se les representa como guardianes de tesoros en la mitología griega. También son conocidos por su velocidad y ferocidad."
              url_img="src/assets/img/grifo.png"
              btn_ant="/descripcion_criaturas_ciclope"
              btn_sig="/descripcion_criaturas_esfinge"
            />
          }
        />
        <Route
          path="/descripcion_criaturas_esfinge"
          element={
            <DescripcionCriaturas
              nom="ESFINGE"
              resumen="La Esfinge es una criatura con cabeza de mujer, cuerpo de león y alas de ave. Se dice que plantea enigmas a los viajeros y devora a aquellos que no pueden resolverlos. Edipo fue capaz de resolver el enigma de la Esfinge, lo que llevó a su derrota."
              url_img="src/assets/img/esfinge.jpg"
              btn_ant="/descripcion_criaturas_grifo"
              btn_sig="/menu"
            />
          }
        />
        <Route path="/oraculos" element={<Oraculos />} />
        <Route
          path="/descripcion_oraculos_delfos"
          element={
            <DescripcionOraculos
              nom="Oráculo de Delfos"
              resumen="El Oráculo de Delfos, situado en el templo de Apolo en Delfos, era el oráculo más famoso y venerado en la antigua Grecia. La sacerdotisa de Delfos, conocida como la Pitia, inhalaría vapores tóxicos provenientes de fisuras en la tierra y entraría en un estado profético para transmitir las respuestas de Apolo."
              url_img="src/assets/img/delfos.jpg"
              btn_ant="/oraculos"
              btn_sig="/descripcion_oraculos_dodoma"
            />
          }
        />
        <Route
          path="/descripcion_oraculos_dodoma"
          element={
            <DescripcionOraculos
              nom="Oráculo de Dódona"
              resumen="Este oráculo estaba ubicado en Dódona, en el noroeste de Grecia. En Dódona, la respuesta de los dioses se buscaba a través del sonido de las hojas de un roble sagrado y el vuelo de los pájaros. Se creía que los sacerdotes interpretaban los sonidos y mensajes divinos."
              url_img="src/assets/img/dodoma.jpg"
              btn_ant="/descripcion_oraculos_delfos"
              btn_sig="/descripcion_oraculos_didima"
            />
          }
        />
        <Route
          path="/descripcion_oraculos_didima"
          element={
            <DescripcionOraculos
              nom="Oráculo de Dídima"
              resumen="Dídima era otro importante sitio oracular dedicado a Apolo. Estaba ubicado en la costa de Jonia. El método de consulta implicaba la interpretación de grietas en la corteza de un árbol sagrado y las respuestas se obtenían a través de los sacerdotes."
              url_img="src/assets/img/didima.jpg"
              btn_ant="/descripcion_oraculos_dodoma"
              btn_sig="/descripcion_oraculos_epiro"
            />
          }
        />
        <Route
          path="/descripcion_oraculos_epiro"
          element={
            <DescripcionOraculos
              nom="Oráculo de Epiro"
              resumen="Este oráculo estaba ubicado en la región de Epiro. Al igual que en Dódona, se creía que los dioses respondían a través de sonidos en la naturaleza, especialmente los sonidos del viento y del agua."
              url_img="src/assets/img/epiro.jpg"
              btn_ant="/descripcion_oraculos_didima"
              btn_sig="/descripcion_oraculos_claros"
            />
          }
        />
        <Route
          path="/descripcion_oraculos_claros"
          element={
            <DescripcionOraculos
              nom="Oráculo de Claros"
              resumen="Situado cerca de Mileto, el Oráculo de Claros era otro lugar dedicado a Apolo. Las respuestas se obtenían a través de un método similar al de Delfos, con un sacerdote profético que interpretaba las respuestas divinas."
              url_img="src/assets/img/claros.jpg"
              btn_ant="/descripcion_oraculos_epiro"
              btn_sig="/descripcion_oraculos_amon"
            />
          }
        />
        <Route
          path="/descripcion_oraculos_amon"
          element={
            <DescripcionOraculos
              nom="Oráculo de Amón en Libia"
              resumen="Aunque no estaba en territorio griego, el oráculo de Amón en Libia era consultado por los griegos, especialmente después de la conquista de Egipto por Alejandro Magno. Se creía que Amón, dios egipcio, proporcionaba respuestas a través de sus sacerdotes."
              url_img="src/assets/img/amon.jpg"
              btn_ant="/descripcion_oraculos_claros"
              btn_sig="/"
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
