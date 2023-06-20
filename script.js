document.getElementById('financialForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const currentSavings = parseFloat(document.getElementById('currentSavings').value);
  const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
  const retirementSavings = parseFloat(document.getElementById('retirementSavings').value);
  const retirementAge = parseFloat(document.getElementById('retirementAge').value);
  const investmentYears = parseFloat(document.getElementById('investmentYears').value);
  const has401kPlan = document.getElementById('401kPlan').checked;
  const currentInvestments = parseFloat(document.getElementById('currentInvestments').value);
  const investmentGrowthRate = parseFloat(document.getElementById('investmentGrowthRate').value);
  const currentAssets = parseFloat(document.getElementById('currentAssets').value);
  const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
  const numberOfChildren = parseFloat(document.getElementById('numberOfChildren').value);

  const averageChildCostPerYear = calculateAverageChildCostPerYear(numberOfChildren);
  const totalChildCost = averageChildCostPerYear * 18; // Assuming child costs until age 18
  const collegeCost = has401kPlan ? 0 : calculateCollegeCost(numberOfChildren); // Assuming college cost only if no 401(k) plan

  const totalExpenses = monthlyExpenses * 12 * investmentYears + totalChildCost + collegeCost;
  const totalAdditionalIncome = calculateTotalAdditionalIncome(numberOfChildren);

  const netInvestmentAmount = currentSavings + currentInvestments + currentAssets - totalExpenses - totalAdditionalIncome;
  const monthlyInvestment = netInvestmentAmount / (investmentYears * 12);
  const retirementMonthlyIncome = retirementSavings / ((retirementAge - investmentYears) * 12);

  const labels = [];
  const data = [];
  for (let i = investmentYears; i <= retirementAge; i++) {
    labels.push(i);
    data.push(retirementMonthlyIncome);
  }

  const performanceChart = document.getElementById('performanceChart');
  new Chart(performanceChart, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Monthly Income',
        data: data,
        fill: false,
        borderColor: 'rgba(0, 123, 255, 1)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Years'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Monthly Income ($)'
          }
        }
      }
    }
  });

  // Scroll to the performance section
  document.getElementById('performance').scrollIntoView({ behavior: 'smooth' });
});

function calculateAverageChildCostPerYear(numberOfChildren) {
  let totalChildCost = 0;
  for (let i = 1; i <= numberOfChildren; i++) {
    const childAge = parseFloat(prompt(`Enter age for Child ${i}:`));
    totalChildCost += calculateChildCost(childAge);
  }
  return totalChildCost / numberOfChildren;
}

function calculateChildCost(age) {
  if (age <= 2) {
    return 10000; // Average cost for infants
  } else if (age <= 5) {
    return 8000; // Average cost for toddlers
  } else if (age <= 12) {
    return 6000; // Average cost for children (6-12 years)
  } else {
    return 4000; // Average cost for teenagers (13+ years)
  }
}

function calculateCollegeCost(numberOfChildren) {
  const collegeCostPerYear = 20000; // Assuming $20,000 per year for college expenses
  return numberOfChildren * collegeCostPerYear;
}

function calculateTotalAdditionalIncome(numberOfChildren) {
  const childAllowance = 1000; // Assuming $1,000 per child as additional income
  return numberOfChildren * childAllowance;
}
