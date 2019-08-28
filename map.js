let populateMap = (mymap, getColorForPercentage) => {
    mymap.invalidateSize();
    console.log("ok")
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic25vd2Zyb2dneTIwMDgiLCJhIjoiY2lmNXlwd2lzMDl3ZnNra3R5NXV1MGlvMyJ9.R9WDmpGRkHdFz1Y_MsbG0Q'
    }).addTo(mymap);

    $('#mapid').click((ev) => {
        mymap.invalidateSize();
    });

    var jarvisABounds = [
        [43.004241, -78.789153],
        [43.003462, -78.787841]
    ];
    let jarvisALot = L.rectangle(jarvisABounds, {
        color: getColorForPercentage("Jarvis A"),
        weight: 1
    }).bindTooltip("Jarvis A").on('click', () => showChart("Jarvis A")).addTo(mymap);;
    let jarvisBBounds = [
        [43.004226, -78.787537],
        [43.003435, -78.786319]
    ];
    L.rectangle(jarvisBBounds, {
        color: getColorForPercentage("Jarvis B"),
        weight: 1
    }).bindTooltip("Jarvis B").on('click', () => showChart("Jarvis B")).addTo(mymap);; in
    let governorsABounds = [
        [43.002909, -78.791195],
        [43.002418, -78.790160]
    ];
    L.rectangle(governorsABounds, {
        color: getColorForPercentage("Governors A"),
        weight: 1
    }).bindTooltip("Governors A").on('click', () => showChart("Governors A")).addTo(mymap);;

    let governorsCBounds = [
        [43.004213, -78.791208],
        [43.003409, -78.790161]
    ];
    L.rectangle(governorsCBounds, {
        color: getColorForPercentage("Governors C"),
        weight: 1
    }).bindTooltip("Governors C").on('click', () => showChart("Governors C")).addTo(mymap);;

    let governorsDBounds = [
        [43.004219, -78.792474],
        [43.003398, -78.791399]
    ];
    L.rectangle(governorsDBounds, {
        color: getColorForPercentage("Governors D"),
        weight: 1
    }).bindTooltip("Governors D").on('click', () => showChart("Governors D")).addTo(mymap);;

    let governorsEBounds = [
        [43.004181, -78.794725],
        [43.003377, -78.793606]
    ];
    L.rectangle(governorsEBounds, {
        color: getColorForPercentage("Governors E"),
        weight: 1
    }).bindTooltip("Governors E").on('click', () => showChart("Governors E")).addTo(mymap);;

    let fronczakBBounds = [
        [43.002411, -78.791176],
        [43.001606, -78.790172]
    ];
    L.rectangle(fronczakBBounds, {
        color: getColorForPercentage("Fronczak B"),
        weight: 1
    }).bindTooltip("Fronczak B").on('click', () => showChart("Hoch A")).addTo(mymap);;

    let hochsetterABounds = [
        [42.999310, -78.792171],
        [42.998191, -78.791227]
    ];
    L.rectangle(hochsetterABounds, {
        color: getColorForPercentage("Hoch A"),
        weight: 1
    }).bindTooltip("Hochsetter A").on('click', () => showChart("Hoch A")).addTo(mymap);

    let hochsetterBBounds = [
        [42.999394, -78.790945],
        [42.998201, -78.789846]
    ];
    L.rectangle(hochsetterBBounds, {
        color: getColorForPercentage("Hoch B"),
        weight: 1
    }).bindTooltip("Hochsetter B").addTo(mymap).on('click', () => showChart("Hoch B"));

    let jacobsABounds = [
        [42.998873, -78.788707],
        [42.998190, -78.787755]
    ];
    L.rectangle(jacobsABounds, {
        color: getColorForPercentage("Jacobs A"),
        weight: 1
    }).bindTooltip("Jacobs A").addTo(mymap).addTo(mymap).on('click', () => showChart("Jacobs B"));

    let jacobsBBounds = [
        [42.998865, -78.787484],
        [42.998215, -78.786691]
    ];
    L.rectangle(jacobsBBounds, {
        color: getColorForPercentage("Jacobs C"),
        weight: 1
    }).bindTooltip("Jacobs B").addTo(mymap);

    let jacobsCBounds = [
        [42.998897, -78.786432],
        [42.998195, -78.785565]
    ];
    L.rectangle(jacobsCBounds, {
        color: getColorForPercentage("Jacobs C"),
        weight: 1
    }).bindTooltip("Jacobs C").addTo(mymap);

    let bairdABounds = [
        [42.998891, -78.785212],
        [42.998220, -78.784236]
    ];
    L.rectangle(bairdABounds, {
        color: getColorForPercentage("Baird A"),
        weight: 1
    }).bindTooltip("Baird A").addTo(mymap);

    let bairdBBounds = [
        [42.999742, -78.785075],
        [42.999154, -78.784201]
    ];
    L.rectangle(bairdBBounds, {
        color: getColorForPercentage("Baird B"),
        weight: 1
    }).bindTooltip("Baird B").addTo(mymap).on('click', () => showChart("Baird B"));

    let sleeBBounds = [
        [42.999748, -78.783856],
        [42.999126, -78.783024]
    ];
    L.rectangle(sleeBBounds, {
        color: getColorForPercentage("Slee B"),
        weight: 1
    }).bindTooltip("Slee B").addTo(mymap).on('click', () => showChart("Slee B"));

    let cookeABounds = [
        [42.999683, -78.793812],
        [42.999317, -78.792731]
    ];
    L.rectangle(cookeABounds, {
        color: getColorForPercentage("Cooke A"),
        weight: 1
    }).bindTooltip("Cooke A").addTo(mymap).on('click', () => showChart("Cooke A"));

    let cookeBBounds = [
        [42.999126, -78.793796],
        [42.998325, -78.792708]
    ];
    L.rectangle(cookeBBounds, {
        color: getColorForPercentage("Cooke B"),
        weight: 1
    }).bindTooltip("Cooke B").addTo(mymap).on('click', () => showChart("Cooke B"));;

    let bookstoreBounds = [
        [43.003395, -78.785605],
        [43.002400, -78.784899]
    ];
    L.rectangle(bookstoreBounds, {
        color: getColorForPercentage("Bookstore"),
        weight: 1
    }).bindTooltip("Bookstore").addTo(mymap).on('click', () => showChart("Bookstore"));;

    let parkBounds = [
        [42.999953, -78.788916],
        [42.999472, -78.788453]
    ];
    L.rectangle(parkBounds, {
        color: getColorForPercentage("Park Lot"),
        weight: 1
    }).bindTooltip("Park Lot").addTo(mymap).on('click', () => showChart("Park Lot"));;

    let furnasBounds = [
        [43.003035, -78.786749],
        [43.001856, -78.786083]
    ];
    L.rectangle(furnasBounds, {
        color: getColorForPercentage("Furnas"),
        weight: 1
    }).bindTooltip("Furnas").addTo(mymap).on('click', () => showChart("Furnas"));;

    let arenaBounds = [
        [43.001379, -78.779779],
        [43.000237, -78.779015]
    ];
    L.rectangle(arenaBounds, {
        color: getColorForPercentage("Arena"),
        weight: 1
    }).bindTooltip("Arena").addTo(mymap).on('click', () => showChart("Arena"));
    return mymap

}
module.exports = populateMap;