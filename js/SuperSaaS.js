function Initiate() {
    var email = document.getElementById("registerEmail").value;
    var fname = document.getElementById('registerName').value;
    var SuperSaaS_user_id = "";
    for (var i = 0; i < 3; i++) {
        var n = (Math.random(1,9) * 10).toString;
        SuperSaaS_user_id += n;
    }
    SuperSaaS_user_id += "fk";
    alert(SuperSaaS_user_id);
    alert(email);
    alert(fname);
    document.getElementById("SuperSaaS_user_id").value = SuperSaaS_user_id;
    var pw = document.getElementById("registerPassword").value;
    // CreateUser(email, fname,SuperSaaS_user_id, pw);
}

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

function getAppointments(schedule_id) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var response_json = JSON.parse(request.responseText);
      console.log(response_json);
    }
  }
  var url = `https://www.supersaas.com/api/range/${schedule_id}.json?api_key=60Sdu0PWYumxHliWn1Uieg`;
  request.open("GET",url,true);
  request.send()
}

function getAgenda(schedule_id, email) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var response_json = JSON.parse(request.responseText);
      console.log(response_json);
    }
  }
  var url = `https://www.supersaas.com/api/agenda/${schedule_id}.json?user=${email}&api_key=60Sdu0PWYumxHliWn1Uieg`;
  request.open("GET",url,true);
  request.send();
}

// DEBUG
function getAgenda2(schedule_id, email) {
  var url = `https://www.supersaas.com/api/agenda/${schedule_id}.json?user=${email}&api_key=60Sdu0PWYumxHliWn1Uieg`;
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // headers.append('Accept', 'application/json');
  // headers.append('Origin','http://localhost:3000');

  fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000'
      }
  })
  .then(response => response.json())
  .then(data => {
    console.log("======== success =======");
    console.log(data);
  })
  .catch(error => console.log('Error : ' + error.message));
}

// DEBUG
function getAgenda3(schedule_id, email) {

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

