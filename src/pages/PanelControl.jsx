import Card from '../components/Card'
import MenuLateral from '../components/MenuLateral'
const PanelControl = () => {
 
  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        {
          envios.map((envio) => {
            return <Card info={envio} />
          })
        }
      </div>
    </section>
  )
}


export default PanelControl

