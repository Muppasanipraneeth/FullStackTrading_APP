import Team from "./Team";

const About =()=>{
    return(<>
    <p className="text-4xl mt-20 ml-60 mr-40 p-4" >We pioneered the discount broking model in India.
        <br></br>
    Now, we are breaking ground with our technology.</p>
    <hr className="ml-32 mr-32 mt-20"></hr>
    <div className="flex">
        <div className="ml-32 p-5">
            <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and Rodha, the Sanskrit word for barrier. 
            </p><br/>
            <p>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p><br/>
            <p>
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>

        </div>

        <div className="mr-20 p-5">
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <br/>
            <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <br />
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
        </div>
    </div>
    <Team />
    </>)
}
export default About;