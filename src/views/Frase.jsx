import adorno from "../assets/adorno1.png"

const Frase = () => {
    return (
        <section className="text-center container frase">
            <img src={adorno} alt="" width={250} className="mb-5" />
            <p className="fw-semibold">"Hay momentos inolvidables que se atesoran en el corazón para siempre, por está razón, quiero que compartas conmigo este día tan especial."
                </p>
                <img src={adorno} alt=""  width={250} className="mt-5 mb-5"/>
        </section>
    );
};

export default Frase;