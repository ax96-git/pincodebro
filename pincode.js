

function Find(a){
  var modal = document.getElementById("resultset");
  var span = document.getElementsByClassName("close")[0];
  var foot= document.getElementById("foot");
  modal.style.display = "block";
  modal.style.height= "auto";
  foot.style.display="none"
  span.onclick = function() {
  modal.style.display = "none";
  
}

  let data1=parseInt(a);
  let u='https://api.postalpincode.in/pincode/';
  let url=u.concat(data1);
    fetch(url)
    .then(response => {
      return response.json();})
    .then(objectData=>{
 if ((objectData[0].Message)=="No records found" || a=='')    {
  document.getElementById("res").innerHTML=`<h1>Invaide pin code</h1>`
 } 
 else{
      let tab="";
      for (i=0; i<=objectData[0].PostOffice.length ; i++ ){
      objectData.map((value)=>{


        tab+=`
        <div class="table">
		<table><thead>
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
		  </tr></thead>

        
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
        `
      });
      document.getElementById("res").innerHTML=tab;
      //alert(tab);
}}})
}


function FindN(a){
  var modal = document.getElementById("resultset");
  var span = document.getElementsByClassName("close")[0];
  var foot= document.getElementById("foot");
  modal.style.display = "block";
  modal.style.height= "auto";
  foot.style.display="none"
  span.onclick = function() {
  modal.style.display = "none";
  
}

  let data1=a;
  let u='https://api.postalpincode.in/postoffice/';
  let url=u.concat(data1);
    fetch(url)
    .then(response => {
      return response.json();})
    .then(objectData=>{
 if ((objectData[0].Message)=="No records found" || data1=='')    {
  document.getElementById("res").innerHTML=`<h1>Incorrect Name Kindly check and retry</h1>`
 } 
 else{
      let tab="";
      for (i=0; i<=objectData[0].PostOffice.length ; i++ ){
      objectData.map((value)=>{


        tab+=`
        <div class="table">
		<table><thead>
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
		  </tr></thead>

        
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
        `
      });
      document.getElementById("res").innerHTML=tab;
      //alert(tab);
}}})
}
