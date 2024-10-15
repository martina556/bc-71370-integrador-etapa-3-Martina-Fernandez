import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')
  return (
    <main className="nosotros-main">
    <div className="section-nosotros">
      <div className="section-nosotros_info">
        <h1 className="subrayado">Nosotros</h1>
        <p>
          Tras un 2020 muy movilizante y lleno de cambios para todos, sentimos
          el impulso, cada vez con más fuerza, de ir en busca de nuestros
          sueños, dando forma a la pasión que nos unía y dejando el mundo
          corporativo. Estudiamos mucho y nos seguimos formando con los
          mejores profesionales de la cosmética natural, formulando nuestras
          propias recetas, y cuidando cada detalle al máximo para que tu
          experiencia sea única.
        </p>
        <p>
          Disfrutamos de cada paso en la creación de nuestros productos,
          cuidando la calidad de las materias primas y aprovechando las
          propiedades naturales que nos brinda cada aceite esencial.
        </p>
        <p>
          Nuestro proceso de elaboración es totalmente artesanal y consciente.
          No usamos parabenos ni sulfatos, y todos nuestros productos son apto
          veganos ya que no utilizamos materias primas de origen animal.
        </p>
      </div>

      <div className="section-nosotros-cards">
        <div className="section-nosotros-cards__mision-vision-valores">
          <div className="icon-cards">
            <img
              src="../public/img/grafico.svg"
              alt="grafico"
              className="icon-cards__imagen"
            />
          </div>
          <h2>Mision</h2>
          <p className="font-size-15">
            Ofrecer asesoramiento y productos de cosmética natural basados en
            la aromaterapia, con una excelente relación calidad-precio.
            Queremos acompañarte en el viaje hacia una piel radiante y
            saludable, y lo hacemos de manera honesta, humilde y con un
            profundo cuidado por ti y el planeta en el que vivimos.
          </p>
        </div>
        <div className="section-nosotros-cards__mision-vision-valores">
          <div className="icon-cards">
            <img
              src="../public/img/eye.svg"
              alt="ojo"
              className="icon-cards__imagen"
            />
          </div>

          <h2>Vision</h2>
          <p className="font-size-15">
            Convertirnos en referentes de la cosmética basada en plantas a
            nivel nacional. Queremos ser la opción número uno para aquellos
            que buscan productos de alta calidad que respeten la naturaleza y
            la piel.
          </p>
        </div>
        <div className="section-nosotros-cards__mision-vision-valores">
          <div className="icon-cards">
            <img
              src="../public/img/handshake.svg"
              alt="manos"
              className="icon-cards__imagen"
            />
          </div>

          <h2>Valores</h2>
          <p className="font-size-15">
            Empatía: conectamos contigo y comprendemos tus necesidades para
            ofrecer soluciones saludables que mejoren tu vida. Cuidado: nos
            preocupamos por la salud dérmica, también por las personas y el
            medio ambiente que hacen posible nuestra existencia. Honestidad y
            humildad
          </p>
        </div>
      </div>
    </div>
  </main>

  )
}

export default Nosotros