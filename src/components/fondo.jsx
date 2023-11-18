import { Component } from "react";
import { Link } from "react-router-dom";


const styles = {
  fondo: {
    position: "fixed",
    width: "100%",
    height: "750px",
    backgroundImage:
      "url(https://image.slidesdocs.com/responsive-images/background/3d-illustration-in-decorative-concept-perfect-for-architecture-and-building-scene-advertisements-and-wallpapers-powerpoint-background_983fe5c92b__960_540.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  imagen: {
    position: "fixed",
    top: "10%",
    left: "23%",
    right: "23%",
    width: "260px",
    height: "260px",
    borderRadius: "30px",
  },
  botones: {
    display: "flex",
    position: "relative",
    top: "400px",
    left: "200px",
    flexDirection: "row",
  },
  boton: {
    width: "150px",
    height: "60px",
    color: "black",
    backgroundColor: "white",
    margin: "10px",
    borderRadius: "8px",
  },
  boton2: {
    width: "150px",
    height: "60px",
    color: "black",
    backgroundColor: "white",
    margin: "10px",
    borderRadius: "8px",
  },
  espacio: {
    marginLeft: "200px",
  },
  personaje: {
    width: "250px",
    height: "250px",
    borderRadius: "50px",
  },
  muñeco: {
    position: "fixed",
    left: "75%",
    top: "60%",
  },
  dialogo: {
    width: "350px",
    height: "300px",
  },
  nube: {
    position: "relative",
    backgroundImage: "url()",
    left: "68%",
    top: "-60px",
  },
  opinion: {
    position: "relative",
    top: "-220px",
    right: "-46px",
    color: "white",
    width: "300px",
    fontWeight: "bold",
  },
  ref: {
    textDecoration: "none",
    color: "black",
  },
};

class Fondo extends Component {
  render() {
    return (
      <div style={styles.fondo}>
        <div>
          <div>
            <img
              style={styles.imagen}
              src="https://static.wixstatic.com/media/af1176_a00c4952a9124c5993c21010707a31bc~mv2.jpg/v1/crop/x_0,y_90,w_1792,h_2082/fill/w_560,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9329.jpghttps://img.freepik.com/vector-premium/antiguo-guerrero-griego-armadura-casco-arma-mano-listo-ataque-defensa_168440-198.jpg"
              alt="imagen"
            />
          </div>
          <div style={styles.botones}>
            <div>
              <button style={styles.boton}>a. Perceo</button>
            </div>
            <div style={styles.espacio}>
              <button style={styles.boton2}>b. Spartano</button>
            </div>
          </div>
          <div style={styles.botones}>
            <div>
              <button style={styles.boton} type="button">
                c. guerrero
              </button>
            </div>
            <div style={styles.espacio}>
              <Link to="/pregunta_d">
              <button style={styles.boton2}>d.Zeus</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div style={styles.muñeco}>
            <img
              style={styles.personaje}
              src="https://i.pinimg.com/originals/6b/2a/7e/6b2a7e95078a2ec9a38d4450f5e7f7fd.jpg"
              alt="personaje"
            />
          </div>
        </div>
        <div style={styles.nube}>
          <img
            style={styles.dialogo}
            src="https://www.pngmart.com/files/9/Text-Balloon-PNG-Image.png"
            alt="Dialogo"
          />
          <p style={styles.opinion}>
            Ayudame a contestar, jummm se ve muy poderoso y parece ser tiene el
            poder del trueno, quien sera?
          </p>
        </div>
      </div>
    );
  }
}

export default Fondo;
