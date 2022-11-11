function getFromServer() {
  //USING FETCH instead of Jquery
  fetch("https://nusstore.glitch.me/items")
    // when we get a response map the body to json
    .then((response) => response.json())
    // and pass the JSON data to mydata for rendering
    .then((data) => renderhtml(data));
}


//Using callback function
function renderhtml(data) {
  let x=0;
  var textCard = "";  
  var textTable =

  
  data.forEach(function (item) {
    //TABLE
    textTable = textTable +
      `<tr>
        <th scope="row"> ${item.itemId} </th>
        <td> ${item.name} </td>
        <td> ${item.price} </td>
        <td> ${item.pic} </td>
      </tr>`;

    
    //CARD
    textCard = textCard +
         `<div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">${item.name}</h4>
          </div>
          <div class="card-body">
        
            <h1 class="card-title pricing-card-title">$${item.price}</h1>
            <ul class="list-unstyled mt-3 mb-4">
              
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Buy</button>
          </div>
        </div>`;
    x++;
    
  });

  textTable += "</tbody></table>";
  document.getElementById("mypanelCard").innerHTML = textCard;
}