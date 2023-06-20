const currentSavings = parseFloat(document.getElementById('currentSavings').value);
const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
const retirementSavings = parseFloat(document.getElementById('retirementSavings').value);
const retirementAge = parseFloat(document.getElementById('retirementAge').value);
const investmentYears = parseFloat(document.getElementById('investmentYears').value);
const has401kPlan = document.getElementById('401kPlan').checked;
const currentInvestments = document.getElementById('currentInvestments').value;
const secondaryIncome = document.getElementById('secondaryIncome').value;
const numberOfChildren = parseFloat(document.getElementById('numberOfChildren').value);
const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);

const totalSavings = currentSavings + (monthlyIncome * 12 * investmentYears);
const totalExpenses = monthlyExpenses * 12 * investmentYears;
const totalAdditionalIncome = numberOfChildren * 1000 + (secondaryIncome ? parseFloat(secondaryIncome) : 0);

const netInvestmentAmount = totalSavings - totalExpenses - totalAdditionalIncome;
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
