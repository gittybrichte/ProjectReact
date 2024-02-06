import './Service.css'


function Service({name,price,discription}) {

    return (
      <>
       <div className='service'>
        <h2 >{name}</h2>
        <h3>מחיר: {price}</h3>
        <h4> {discription}</h4>
        </div>
      </>
    )
  }
  
  export default Service