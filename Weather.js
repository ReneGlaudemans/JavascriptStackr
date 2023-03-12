var res
var selector = document.querySelector('#city')
var stationdata
var wind = document.querySelector('#wind')
var temp = document.querySelector('#temp')
var description = document.querySelector('#description')
fetch('https://data.buienradar.nl/2.0/feed/json').then(res => res.json()).then((data) => {
    res = data.actual.stationmeasurements
    populateSelect(res)
}).catch(err =>alert('geen data kunnen ophalen'))
function populateSelect(res) {
    for (let i = 0; i < res.length; i++) {
        let opt = document.createElement('option')
        opt.value = i
        opt.text = res[i].regio
        selector.add(opt)
    }
}
selector.addEventListener("change",function(){
    stationdata = res[this.value]
    var windval = stationdata['windspeed']
    var tempval = stationdata['temperature']
    var descriptionval = stationdata['weatherdescription']
    wind.innerHTML = `Windkracht: ${windval}`
    temp.innerHTML = `Temperatuur: ${tempval}`
    description.innerHTML = `Omschrijving: ${descriptionval}`
})


