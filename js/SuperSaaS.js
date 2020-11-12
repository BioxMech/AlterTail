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
    alert("fuck");
  
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", `https://www.supersaas.com/api/users/${SuperSaaS_user_id}.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=${email}&user[full_name]=${fname}`,true);
    // xhr.setRequestHeader("Cookie", "_SS_s=Vk5aNjU5KzZZd2Z5V09ubGRHMjlRckZKb0pIbDVIV1FlTnIxY0g1LzBpeTlhZFZuNWhnV1plNTFENUYyMFVUVXUwN0Q4Rnp0V1BYRGFLOFIySWZEcUhRZGxsbXB6aXVZU0NVZmlRbTVNVUxPZEhDdExFQnpRcGYyeldDRmZyeFpieFptWmpSOU1XMGh4ZUwwVERObDJ3U3Y5TkE5a1AvUFBuK3BnYTdmNFVYVHpJZEdlUkxNYXVGT3l0ejZHb01tL0xWdHFkVCtHRnRoSmZEcmxlNzQ4RVZ2QmZOZzcrcUJPN2ZuaVI0dE9zRT0tLWFUVmxRMXlQSHlnL0hMRVF1Q3pEWkE9PQ%3D%3D--20dcd26d015bafbfa06e6513aa9a9a02ecec5492");

    xhr.send();
}


