var currentdate = new Date();
var currYear = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + (currentdate.getDate().toString().padStart(2, "0"));
var currTime = (currentdate.getHours().toString().padStart(2,"0"));

function CreateUser(email, fname,SuperSaaS_user_id) {
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    
  
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", `https://www.supersaas.com/api/users/${SuperSaaS_user_id}.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=${email}&user[full_name]=${fname}`,true);
    // xhr.setRequestHeader("Cookie", "_SS_s=Vk5aNjU5KzZZd2Z5V09ubGRHMjlRckZKb0pIbDVIV1FlTnIxY0g1LzBpeTlhZFZuNWhnV1plNTFENUYyMFVUVXUwN0Q4Rnp0V1BYRGFLOFIySWZEcUhRZGxsbXB6aXVZU0NVZmlRbTVNVUxPZEhDdExFQnpRcGYyeldDRmZyeFpieFptWmpSOU1XMGh4ZUwwVERObDJ3U3Y5TkE5a1AvUFBuK3BnYTdmNFVYVHpJZEdlUkxNYXVGT3l0ejZHb01tL0xWdHFkVCtHRnRoSmZEcmxlNzQ4RVZ2QmZOZzcrcUJPN2ZuaVI0dE9zRT0tLWFUVmxRMXlQSHlnL0hMRVF1Q3pEWkE9PQ%3D%3D--20dcd26d015bafbfa06e6513aa9a9a02ecec5492");

    xhr.send();
}

function getAvailabilities(schedule_id) {
  console.log(currYear);
  console.log(currTime);
  var url = `https://www.supersaas.com/api/free/${schedule_id}.json?from=${currYear}%20${currTime}:00:00&api_key=60Sdu0PWYumxHliWn1Uieg&maxresults=20`;
  // let final_url = `${'https://cors-anywhere.herokuapp.com/'}${url}`;

  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
  {
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
    }
  })
  .then((res) => {
    console.log("=========== DEBUG (success) ==========");
    // console.log(res);
    var slots_array = res['data']['slots'];
    // console.log(slots_array);
    var html_str = ``;
    for (slot of slots_array) {
      // console.log(slot);
      var booking_start = slot.start;
      // var booking_end = slot.finish;
      var date = slot.start.slice(0,10);
      var start_time = slot.start.slice(11);
      var end_time = slot.finish.slice(11);
      
      html_str += `<button class='dropdown-item' value='${booking_start}'>${date} ${start_time}-${end_time}</button>`;

    }
    document.getElementById("dropdownMenu").innerHTML = html_str;
  })
  .catch((err) => {
    console.log("=========== DEBUG (error) ==========");
    console.log(err.response);
  })
}

function getAppointments(schedule_id) {
  
  var url = `https://www.supersaas.com/api/range/${schedule_id}.json?api_key=60Sdu0PWYumxHliWn1Uieg`;
  let final_url = `${'https://cors-anywhere.herokuapp.com/'}${url}`;

  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
  {
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
    }
  })
  .then((res) => {
    console.log("=========== DEBUG (success) ==========");
    console.log(res['data']['bookings']);
  })
  .catch((err) => {
    console.log("=========== DEBUG (error) ==========");
    console.log(err.response);
  })

}


// DEBUG
function getAgenda(schedule_id, email) {

  console.log("======== DEBUG (getAgenda3) ===========");

  var url = `https://www.supersaas.com/api/agenda/${schedule_id}.json?user=${email}&api_key=60Sdu0PWYumxHliWn1Uieg`;

  let final_url = `${'https://cors-anywhere.herokuapp.com/'}${url}`;
  console.log(final_url);

  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
  {
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
    }
  })
  .then((res) => {
    console.log("=========== DEBUG (success) ==========");
    console.log(res);
  })
  .catch((err) => {
    console.log("=========== DEBUG (error) ==========");
    console.log(err.response);
  })
}

function CreateEvent() {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    console.log(this.readyState);
    console.log(this.status);

    if (this.readyState == 4 && this.status == 201) {
      console.log("Done")
    }
  }
  var url = `https://www.supersaas.com/api/bookings.json?schedule_id=534325&api_key=60Sdu0PWYumxHliWn1Uieg&booking[start]=2020-11-13%2010:00:00&booking[finish]=2020-11-13%2011:00:00&user_id=914fk&booking[full_name]=Tan%20Yi%20Rui%20Petras`;
  
  request.open("POST", url, true);
  request.send();
}





