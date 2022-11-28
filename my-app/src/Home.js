import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()

    const companies = ["Google", "Apple"]

    const buttons = companies.map((company, index) => {
        const routeChange = () => {
            navigate('/company/'+index)
        }
        return(
        <div key={index}>
        <button onClick={routeChange}>{company}</button>
        </div>)
})
    return (
<div>
    <h1>Home page</h1>
        <h2>{buttons}</h2>
</div>
    )
}

export default Home;