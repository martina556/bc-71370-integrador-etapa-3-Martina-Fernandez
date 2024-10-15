import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
const Contacto = () => {

  useTitulo('Contacto')
  return (
    <main className="contacto-main">
        <header>
            <h1 className="subrayado">¿NECESITAS AYUDA?</h1>
        </header>
        
        <div className="content-contacto">

            <section className="section-contacto">
            <fieldset>
              <div className="contacto-form">
              <label>Nombre</label>
              <input type="text" required className="contacto-form__barra" />
              <label>Apellido</label>
              <input type="text" required className="contacto-form__barra"/>
              <label>Provincia</label>
               <select name="provincia" id="" className="contacto-form__barra">
                <option disabled value ></option>
                <option value="Buenos Aires">BUENOS AIRES</option>
                <option value="CABA">CIUDAD AUTONOMA DE Bs As</option>
                <option value="Catamarca">CATAMARCA</option>
                <option value="cordoba">CORDOBA</option>
                <option value="Corrientes">CORRIENTES</option>
                <option value="Chaco">CHACO</option>
                <option value="Chubut">CHUBUT</option>
                <option value="Entre Rios">ENTRE RIOS</option>
                <option value="Formosa">FORMOSA</option>
                <option value="Jujuy">JUJUY</option>
                <option value="La Pampa">LA PAMPA</option>
                <option value="La Rioja">LA RIOJA</option>
                <option value="Mendoza">MENDOZA</option>
                <option value="Misiones">MISIONES</option>
                <option value="Neuquen">NEUQUEN</option>
                <option value="Rio Negro">RIO NEGRO</option>
                <option value="Salta">SALTA</option>
                <option value="San Luis">SAN LUIS</option>
                <option value="Santa Cruz">SANTA CRUZ</option>
                <option value="Santa Fe">SANTA FE</option>
                <option value="Santiago del Estero">SANTIAGO DEL ESTERO</option>
                <option value="Tierra del Fuego">TIERRA DEL FUEGO</option>
                <option value="Tucuman">TUCUMAN</option>
              </select>
              <label>Numero de telefono</label>
              <input type="tel" required className="contacto-form__barra"/>
              <label>Mail</label>
              <input type="email" required className="contacto-form__barra"/>
              <label>¿Por qué necesita comunicarse con nosotros?</label>
              <textarea name="" id="" className="contacto-form__coment"></textarea>
              <div className="button-contacto" >
                <button className="button-contacto__content">ENVIAR</button>
              </div>
              </div>
            </fieldset>

            </section>

        <section className="section-mapa">
            <div className="card-mapa">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.672484972816!2d-58.41734106310998!3d-34.58461401679001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e06a3ede69%3A0x316b23131d573f98!2sTienda%20Natura%20Cosm%C3%A9ticos!5e0!3m2!1ses-419!2sar!4v1718247264910!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
           
            <div className="card-contacto">
                <div className="contacto-imagen">
                    <img src="../public/img/whatsapp.svg" alt="whatsapp" className="contacto-imagen__content"/>
                    <p>(223) 5553322</p>
                    <img src="../public/img/twitter.svg" alt="twitter"/>
                    <p>rita_cosmeticos</p>
                </div>
                
                
                <div className="contacto-imagen">
                    <img src="../public/img/instagram.svg" alt="instagram"/>
                    <p>rita_cosmeticos</p>
                    <img src="../public/img/mail.svg" alt="mail" className="contacto-imagen__content"/>
                    <p>rita@tiendanatural.com</p>
                </div>
                
                
            </div>
        </section>
        </div>
          
        
        
      
</main>
  )
}

export default Contacto