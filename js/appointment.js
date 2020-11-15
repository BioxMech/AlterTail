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
            var current = 0;
            var modal_str = document.getElementById("modalContent").innerHTML
            for(var user of records) {
                var datetime = user.appt_date_time.split(" ")[0].split("-");                
                var title = user.service_title.split(" - ")[0];
                var price = user.service_title.split(" - ")[1];

                modal_str += 
                    `
                    <div class="modal fade" id="confirmation${user.shop_name}" tabindex="-1" role="dialog" aria-labelledby="confirmationLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content" id="modalContent">
                        <div class="modal-header">
                          <h5 class="modal-title" id="confirmationLabel">Confirmation to cancel appointment with ${user.shop_name}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Are you sure you want to cancel your appointment with Assemble? Once cancelled, your appointment timeslot will be given away.
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <form action="backend/processDelete.php" method="POST">
                            <input type="hidden" value="${user.shop_name}" name="shop_name">
                            <input type="hidden" value="${email}" name="email" >
                            <input type="submit" class="btn btn-danger" value="Cancel Appointment"></input>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>  
                
                `;

                if (current > datetime[0][2]) {
                    str += `
                    <tr>
                        <td>
                        <!-- Image + Shop Name -->
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${user.image_url}" alt="${user.shop_name}">
                            <div class="card-body">
                            <strong><h4 class="card-title" style="text-align: center;">${user.shop_name}</h4></strong>
                            </div>
                        </div>
                        </td>

                        <!-- Details -->
                        <td style="padding-top: 30px;">
                        <strong>SGD ${price}</strong> &nbsp (${title})
                        <p>
                            ${user.appt_date_time}
                        </p>
                        <p>
                            ${user.service_description}
                        </p>
                        <p style="margin-top: 10px;">
                            <a href="" class="cancelButton" data-toggle="modal" data-target="#confirmation${user.shop_name}">Cancel</a>
                            &nbsp
                            <a href="shopPage.html?shop_name${user.shop_name}" class="button" style="width:10%">To ${user.shop_name}</a>
                        </p>
                        </td>
                    </tr>
                        `;
                    
                }
                else {
                    str = `
                    <tr>
                        <td>
                        <!-- Image + Shop Name -->
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${user.image_url}" alt="${user.shop_name}">
                            <div class="card-body">
                            <strong><h4 class="card-title" style="text-align: center;">${user.shop_name}</h4></strong>
                            </div>
                        </div>
                        </td>

                        <!-- Details -->
                        <td style="padding-top: 30px;">
                        <strong>SGD ${price}</strong> &nbsp (${title})
                        <p>
                            ${user.appt_date_time}
                        </p>
                        <p>
                            ${user.service_description}
                        </p>
                        <p style="margin-top: 10px;">
                            <a href="" class="cancelButton" data-toggle="modal" data-target="#confirmation${user.shop_name}">Cancel</a>
                            &nbsp
                            <a href="shopPage.html?shop_name=${user.shop_name}" class="button">To ${user.shop_name}</a>
                        </p>
                        </td>
                    </tr>
                        ` + str;
                    current = datetime[0][2]
                }
                
                
            }

            document.getElementById("mainContent").innerHTML = str;
            document.getElementById("modalContent").innerHTML = modal_str;
        }
        else {
            document.getElementById("mainContent").innerHTML = `
            <td style="text-align: right;">
                <img class="ml-auto" style="left:100%; max-width: 50%;" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2IiB4Mj0iMjU2IiB5MT0iNTEyIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmQzYTg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhNjhkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMwMSIgeDI9IjMwMSIgeTE9IjI3MSIgeTI9IjYxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMyY2MiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYyZjQiLz48L2xpbmVhckdyYWRpZW50PjxnPjxwYXRoIGQ9Im01MDguOTkzIDE1Ni45OTFjLTIuODMzLTMuNzcyLTcuMjc2LTUuOTkxLTExLjk5My01Ljk5MWgtMTA3LjI1N2MtNy4xNjMtNDIuNTExLTQ0LjIyNy03NS04OC43NDMtNzVzLTgxLjU4IDMyLjQ4OS04OC43NDMgNzVoLTkzLjIzNWwtMTkuNi0xMzguMTA3Yy0xLjA0OS03LjM5Ni03LjM4LTEyLjg5My0xNC44NTEtMTIuODkzaC02OS41NzFjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoNTYuNTVsMTkuNTk5IDEzOC4xMDR2LjAwMS4wMDNsMjIuNjQzIDE1OS40OTljMi40NTcgMTcuMTk3IDEwLjgyIDMyLjk3OCAyMy41OTggNDQuNjg0LTEwLjAwNCA4LjI2LTE2LjM5IDIwLjc1My0xNi4zOSAzNC43MDkgMCAyMC43MjMgMTQuMDg1IDM4LjIwOSAzMy4xODEgNDMuNDE0LTIuMDQ0IDUuMTM3LTMuMTgxIDEwLjczLTMuMTgxIDE2LjU4NiAwIDI0LjgxMyAyMC4xODcgNDUgNDUgNDVzNDUtMjAuMTg3IDQ1LTQ1YzAtNS4yNTgtLjkxNS0xMC4zMDUtMi41OC0xNWgxMjUuMTZjLTEuNjY1IDQuNjk1LTIuNTggOS43NDItMi41OCAxNSAwIDI0LjgxMyAyMC4xODcgNDUgNDUgNDVzNDUtMjAuMTg3IDQ1LTQ1LTIwLjE4Ny00NS00NS00NWgtMjQwYy04LjI3MSAwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1IDE1LTE1aDIyNC43NDJjMzMuMzA5IDAgNjIuOTYzLTIyLjM2OCA3Mi4wOTgtNTQuMzM5bDQ4LjU2Ny0xNjcuNDgzYzEuMzEzLTQuNTMxLjQxOS05LjQxNi0yLjQxNC0xMy4xODd6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxnPjxnPjxwYXRoIGQ9Im0zMDEgNjFjLTU3Ljg5NyAwLTEwNSA0Ny4xMDMtMTA1IDEwNXM0Ny4xMDMgMTA1IDEwNSAxMDUgMTA1LTQ3LjEwMyAxMDUtMTA1LTQ3LjEwMy0xMDUtMTA1LTEwNXptMzEuODIgMTE1LjYwN2M1Ljg1OCA1Ljg1OCA1Ljg1OCAxNS4zNTUgMCAyMS4yMTMtNS44NTkgNS44NTgtMTUuMzU1IDUuODU3LTIxLjIxMyAwbC0xMC42MDctMTAuNjA3LTEwLjYwNyAxMC42MDdjLTUuODU4IDUuODU4LTE1LjM1NiA1Ljg1Ny0yMS4yMTMgMC01Ljg1OC01Ljg1Ny01Ljg1OC0xNS4zNTUgMC0yMS4yMTNsMTAuNjA3LTEwLjYwNy0xMC42MDctMTAuNjA3Yy01Ljg1OC01Ljg1OC01Ljg1OC0xNS4zNTUgMC0yMS4yMTNzMTUuMzU1LTUuODU3IDIxLjIxMyAwbDEwLjYwNyAxMC42MDcgMTAuNjA3LTEwLjYwN2M1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDAgNS44NTggNS44NTcgNS44NTggMTUuMzU1IDAgMjEuMjEzbC0xMC42MDcgMTAuNjA3eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4=" />
            </td>

            <td style="padding-top: 30px;">
                <p>You <b>do not</b> have any scheduled appointments currently. </p>
                <p>
                <i class="fas fa-shopping-basket"></i>
                To start booking for appointments with sellers at AlterTail, you can browse through our services stated below: </p>
                <a class="button" href="alteration.html">Alteration</a> &nbsp <a class="button" href="location.html">Tailoring</a>
            </td>
                        `;
        }
    
    }
        var url = "projectAPI/user/retrieveAppointments.php?email=" + email;
        
    
        request.open("GET", url, true);
    
        request.send();
    
}

function modalCreation(shop_name) {

    var modal_str = document.getElementById("modalContent").innerHTML
                modal_str += 
                    `
                <div class="modal fade" id="#confirmation${shop_name}" tabindex="-1" role="dialog" aria-labelledby="confirmationLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content" id="modalContent">
                            <div class="modal-header">
                                <h5 class="modal-title" id="confirmationLabel">Confirmation to cancel appointment with ${shop_name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to cancel your appointment with ${shop_name}? Once cancelled, your appointment timeslot will be given away.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <form action="backend/processDelete.php" method="POST">
                                    <input type="hidden" value="${shop_name}" name="shop_name">
                                    <input type="hidden" value="${email}" name="email">
                                    <input type="submit" class="btn btn-danger" value="Cancel Appointment"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>            
                
                `;
                console.log(shop_name)

    document.getElementById("modalContent").innerHTML = modal_str;

}