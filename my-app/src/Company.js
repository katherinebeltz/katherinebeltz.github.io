import React from 'react';
import {useParams, Link} from "react-router-dom";
import './Company.css';

function Company() {
    const id = useParams().id;

    const names = ["Google", "Apple"]

    const first_name = ["Marissa Mayer", "Joanna Hoffman"]

    const first_year = [1999, 1980]

    const percent_F_tech = [24.6, 24.4]

    const percent_F_lead = [28.1, 31.4]

    const sources = [["https://www.cnn.com/2012/07/16/tech/web/marissa-mayer-bio#:~:text=New%20Yahoo%20CEO%20Marissa%20Mayer,and%20most%20visible%20public%20faces.",'https://about.google/belonging/diversity-annual-report/2022/','https://www.statista.com/statistics/311805/google-employee-gender-department-global/'],
["https://www.folklore.org/ProjectView.py?project=Macintosh&characters=Joanna+Hoffman","https://www.apple.com/diversity/" ]]

    const learn = ["https://about.google/belonging/diversity-annual-report/2022/","https://www.apple.com/diversity/" ]

    const list_src = sources.map((source, index) =>
    <Link key={index}>{source}</Link>)

    return (
<div className="container">
    <h1>{names[id]}</h1>
    <h2>First female engineer at {names[id]} was {first_name[id]} and she started in {first_year[id]}.</h2>
    <h2>Percent of tech roles taken by women: {percent_F_tech[id]}</h2>
    <h2>Percent of leadership roles taken by women: {percent_F_lead[id]}</h2>
    <h2> Sources: {list_src} </h2>
    <div><h2>Learn more:</h2> <Link>{learn[id]}</Link> </div>
</div>
    )
}

export default Company;