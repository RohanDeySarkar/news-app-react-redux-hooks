export const fetchCustomNews = (source, relevance) => (dispatch) => {
	// here can use dispatch because using custom middleware
    return (
        fetch("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=<33682c26e7b74e93823d082fecb9394f>")
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch({
                type: "FETCH_CUSTOM",
                payload: data.articles
            })
        })
        .catch(err => {
            console.log(err)
        })
    )
};