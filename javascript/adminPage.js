let logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", logout);
function logout() {
    window.location.href = "index.html";
  }

  let dbAPI;
createDbObject();
async function createDbObject() {
   dbAPI = await new DB();
   renderData();
};

function renderData(){
    let result = dbAPI.selectAll("SELECT * FROM response ORDER BY id DESC");
    const responseCount = document.getElementById("responseCount");
    responseCount.textContent = result[0].values.length;
    let home = [], travel = [], food = [], electronics = [], shopping = [];
    if (result.length === 0) {
        return;
      }
      let labels = [], avg = [];
      const groupedData = {};
      result[0].values.forEach((eachResponse) => {
        home.push(eachResponse[4]);
        travel.push(eachResponse[5]);
        food.push(eachResponse[6]);
        electronics.push(eachResponse[7]);
        shopping.push(eachResponse[8]);
        const age = eachResponse[2];
      if(age> 10 && age <= 20){
          //  condition to check whether the groupedData contains the specific age group property
          if (!groupedData["11 to 20"]) {
             // if it is not present, create an empty array as a value
              groupedData["11 to 20"] = [];
          }
          //  if it is already present, add the carbon footprint value to the values array
          groupedData["11 to 20"].push(eachResponse[9]);
      }
      else if(age > 20 && age <= 30){
          if (!groupedData["21 to 30"]) {
              groupedData["21 to 30"] = [];
          }  
          groupedData["21 to 30"].push(eachResponse[9]);
      }
      else if(age > 30 && age <= 40){
          if (!groupedData["31 to 40"]) {
             groupedData["31 to 40"] = [];
          }
          groupedData["31 to 40"].push(eachResponse[9]);
      }
      else if(age > 40 && age <= 50){
          if (!groupedData["41 to 50"]) {
             groupedData["41 to 50"] = [];
          }
          groupedData["41 to 50"].push(eachResponse[9]);
      }
      else if(age > 50 && age <= 60){
          if (!groupedData["51 to 60"]) {
             groupedData["51 to 60"] = [];
          }
          groupedData["51 to 60"].push(eachResponse[9]);
      }
      else if(age > 60 && age <= 70){
          if (!groupedData["61 to 70"]) {
             groupedData["61 to 70"] = [];
          }
          groupedData["61 to 70"].push(eachResponse[9]);
      }
      else if(age > 70){
          if (!groupedData["above 70"]) {
             groupedData["above 70"] = [];
          }
          groupedData["above 70"].push(eachResponse[9]);
      }
      else{
          if (!groupedData["others"]) {
            groupedData["others"] = [];
          }
          groupedData["others"].push(eachResponse[9]);
      }
    });
    let chartURL1 = "https://quickchart.io/chart?c={type:'bar',data:{labels:['Home','Travel','Food','Electronics', 'Shopping'], datasets:[{label:'Carbon footprint',data:["+ findAverage(home)+ "," + findAverage(travel)+ "," +findAverage(food)+ "," +findAverage(electronics)+ "," +findAverage(shopping)+"], backgroundColor: 'rgba(54, 162, 235, 0.6)'}]}, options: {title: {display: true, text: 'Category based analysis'}}}";
    const image1 = document.createElement("img");
    image1.src = chartURL1;
    image1.alt = "Result chart";
    image1.classList.add("img-fluid");
    let chartContainer1 = document.getElementById("chartContainer1");
    chartContainer1.appendChild(image1);
    for (data in groupedData) {
        // get the corresponding array value from the object
        const array = groupedData[data];
       // finding the average of the array using findAverage() function.
        let averageValue = findAverage(array);
        // store the property of groupedData in labels array
        labels.push(data);
        // store the average value in the avg array
        avg.push(averageValue);
   }
   let chart = "{type: 'doughnut', data: {datasets: [{data: [" + avg.toString() + "], backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', ], label: 'Dataset 1',}, ], labels: ['" + labels.join("','") + "'], }, options: { title: { display: true, text: 'Age group based analysis', }, }, } ";

   let chartURL2 = "https://quickchart.io/chart?c=" + chart;
   const image2 = document.createElement("img");
   image2.src = chartURL2;
   image2.alt = "Result chart";
   image2.classList.add("img-fluid");
   let chartContainer2 = document.getElementById("chartContainer2");
   chartContainer2.appendChild(image2);
}

function findAverage(array) {
    let sum = 0;
    // iterate over the array value and find the sum of the elements in the array
    for (const element of array) {
      sum = sum + element;
    }
    // find the average
    let average = sum / array.length;
    // return the average value
    return average;
  }