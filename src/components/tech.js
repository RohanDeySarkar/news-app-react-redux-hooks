import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {fetchTech} from "../actions/fetchTechNews";

const Tech = () => {

    const techSelector = useSelector((state) => state.FetchTech)

    const dispatch = useDispatch()
    
    const getTechNews = () => dispatch(fetchTech());

    useEffect(() => {
        getTechNews();
    }, [])

    return (
        <React.Fragment>
            <section>
                <h2>Technology</h2>
                <div className="news">
                {/* {console.log(techSelector)} */}
                    {techSelector.techNews.map(x => {
                        return (
                            <div className="post" key={x.title}>
                                <img src={x.urlToImage} />
                                <h2>{x.title}</h2>
                                <p>{x.description}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </section>
        </React.Fragment>
    )
};

export default Tech;