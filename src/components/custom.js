import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {fetchCustomNews} from "../actions/fetchCustomNews";

const Custom = () => {

    const [sources, setSources] = useState([]);
    const [source, setSource] = useState("");
    const [relevance, setRelevance] = useState("");

    const customSelector = useSelector((state) => state.FetchCustom)

    const dispatch = useDispatch();

    const getCustomNews = (source, relevance) => dispatch(fetchCustomNews(source, relevance));

    const getSources = () => {
        fetch("https://newsapi.org/v1/sources?")
        .then(res => {
            console.log(customSelector.customNews)
            return res.json()
        })
        .then(data => {
            setSources(data.sources)
        })
    }

    useEffect(() => {
        getSources()
    }, [])

    const getNews = (event) => {
        event.preventDefault();
        if(source === "" || source === "nothing") {
            console.log("No source selected")
        }else{
            getCustomNews(source, relevance)
            console.log(customSelector.customNews)
        }
    }

    let news;

    if (customSelector.customNews.length > 0) {
        news = <div className="news">
                {customSelector.customNews.map(x => {
                    return (
                        <div className="post" key={x.title}>
                            <img src={x.urlToImage} alt={x.title} />
                            <h2>{x.title}</h2>
                            <p>{x.description}</p>
                        </div>
                    )
                })}
            </div>
    } else {
        news = <p>Select a source</p>
    }

    return (
        <React.Fragment>
            <section>
                <h2>Cutom Search</h2>
                <form onSubmit={getNews}>
                    <div className="form-control">
                        <label>Source</label>
                        <select onChange= {e => setSource(e.target.value)}>
                            <option value="nothing">Select an option</option>
                            {
                                sources.map(source => {
                                    return(
                                        <option key={source.id} value={source.id}>{source.name}</option>
                                    )
                                })
                            }
                        </select>
                        <label>Relevance</label>
                        <select onChange= {e => setRelevance(e.target.value)}>
                            <option value="latest">Latest</option>
                            <option value="top">Top</option>
                        </select>
                        <input type="submit" value="Search" />
                    </div>
                </form>
                {news}
            </section>
        </React.Fragment>
    )

};

export default Custom;