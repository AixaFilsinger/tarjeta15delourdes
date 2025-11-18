
import marco from "../assets/marcoini2.png"


const Portada = () => {
  return (
    <>
    <section className="inicio d-flex flex-column justify-content-center align-items-center">
     <img src={marco} alt="" width={400} className="mt-5" data-aos="zoom-in"        data-aos-duration="1500"  data-aos-delay="200"/>
    </section>
    
    </>
   
  );
};

export default Portada;
