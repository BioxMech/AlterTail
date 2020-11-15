var email = sessionStorage.getItem("email")

function displayAppointment() {
    var request = new XMLHttpRequest(); // Prep to make an HTTP request
    request.onreadystatechange = function() {
        // Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            // Convert responseText to JSON
            // console.log(this.responseText);
            var response_json = JSON.parse(this.responseText);
            var records = response_json.records;

            // console.log(records)

            var str = ``;

            for(var user of records) {
                str += `
                <td>
                  <!-- Image + Shop Name -->
                  <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${user.image_url}" alt="${user.shop_name}">
                    <div class="card-body">
                      <h5 class="card-title" style="text-align: center;">${user.shop_name}</h5>
                    </div>
                  </div>
                </td>

                <!-- Details -->
                <td>
                  <strong>${user.service_price}</strong>
                  <p>${user.service_title}</p>
                  <p>
                    ${user.appt_date_time}
                  </p>
                  <p>
                    ${user.service_description}
                  </p>
                  <p>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmation">
                      Cancel
                    </button>
                    &nbsp
                    <button type="button" class="btn btn-dark">
                      To ${user.shop_name}
                    </button>
                  </p>
                </td>
              </tr>
                `;
                
            }

            document.getElementById("mainContent").innerHTML = str;
        }
        else {
            document.getElementById("mainContent").innerHTML = `
            <td style="text-align: right;">
                <img class="ml-auto" style="left:100%; max-width: 50%;" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2IiB4Mj0iMjU2IiB5MT0iNTEyIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQzYTg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhNjhkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMwMSIgeDI9IjMwMSIgeTE9IjI3MSIgeTI9IjYxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMyY2MiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYyZjQiLz48L2xpbmVhckdyYWRpZW50PjxnPjxwYXRoIGQ9Im01MDguOTkzIDE1Ni45OTFjLTIuODMzLTMuNzcyLTcuMjc2LTUuOTkxLTExLjk5My01Ljk5MWgtMTA3LjI1N2MtNy4xNjMtNDIuNTExLTQ0LjIyNy03NS04OC43NDMtNzVzLTgxLjU4IDMyLjQ4OS04OC43NDMgNzVoLTkzLjIzNWwtMTkuNi0xMzguMTA3Yy0xLjA0OS03LjM5Ni03LjM4LTEyLjg5My0xNC44NTEtMTIuODkzaC02OS41NzFjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoNTYuNTVsMTkuNTk5IDEzOC4xMDR2LjAwMS4wMDNsMjIuNjQzIDE1OS40OTljMi40NTcgMTcuMTk3IDEwLjgyIDMyLjk3OCAyMy41OTggNDQuNjg0LTEwLjAwNCA4LjI2LTE2LjM5IDIwLjc1My0xNi4zOSAzNC43MDkgMCAyMC43MjMgMTQuMDg1IDM4LjIwOSAzMy4xODEgNDMuNDE0LTIuMDQ0IDUuMTM3LTMuMTgxIDEwLjczLTMuMTgxIDE2LjU4NiAwIDI0LjgxMyAyMC4xODcgNDUgNDUgNDVzNDUtMjAuMTg3IDQ1LTQ1YzAtNS4yNTgtLjkxNS0xMC4zMDUtMi41OC0xNWgxMjUuMTZjLTEuNjY1IDQuNjk1LTIuNTggOS43NDItMi41OCAxNSAwIDI0LjgxMyAyMC4xODcgNDUgNDUgNDVzNDUtMjAuMTg3IDQ1LTQ1LTIwLjE4Ny00NS00NS00NWgtMjQwYy04LjI3MSAwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1IDE1LTE1aDIyNC43NDJjMzMuMzA5IDAgNjIuOTYzLTIyLjM2OCA3Mi4wOTgtNTQuMzM5bDQ4LjU2Ny0xNjcuNDgzYzEuMzEzLTQuNTMxLjQxOS05LjQxNi0yLjQxNC0xMy4xODd6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxnPjxnPjxwYXRoIGQ9Im0zMDEgNjFjLTU3Ljg5NyAwLTEwNSA0Ny4xMDMtMTA1IDEwNXM0Ny4xMDMgMTA1IDEwNSAxMDUgMTA1LTQ3LjEwMyAxMDUtMTA1LTQ3LjEwMy0xMDUtMTA1LTEwNXptMzEuODIgMTE1LjYwN2M1Ljg1OCA1Ljg1OCA1Ljg1OCAxNS4zNTUgMCAyMS4yMTMtNS44NTkgNS44NTgtMTUuMzU1IDUuODU3LTIxLjIxMyAwbC0xMC42MDctMTAuNjA3LTEwLjYwNyAxMC42MDdjLTUuODU4IDUuODU4LTE1LjM1NiA1Ljg1Ny0yMS4yMTMgMC01Ljg1OC01Ljg1Ny01Ljg1OC0xNS4zNTUgMC0yMS4yMTNsMTAuNjA3LTEwLjYwNy0xMC42MDctMTAuNjA3Yy01Ljg1OC01Ljg1OC01Ljg1OC0xNS4zNTUgMC0yMS4yMTNzMTUuMzU1LTUuODU3IDIxLjIxMyAwbDEwLjYwNyAxMC42MDcgMTAuNjA3LTEwLjYwN2M1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDAgNS44NTggNS44NTcgNS44NTggMTUuMzU1IDAgMjEuMjEzbC0xMC42MDcgMTAuNjA3eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4=" />
            </td>

            <td style="padding-top: 30px;">
                <p>You do not have any scheduled appointments currently. </p>
                <p>To start booking for appointments at AlterTail, you can browse through our services below: </p>
                <a href="">Alteration</a>, <a href="">Tailoring</a> and/or <a href="">Cleaning</a>
            </td>
                        `;
        }
    
    }
        var url = "projectAPI/user/retrieveAppointments.php?email=" + email;
        
    
        request.open("GET", url, true);
    
        request.send();
    
}