function Main (){
    //creating a variable country and assign your country to that variable
    const country = ['Nigeria'];

    return(
    <>
    <main>
    <section>
        <h2>About Us</h2>
        

        <p>
            We are a small team of web developers based in the 
              
            {country.map((country1, index) =>{
            return(
            <span key = {index}> {country1}</span>  )   })}. 


            We specialise in creating modern and responsive websites for businesses and individuals.
        </p>
    </section>
    <section>
        <h2> Our Services</h2>
         <ul> 
            <li>Web Design
            </li>
            <li>Web Development
            </li>
            <li>E-commerce Solutions
            </li>
            <li>Search Engine Optimization (SEO)
            </li>
        </ul>
    </section>

</main>
</>
    );

}

export default Main;