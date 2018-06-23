//https://developer.spotify.com/documentation/general/guides/authorization-guide/
//look at the implicit grant flow option
app = {}


app.getArtists = (artistNames) => $.ajax({

})

app.init = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let artists = $('input[type=search]').val();
        artists = artists
            .split(',')
            .map(app.getArtists);
    })
}

$(app.init);