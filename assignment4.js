let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function addCustomer(name) {
    queue.push(name);
    console.log("{name} added to queue. Queue number: ${queue.length}");
    displayQueue();
}


function serviceCustomer() {
  const serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"));

  if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > queue.length) {
    alert("Invalid customer number.");
    return;
  }

  const servedCustomer = queue.splice(serviceNumber - 1, 1)[0];
  console.log(`{servedCustomer} has been serviced.`);
  displayQueue();
}


function displayQueue() {
  console.log("Current Queue:");
  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    queue.forEach((customer, index) => {
      console.log(`{index + 1}. ${customer}`);
    });
  }
}
      
