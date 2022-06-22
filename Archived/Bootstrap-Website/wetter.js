let spp = document.querySelector('#app')

async function getWeather(city) {
    let response = await fetch(
        `https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${تهران}`,)
        {
            headers: {
                "api-key"; "862da2ec39f540ef8b8663c2d6126171"
            }
        }
    let data = await response.json()
    let now_temp = data.result.hava.summary.temp
    let today = data.result.hava.dayList[0]

    app.innerHTML = `
        <div class="card">
            <div class="wetter">
                <i style="font-size:3rem;" class="wi ${today.symbol}"></i>
            </div>
            <div class="card-body text-center">
                <h2>${City}</h2>
                <small class="my-3 d-block">${today.condition}</small>
                <div>
                    <button class="btn btn-danger">${today.max}</button>
                    <button class="btn btn-secondary">${now_temp}</button>
                    <button class="btn btn-primary">${today.min}</button>
                </div>
            </div>
        </div>
    `
}

getWeather ("تهران")