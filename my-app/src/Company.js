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

    const list_src = sources[id].map((source, index) =>
    <a className="source" key={index} href={source} >{source}</a>)

    


    return (
<div className="container">
    <h1 className="title">{names[id]}</h1>
    <h1 className="intro">Here are some facts about {names[id]}.</h1>
    <h2 className="line">The first female engineer at&nbsp;<div> {names[id]} </div> &nbsp;was&nbsp;<div className="big">{first_name[id]}, </div> &nbsp;and she started in <div className="big">&nbsp;{first_year[id]}</div>.</h2>
    <div className="percents">
    <h2 className="percent"> <h2 className="per">{percent_F_tech[id]}%</h2>of tech roles are taken by women.</h2>
    <h2 className="percent"><h2 className="per">{percent_F_lead[id]}%</h2> of leadership roles are taken by women.</h2>
    </div>  
    <div className="learn"><h2>Read more from the company</h2> <a className="link" href={learn[id]}>{learn[id]}</a> </div>
    <h2 className="sources"> <div>Sources</div> {list_src} </h2>
</div>
    )
}

export default Company;