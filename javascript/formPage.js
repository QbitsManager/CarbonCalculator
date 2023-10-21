const checkBoxes = document.querySelectorAll(".form-check-input");

checkBoxes.forEach((eachCheckBox) => {
    eachCheckBox.addEventListener("change", showComponents);
  });

  function showComponents(event) {
    let target = event.target;
    let targetId = target.id;
    if (target.checked) {
        // show the question label
        document.getElementById("questionLabel").classList.add("d-block");
        document.getElementById("questionLabel").classList.remove("d-none");
        // condition to identify the checkbox that triggers the event
        if (targetId === "smartphone") {
          // if smartphone checkbox is checked, display the phoneUsageBlock
          let phoneUsageBlock = document.getElementById("phoneUsageBlock");
          phoneUsageBlock.classList.add("d-flex");
          phoneUsageBlock.classList.remove("d-none");
        }
        else if (targetId === "laptop") {
          // if laptop checkbox is checked, display the laptopUsageBlock
          let laptopUsageBlock = document.getElementById("laptopUsageBlock");
          laptopUsageBlock.classList.add("d-flex");
          laptopUsageBlock.classList.remove("d-none");
        }
        else if (targetId === "gamingConsole") {
         // if gamingConsole checkbox is checked, display the consoleUsageBlock
          let consoleUsageBlock = document.getElementById("consoleUsageBlock");
          consoleUsageBlock.classList.add("d-flex");
          consoleUsageBlock.classList.remove("d-none");
        }
        else if (targetId === "television") {
          // if television checkbox is checked, display the tvUsageBlock
          let tvUsageBlock = document.getElementById("tvUsageBlock");
          tvUsageBlock.classList.add("d-flex");
          tvUsageBlock.classList.remove("d-none");
        }
      }
      else {
        // check  whether all the checkboxes are unchecked
       let isChecked = false;
       checkBoxes.forEach((eachCheckBox) => {
         if (eachCheckBox.checked) {
           isChecked = true;
         }
       });
        // if all the checkboxes are unchecked, hide the second question label
       if (!isChecked) {
         document.getElementById("questionLabel").classList.add("d-none");
         document.getElementById("questionLabel").classList.remove("d-block");
       }
       // condition to identify the checkbox that triggers the event
       if (targetId === "smartphone") {
         // if smartphone checkbox is unchecked, hide the phoneUsageBlock
         let phoneUsageBlock = document.getElementById("phoneUsageBlock");
         phoneUsageBlock.classList.add("d-none");
         phoneUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "laptop") {
         // if laptop checkbox is unchecked, hide the laptopUsageBlock
         let laptopUsageBlock = document.getElementById("laptopUsageBlock");
         laptopUsageBlock.classList.add("d-none");
         laptopUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "gamingConsole") {
        // if gamingConsole checkbox is unchecked, hide the consoleUsageBlock
         let consoleUsageBlock = document.getElementById("consoleUsageBlock");
         consoleUsageBlock.classList.add("d-none");
         consoleUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "television") {
         // if television checkbox is unchecked, hide the tvUsageBlock
         let tvUsageBlock = document.getElementById("tvUsageBlock");
         tvUsageBlock.classList.add("d-none");
         tvUsageBlock.classList.remove("d-flex");
       }
     }
  }

  const nextButton = document.getElementById("nextButton");
  const submitButton = document.getElementById("submitButton");
  nextButton.addEventListener("click", showNextTab);
  function showNextTab() {
    // get the current tab
    const currentTab = document.querySelector('.tab-pane.show.active');
    // get the form within the current tab
    const currentForm = currentTab.querySelector('form');
    if (currentForm.checkValidity()) {
        const activeTabLink = document.querySelector('.nav-link.active');
        // get the next tab list item  
        const nextTabListItem = activeTabLink.parentElement.nextElementSibling;
        // condition to check whether the next tab list exists or not
        if (nextTabListItem) {
            // get all the tab links
            let allTabs = document.querySelectorAll('.nav-link');
            // disable all the tab links
            allTabs.forEach((tab) => {
              tab.setAttribute('disabled', 'true');
           });
           // get the next tab link element
           const nextTab = nextTabListItem.querySelector('.nav-link');
           // enable the next tab link
           nextTab.removeAttribute('disabled');
           // display the corresponding tab contents
           nextTab.click();
       }
       if (activeTabLink.textContent === "Electronic usage") {
           nextButton.classList.add("d-none");
           nextButton.classList.remove("d-inline");
           submitButton.classList.add("d-inline");
           submitButton.classList.remove("d-none");
       }
   } else {
    currentForm.classList.add('was-validated');
   }
}

  const prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", showPreviousTab);
  function showPreviousTab() {
    const activeTabLink = document.querySelector('.nav-link.active');
    // get the previous tab list element
    const prevTabListItem = activeTabLink.parentElement.previousElementSibling;
     // condition to check whether the previous tab list exists or not
     if (prevTabListItem) {
        // get all the tab links
        let allTabs = document.querySelectorAll('.nav-link');
        // disable all the tab links
        allTabs.forEach((tab) => {
           tab.setAttribute('disabled', 'true');
        });
        // get the previous tab link
        const prevTab = prevTabListItem.querySelector('.nav-link');
        // enable the previous tab link
        prevTab.removeAttribute('disabled');
        // display the corresponding tab contents
        prevTab.click(); 
        const progressValue = parseInt(progress.ariaValueNow) - 16;
      progress.style.width = progressValue + "%";
      progress.setAttribute('aria-valuenow', progressValue);
      progress.textContent = progressValue + "%";
    }
    if (activeTabLink.textContent === "Shopping and consumption") {
        nextButton.classList.add("d-inline");
        nextButton.classList.remove("d-none");
        submitButton.classList.add("d-none");
        submitButton.classList.remove("d-inline");
     }
  }

  submitButton.addEventListener("click", calculateResult);
  function calculateResult() {
    const currentTab = document.querySelector('.tab-pane.show.active');
    // get the form within the current tab
    const currentForm = currentTab.querySelector('form');
    if (currentForm.checkValidity()) {
        // get all the tab links and disable them
        let allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach((tab) => {
          tab.setAttribute('disabled', 'true');
        });
        // enable the result tab link
        document.getElementById("resultTab").removeAttribute('disabled');
        // show the tab contents
        document.getElementById("resultTab").click();
        // hide the card header and footer
        document.querySelector(".card-header").classList.add("d-none");
        document.querySelector(".card-footer").classList.add("d-none");
        let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;
    let energyType = document.getElementById("energyTypeDropDown").value;
    let applianceUsage = document.getElementById("range1").value;
    let travelType = document.getElementById("travelTypeDropDown").value;
    let kmCount = document.getElementById("kmCount").value;
    let diet = document.getElementById("dietDropDown").value;
    let eatCount = "0"  + document.getElementById("range2").value;
    let phoneUsage = document.getElementById("phoneUsage").value;
    let laptopUsage = document.getElementById("laptopUsage").value;
    let consoleUsage = document.getElementById("consoleUsage").value;
    let tvUsage = document.getElementById("tvUsage").value;
    let onlineHours = document.getElementById("onlineHoursDropdown").value;
  let clothesFrequency = document.getElementById("clothesFrequency").value;
  // to get the checked radio button value, use the name attribute which is common for the related radio buttons. 
   let recycleCount = document.querySelector('input[name="inlineRadioOptions"]:checked').value;

   const ef = new Map([
    ["Renewable energy", 0], ["Natural gas", 2], ["Electricity from coal", 4],
       ["0", 0], ["1", 0.6], ["2", 1], ["3", 1.4], ["4", 1.8],
       ["I walk or use a bicycle", 0], ["I use public transportation or the school bus", 1.44], ["I carpool", 0.64], ["I drive alone", 1.28],
       ["Vegan", 2.9], ["Vegetarian", 3.8], ["Meat occasionally", 5.6], ["Regular meat eater", 7.2],
       ["00", 0], ["01", 1], ["02", 1.5], ["03", 2], ["04", 2.5],
       ["smartphone", 0.1], ["laptop", 0.3], ["gamingConsole", 0.5], ["television", 0.4],
       ["Less than 2 hours", 1], ["2-4 hours", 2], ["4-6 hours", 3], ["More than 6 hours", 5],
       ["Rarely", 20], ["Every few months", 50], ["Monthly", 80], ["More than once a month", 100],
       ["Always", -5], ["Sometimes", 0], ["Never", 5]
     ]);

     let home = ef.get(energyType) + ef.get(applianceUsage);
         let travel = (ef.get(travelType) * kmCount);
         let food = ef.get(diet) + (ef.get(eatCount) / 7);
         let electronics = (ef.get("smartphone") * phoneUsage) + (ef.get("laptop") * laptopUsage) + (ef.get("gamingConsole") * consoleUsage) + (ef.get("television") * tvUsage) + ef.get(onlineHours);
         let shopping = ef.get(clothesFrequency) / 365;
         let recycle = ef.get(recycleCount) / 7;
         let result = home + travel + food + electronics + shopping + recycle;
         const categories = { "home": home, "travel": travel, "food": food,     "electronics": electronics, "shopping": shopping};
         // variable to store the max value, max category, and suggestions
         let maxValue = 0, maxCategory, suggestion;
         // iterate the categories object
         for (const category in categories) {
              // value of each category
              const value = categories[category];
              // if the value is greater than maxValue, set the value as maxValue and category as maxCateogry
              if (value > maxValue) {
                 maxValue = value;
                 maxCategory = category;
              }
         }
         if (maxCategory === "home") {
          suggestion = "Your carbon footprint is higher in the home category. To reduce your carbon footprint, use renewable energy sources. Plant more trees and recycle";
        }
        else if (maxCategory === "travel") {
          suggestion = "Your carbon footprint is higher in the travel category. To reduce your carbon footprint, use electric vehicles and use public transport. Plant more trees and recycle";
        }
        else if (maxCategory === "food") {
          suggestion = "Your carbon footprint is higher in the food category. To reduce your carbon footprint, consider reducing meat consumption if you are a non vegetarian. Plant more trees and recycle";
        }
        else if (maxCategory === "electronics") {
          suggestion = "Your carbon footprint is higher in the electronics category. To reduce your carbon footprint, reduce your screen time and electronics usage. Plant more trees and recycle";
        }
        else {
          suggestion = "Your carbon footprint is higher in the shopping category. To reduce your carbon footprint, minimize your shopping and shop eco friendly products. Plant more trees and recycle";
        }
        dbAPI.insert("INSERT INTO response VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [Date.now(), name, age, country, home, travel, food, electronics, shopping, result, maxCategory, suggestion]);
        let resultContainer = document.getElementById("resultContainer");
        let chartContainer = document.getElementById("chartContainer");
        let suggestionContainer = document.getElementById("suggestionContainer");
        resultContainer.textContent = "Carbon footprint: "+result+" Kg/day";
        let chart = "{ type: 'pie', data: { datasets: [ { data: [" + home + ", " + travel + ", " +  food + ", " + electronics + ", " + shopping +"], backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 235, 59)', 'rgb(75, 192, 192)', 'rgb(50, 205, 50)', ], label: 'Dataset 1', }, ], labels: ['Home', 'Travel', 'Food', 'Electronic usage', 'Shopping'], }, }";
     let chartUrl = "https://quickchart.io/chart?c=" + chart;

        const image = document.createElement("img");
      image.src = chartUrl;
      image.alt = "Result chart";
      image.classList.add("img-fluid");
      chartContainer.appendChild(image);
      suggestionContainer.textContent = suggestion;
      } else {
        currentForm.classList.add('was-validated');
    }
}


const progress = document.getElementById("progress");
let dbAPI;
createDbObject();
async function createDbObject() {
   dbAPI = await new DB();
};

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", showHome);
function showHome() {
  window.location.href = "index.html";
}

const recalculateButton = document.getElementById("recalculateButton");
recalculateButton.addEventListener("click", showForm);
function showForm() {
  window.location.href = "form.html";
}