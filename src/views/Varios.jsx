import brillo from "../assets/star.png";
import boladisco from "../assets/zapatos.png";
import dressCode from "../assets/cenicienta.png";
import Notamusical from "../assets/disco.png";
import copas from "../assets/reloj.png";
import asistencia from "../assets/boligrafo.png";
import regalo from "../assets/regalo.png";


import { useState } from "react";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="m-0 p-0 container">
      <article className="varios0 pt-4 pb-4">
        <section className="container d-flex flex-column align-items-center varios">
          <article className="row">
            <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
              <img src={brillo} alt="" className="brillo brillo-top" />
              <img src={copas} alt="" width={150} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                ¿Cuando?
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                6 de Diciembre <br />
                21hs a 05hs
              </p>
            </aside>
            <aside className="col-xs-12 text-center donde mb-4 position-relative">
              <img src={boladisco} alt="" width={150} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mt-5"
              >
                ¿Dónde?
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Salón Geminis
                <br />
                Alderetes
              </p>
              <button
                className="btn-varios mt-3 mb-5"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/hdcscRgTkwDuMyhk7"
                  )
                }
              >
                CÓMO LLEGAR
              </button>
              <img src={brillo} alt="" className="brillo brillo-bottom" />
            </aside>
            <aside className="col-xs-12 text-center dressCode mb-5">
              <img src={dressCode} alt="" width={200} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mt-4"
              >
                DressCode
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Elegante
                <br /> Evitar el color celeste y azul
              </p>
              <div className="color-palette">
                <div className="color-circle celeste me-1" title="Verde"></div>
                <div className="color-circle azul" title="Verde"></div>
              </div>
            </aside>
            
            <aside className="col-xs-12 text-center asistencia mb-4">
              <img src={asistencia} alt="" width={150} />
              <h4 className="mt-5">Asistencia</h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Soñé con este día y me gustaría vivirlo con quienes más
                quiero...
              </p>
              <button
                className="btn-varios mt-3 mb-2"
                onClick={() => window.open("https://wa.link/ummw8g")}
              >
                Confirmar a Mamá Lourdes
              </button>
              <p>o</p>
              <button
                className="btn-varios mt-2 mb-5"
                onClick={() => window.open("https://wa.link/44z6c7")}
              >
                Confirmar a Pilar
              </button>
            </aside>
            <aside className="col-xs-12 text-center regalo mb-5">
              <img src={regalo} alt="" width={150} />
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                El mejor regalo que pueda tener será tu presencia
              </p>
              <button
                className="btn-varios mt-3 mb-5"
                onClick={() => setShowModal(true)}
              >
                Enviar regalo
              </button>
              {/* Modal */}
              {showModal && (
                <div
                  className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
                  style={{
                    zIndex: 9999, // 🔑 siempre arriba de todo
                    width: "90%",
                    maxWidth: "350px",
                  }}
                >
                  <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

                  {/* Los <p> ahora sí se ven */}
                  <p className="mb-1">
                    <strong>Alias:</strong> saramalvina1982 
                  </p>
                  <p className="mb-3">
                    <strong>A nombre de:</strong>
                    <br />
                    Sara Malvina
                  </p>

                  <button
                    className="btn-varios2"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </aside>
           
          </article>
        </section>
      </article>

      <article className=" fin d-flex flex-column justify-content-center align-items-center position-relative">
        <img src={brillo} alt="" className="brillo brillo-top1" />
        <h4 data-aos="zoom-in-down">¡No podes faltar!</h4>
        <h2 data-aos="zoom-in-down">Lourdes</h2>
        <img src={brillo} alt="" className="brillo brillo-bottom1" />
      </article>
    </section>
  );
};

export default Varios;
