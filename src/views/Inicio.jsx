import marco2 from "../assets/marconombre.png"
import esquina3 from "../assets/esquina3.png"
import esquina4 from "../assets/esquina4.png"
import esquina2 from "../assets/esquina2.png"
import esquina1 from "../assets/esquina1.png"
import quince from "../assets/15.png";
import ReproductorMusic from "/src/views/ReproductorMusic"

const Inicio = () => {
    return (
      
         <section className=" portada contenedor-marco-principal">
            <img src={esquina1} alt="Esquina dorada" className="esquina superior-izquierda" />
            <img src={esquina2} alt="Esquina dorada" className="esquina superior-derecha" />
            <img src={esquina3} alt="Esquina dorada" className="esquina inferior-izquierda" />
            <img src={esquina4} alt="Esquina dorada" className="esquina inferior-derecha" />
            <aside className="d-flex flex-column justify-content-center align-items-center mt-5">

<aside className="linea">
        <h2 className="enfoque mis">
          {"mis".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"años".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>

    
            </aside>
           <article className="mb-0 text-center">
            {/* La imagen es el fondo */}
            <img src={marco2} alt="Marco de nombre" className="imagen-fondo" /> 
            
            {/* El h1 es el texto que va encima y centrado */}
            <h1 className="enfoque nombre-superpuesto">
                {"Lourdes".split("").map((letra, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                        {letra}
                    </span>
                ))}
            </h1>
            <h1 className="enfoque nombre-superpuesto2">
                {"Mamani".split("").map((letra, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                        {letra}
                    </span>
                ))}
            </h1>
        </article>
      <ReproductorMusic></ReproductorMusic>
      
    
    </section>
    );
};

export default Inicio;