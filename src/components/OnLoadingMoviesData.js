const OnLoadingMoviesData = (Component) => {
    return ({ isLoading, ...props }) => {
        if (!isLoading) return <Component {...props} />

        else return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default OnLoadingMoviesData;