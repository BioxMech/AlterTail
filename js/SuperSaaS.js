var currentdate = new Date();
var currYear = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + (currentdate.getDate().toString().padStart(2, "0"));
var currTime = (currentdate.getHours().toString().padStart(2,"0"));

function CreateUser(email, fname,SuperSaaS_user_id) {
    var xhr = new XMLHttpRequest();
    
  
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", `https://www.supersaas.com/api/users/${SuperSaaS_user_id}.json?account=PetrasTYR&api_key=60Sdu0PWYumxHliWn1Uieg&user[name]=${email}&user[full_name]=${fname}`,true);

    xhr.send();
}

function getAvailabilities(schedule_id) {
  console.log(currYear);
  console.log(currTime);
  var url = `https://www.supersaas.com/api/free/${schedule_id}.json?from=${currYear}%20${currTime}:00:00&api_key=60Sdu0PWYumxHliWn1Uieg&maxresults=50`;


  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
  {
    headers: {
      "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
    }
  })
  .then((res) => {
    console.log("=========== DEBUG (success) ==========");
    console.log(res);
    var slots_array = res['data']['slots'];
    // console.log(slots_array);
    var html_str = ``;
    for (slot of slots_array) {
      // console.log(slot);
      // var booking_end = slot.finish;
      var date = slot.start.slice(0,10);
      var start_time = slot.start.slice(11);
      var end_time = slot.finish.slice(11);
      // var booking_start_slot = date + '%20' + start_time;
      // var booking_end_slot = date + '%20' + end_time;
      // console.log(booking_end_slot);
      
      // html_str += `<li class='dropdown-item' id='slotDropdownItem' value='${booking_start}' onselect='displaySlot()'>${date} ${start_time}-${end_time}</li>`;
      // html_str += `<option value='${booking_start_slot}'>${date} ${start_time}-${end_time}</option>`;
      html_str += `<option>${date} ${start_time}-${end_time}</option>`;
    }
    // console.log(html_str);
    document.getElementById("dropDownMenu").innerHTML = html_str;
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

  console.log("======== DEBUG (getAgenda) ===========");

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

function CreateEvent(schedule_id,booking_start,booking_end,SuperSaaS_user_id,fname) {
  console.log("======== DEBUG (getAgenda) ===========");

  var url = `https://www.supersaas.com/api/bookings.json?schedule_id=${schedule_id}&api_key=60Sdu0PWYumxHliWn1Uieg&booking[start]=${booking_start}&booking[finish]=${booking_end}&user_id=${SuperSaaS_user_id}&booking[full_name]=${fname}`;

  let final_url = `${'https://cors-anywhere.herokuapp.com/'}${url}`;
  console.log(final_url);

  axios.post(`${'https://cors-anywhere.herokuapp.com/'}${url}`,
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

function getSlotDetails(schedule_id) {
  var selectedSlot = document.getElementById("dropDownMenu").value
  var booking_start = selectedSlot.slice(0,10) + '%20' + selectedSlot.slice(11,16);
  // console.log(booking_start);
  var booking_end = selectedSlot.slice(0,10) + '%20' + selectedSlot.slice(17);
  // console.log(booking_end);
  CreateEvent(schedule_id,booking_start,booking_end,sessionStorage.getItem("SaaS_user_id"),sessionStorage.getItem("fname"));

}




