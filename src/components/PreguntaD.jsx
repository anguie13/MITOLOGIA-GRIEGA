import { Component } from "react";


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

class PreguntaD extends Component {
  render() {
    return (
      <div style={styles.fondo}>
        <div>
          <div>
            <img
              style={styles.imagen}
              src="https://filosofiapresocraticablog.files.wordpress.com/2016/03/poseidon.jpg?w=640"
              alt="imagen"
            />
          </div>
          <div style={styles.botones}>
            <div>
              <button style={styles.boton}>a. harmes</button>
            </div>
            <div style={styles.espacio}>
              <button style={styles.boton2}>b. Hercules</button>
            </div>
          </div>
          <div style={styles.botones}>
            <div>
              <button onClick={navegacion} style={styles.boton} type="button">
                c. Poseidon
              </button>{" "}
              //Correcta lleva a PreguntaD2
            </div>
            <div style={styles.espacio}>
              <button style={styles.boton2}>d.Atenea</button>
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
            Sigamos adelante!, ayudame parece que tiene el poder relacionado con
            el mar y tiene un tridente, quien sera?
          </p>
        </div>
      </div>
    );
  }
}

export default PreguntaD;
