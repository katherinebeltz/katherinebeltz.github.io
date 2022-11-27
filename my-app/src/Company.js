import React from 'react';
import {useParams} from "react-router-dom";

function Company() {
    const id = useParams().id;

    const names = ["Google"]

    const first_name = ["Marissa Mayer"]

    const first_year = [1999]

    const percent_F_tech = [24.6]

    const percent_F_lead = [28.1]

    const sources = [["https://www.cnn.com/2012/07/16/tech/web/marissa-mayer-bio#:~:text=New%20Yahoo%20CEO%20Marissa%20Mayer,and%20most%20visible%20public%20faces.",'https://about.google/belonging/diversity-annual-report/2022/','https://www.statista.com/statistics/311805/google-employee-gender-department-global/']]

    const list_src = sources.map((source) =>
    <p>{source}</p>)

    return (
<div>
    <h1>{names[id]}</h1>
    <h2>First female engineer at {names[id]} was {first_name[id]} and started in {first_year[id]}.</h2>
    <h2>Percent of tech roles taken by women: {percent_F_tech[id]}</h2>
    <h2>Percent of leadership roles taken by women: {percent_F_lead[id]}</h2>
    <h2> Sources: {list_src} </h2>
</div>
    )
}

export default Company;