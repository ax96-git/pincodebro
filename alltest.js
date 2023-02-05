

function Find(a){
    let data1=parseInt(a);
    let u='https://api.postalpincode.in/pincode/';
    let url=u.concat(data1);
      fetch(url)
      .then(response => {
        return response.json();})
      .then(objectData=>{
        console.log(objectData[0].Message);
        if(objectData[0].Message=="Number of pincode(s) found:1"){
        let tab="";
        objectData.map((value)=>{
          tab+=`
          <div class="container">
          <div class="table">
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>BranchType</th>
            <th>DeliveryStatus</th>
            <th>Circle</th>
            <th>District</th>
            <th>Division</th>
            <th>Region</th>
            <th>Block</th>
            <th>State</th>
            <th>Country</th>
            <th>Pincode</th>
          </tr>
          <tr>
            <td>${value.PostOffice[0].Name}</td>
            <td>${value.PostOffice[0].Description}</td>
            <td>${value.PostOffice[0].BranchType}</td>
            <td>${value.PostOffice[0].DeliveryStatus}</td>
            <td>${value.PostOffice[0].Circle}</td>
            <td>${value.PostOffice[0].District}</td>
            <td>${value.PostOffice[0].Division}</td>
            <td>${value.PostOffice[0].Region}</td>
            <td>${value.PostOffice[0].Block}</td>
            <td>${value.PostOffice[0].State}</td>
            <td>${value.PostOffice[0].Country}</td>
            <td>${value.PostOffice[0].Pincode}</td>
          </tr>
          </table>
          </div>
          </div>
          `
        });
        document.getElementById("res").innerHTML=tab;
      }
      else {
        document.getElementById("end").innerHTML=`<h1>No record found  </h1>`;
      }
      })}
  /*function Find(]a){
  
    let data1=parseInt(a);
    
    let u='https://api.postalpincode.in/pincode/';
    
    let url=u.concat(data1);
    
      fetch(url)
    
      .then(response => response.json())
    
      .then(data => console.log(data));}
  *//*
  function Find(a){
    let data1=parseInt(a);
    let u='https://api.postalpincode.in/pincode/';
    let url=u.concat(data1);
    let final;
    let todos = [];
      fetch(url)
      .then(response => {
        return response.json();})
  
      .then(data => {
        data.forEach(user => {
          /*todos=user.PostOffice[0];
          console.log(todos);
          const markup=`<li>${user.Message}</li><li>${user.PostOffice}</li></li><li>${user.Status}</li>`;
          document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
        }); })
        .catch(error => console.log(error));
      }
      */
    /*
  function Find(a){
    let data1=parseInt(a);
    let u='https://api.postalpincode.in/pincode/';
    let url=u.concat(data1);
    let todos = [];
      fetch(url)
      .then(response => response.json())
      .then(json => todos = json)
      .then(() => {
        for (let item of todos) {
          resultbox.innerHTML += `
  <div class="card">
  <h5>${item.Message}</h5>
  <h5>${item.Status}</h5>
  <h5>${item.PostOffice[0]}</h5>
  </div>
  `;
        }
      });
    }
  */