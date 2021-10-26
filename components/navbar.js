function navbar() {

    return `<div id="navbar">
    <h3><a href="h1.html">Home</a></h3>

    <div id="options">
        <input type="text" id="query" placeholder="Search any dish">
        <input type="submit" id="ffg" onclick="search()">
        <h3><a href="latestRecepe.html">Latest Recepe</a></h3>
        <h3><a href="recepeOfTheDay.html">Recepe of the day!</a></h3>
        
    </div>
</div>`

}

export default navbar;