

function Find(a){
  let data1=parseInt(a);
  let u='https://api.postalpincode.in/pincode/';
  let url=u.concat(data1);
    fetch(url)
    .then(response => {
      return response.json();})
    .then(objectData=>{
 if ((objectData[0].Message)=="No records found")    {
  document.getElementById("end").innerHTML=`<h3>invaide pin code</h3>`
 } 
 else{
      console.log(objectData[0].Message);
      console.log(objectData[0].PostOffice.length);
      let tab="";
      for (i=0; i<=objectData[0].PostOffice.length ; i++ ){
      objectData.map((value)=>{


        tab+=`
        <div class="container">
        <div class="table">
      <table style="width:100%">
        <tr>
          <th>Name</th>
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
          <td>${value.PostOffice[i].Name}</td>
          <td>${value.PostOffice[i].BranchType}</td>
          <td>${value.PostOffice[i].DeliveryStatus}</td>
          <td>${value.PostOffice[i].Circle}</td>
          <td>${value.PostOffice[i].District}</td>
          <td>${value.PostOffice[i].Division}</td>
          <td>${value.PostOffice[i].Region}</td>
          <td>${value.PostOffice[i].Block}</td>
          <td>${value.PostOffice[i].State}</td>
          <td>${value.PostOffice[i].Country}</td>
          <td>${value.PostOffice[i].Pincode}</td>
          </tr>
          </table>
          </div>
          </div>
        `
      });
      document.getElementById("res").innerHTML=tab;
}}})}
