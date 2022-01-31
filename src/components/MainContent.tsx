import React  from "react";
import data from '../sampledata'

export default function MainContent() {
    return (
        <section className="group-page">
            <div className="wrapper">
                <div className="main1">
                    <div className="mm">
                        <h2>{data.data.groupdata[1].samplenumber}</h2>
                        <p>{data.data.groupdata[1].sampletext}</p>
                    </div>
                </div>	  
                <div className="main2">
                    <h2>{data.data.groupdata[2].samplenumber}</h2>
                    <p>{data.data.groupdata[2].sampletext}</p>
                </div>	  
                <div className="main3">
                    <h2>{data.data.groupdata[3].samplenumber}</h2>
                    <p>{data.data.groupdata[4].sampletext}</p>
                </div>	  
                <div className="main4">
                    <h2>{data.data.groupdata[4].samplenumber}</h2>
                    <p>{data.data.groupdata[4].sampletext}</p>
                </div>
                <div className="main5">
                    <a href="default.asp" target="_blank">This is a link</a>
                    <a href="default.asp" target="_blank">This is a link</a>
                    <a href="default.asp" target="_blank">This is a link</a>
                    <a href="default.asp" target="_blank">This is a link</a>
                </div>
                <div className="main6"></div>
            </div>	  
        </section>      
    )
}