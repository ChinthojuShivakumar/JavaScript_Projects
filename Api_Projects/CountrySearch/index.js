const form = document.getElementById("form")
const div = document.getElementById("div")




form.addEventListener('submit', async function(e){
    e.preventDefault()
    // console.log(e);
    // console.log(e.target[0].value);

    apiKey = "hxgQt7pYs8h5q4NsZ2ZFMzFIWc5MSobDrCQ5dBKN"

    try{
        let response = await fetch(`https://countryapi.io/api/all?apikey=${apiKey}`)

        let data = await response.json()

        

        let dataArray = []

        



        for (const country in data) {
            if (data.hasOwnProperty(country)) {
                dataArray.push(data[country])
            }
        }

        console.log(dataArray[0]);


        // div.innerHTML = ''
       


        let map = dataArray.map((element)=>{
            
            const container = document.createDocumentFragment()

          

            const div2 = document.createElement("div")

            // div2.style.backgroundColor = 'red'
            
            const img = document.createElement("img")
            img.src = element.flag.large
            img.alt = "Flag"

            const p = document.createElement("p")
            p.textContent = "Country Name: "+element.name

            const region = document.createElement("p")
            region.textContent = "Region: "+element.region

            const capital = document.createElement("p")
            capital.textContent = "Capital: "+element.capital

            const callingCode = document.createElement("p")
            callingCode.textContent = "Calling code is Starting with: " + element.callingCode

            div2.appendChild(img)
            div2.appendChild(p)
            
            div2.appendChild(region)
            div2.appendChild(capital)
            div2.appendChild(callingCode)

            container.appendChild(div2)

            
            if ((e.target[0].value).toLowerCase() == (element.name).toLowerCase()){
                div.appendChild(container)
                // div.appendChild(div2)
            }

            
            
        })

    } catch(error){
        console.log("Error: ",error)
    }
     


})
