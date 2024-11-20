import './explore_comp.css'
const Services=()=>{
  return (
    <>
            {/* service's section */}
            
            <div className="service"> 
            <h1>Services Provided</h1>
            <div className="card1">
               <div className="services" >
                <img src="logo\investment.png" alt=""/>
               <h3>Investment Trust</h3>
               </div>
               <div className="services">
               <img src="logo\etf.png" alt="" />
                <h3>Etf</h3>
               </div>
               <div className="services">
               <img src="logo\stocks.png" alt="" />
                <h3>Stocks</h3>
               </div>
               </div>
            </div><br/>

    </>
  )
}
export default Services;
