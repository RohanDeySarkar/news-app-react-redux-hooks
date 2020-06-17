export const fetchTech = () => (dispatch) => {
    // here can use dispatch because using custom middleware
    return (
        fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-11&sortBy=publishedAt&apiKey=33682c26e7b74e93823d082fecb9394f")
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch({
                type: "FETCH_TECH",
                payload: data.articles
            })
        })
        .catch(err => {
            console.log(err)
        })
)
};