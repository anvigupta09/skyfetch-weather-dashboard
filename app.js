// asynchronous code (handled by web api)  {synchronous is handled by browser}

// let x = 5
// console.log(x)

// let y = 6
// console.log(y)

// setTimeout(()=>{
//     console.log("hello")
// },0)

// let z = 7 
// console.log(z)

// output will be 5,6,7,hello

// let x = 5
// console.log(x)

// let check = fetch('https://jsonplaceholder.typicode.com/posts')
// check
// .then((res)=>{
//     res.json()
// })
// .catch((err)=>{console.log(err)})

// let obj={
//     userId:909,
//     title:"new data",
//     body:"new body"
// }

// let x=fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         'Content-Type':"application/json"
//     },
//     body:JSON.stringify(obj)
// })

// x
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()})
// .then((data)=>{
//     console.log(data)
    
//     data.forEach((element) => {
//         let p1=document.createElement("p")
//         p1.innerText=element.title
//         p1.className= "p1"

//         let p2=document.createElement("p")
//         p2.innerText=element.body
//         p2.className= "p2"

//         document.body.appendChild(p1)
//         console.log(element.title)

//         let container=document.getElementById("container")
//         container.appendChild(p1)
//         container.appendChild(p2)


//     })

// })
// .catch((err)=>{console.log(err)})


// https://api.openweathermap.org/data/2.5/weather?q=London&appid=3d1da3ddc9455f601a9774402e907186&units=metric

// fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=3d1da3ddc9455f601a9774402e907186&units=metric")
// .then((res)=>{return res.json()})
// .then((data)=>{
//     console.log(data)
//     let p1=document.createElement("p")
//     p1.innerText=`Temperature in ${data.name} is ${data.main.temp} degree Celsius`
//     document.body.appendChild(p1)
// })
// .catch((err)=>{console.log(err)})


// Your OpenWeatherMap API Key
const API_KEY = '3d1da3ddc9455f601a9774402e907186';  // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=3d1da3ddc9455f601a9774402e907186&units=metri';

// Function to fetch weather data
function getWeather(city) {
    // Build the complete URL
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    // Make API call using Axios
    axios.get(url)
        .then(function(response) {
            // Success! We got the data
            console.log('Weather Data:', response.data);
            displayWeather(response.data);
        })
        .catch(function(error) {
            // Something went wrong
            console.error('Error fetching weather:', error);
            document.getElementById('weather-display').innerHTML = 
                '<p class="loading">Could not fetch weather data. Please try again.</p>';
        });
}

// Function to display weather data
function displayWeather(data) {
    // Extract the data we need
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    // Create HTML to display
    const weatherHTML = `
        <div class="weather-info">
            <h2 class="city-name">${cityName}</h2>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <div class="temperature">${temperature}°C</div>
            <p class="description">${description}</p>
        </div>
    `;
    
    // Put it on the page
    document.getElementById('weather-display').innerHTML = weatherHTML;
}

// Call the function when page loads
getWeather('London')

  
    







