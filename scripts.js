// Bitcoin price data will be loaded here
let bitcoinPrices = {};

// Load Bitcoin price data from CSV
async function loadBitcoinData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/afa7789/satsukashii/refs/heads/main/assets/csv/bitcoin_2010-07-17_2025-03-25.csv');
        const text = await response.text();
        
        const lines = text.split('\n');
        console.log('CSV loaded, total lines:', lines.length);
        
        // Skip header line
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;
            
            const values = line.split(',');
            if (values.length >= 6) {
                const endDate = values[1]; // End date column
                const closePrice = parseFloat(values[5]); // Close price column
                if (!isNaN(closePrice) && endDate) {
                    bitcoinPrices[endDate] = closePrice;
                }
            }
        }
        
        console.log('Bitcoin prices loaded:', Object.keys(bitcoinPrices).length, 'records');
        console.log('Sample prices:', {
            '2017-01-01': bitcoinPrices['2017-01-01'],
            '2020-01-01': bitcoinPrices['2020-01-01'],
            '2024-01-01': bitcoinPrices['2024-01-01']
        });
    } catch (error) {
        console.error('Error loading Bitcoin data:', error);
        // Extensive fallback data with historical Bitcoin prices
        bitcoinPrices = {
            // 2011
            '2011-01-01': 0.30,
            '2011-02-01': 1.00,
            '2011-03-01': 0.87,
            '2011-04-01': 0.86,
            '2011-05-01': 3.50,
            '2011-06-01': 9.90,
            '2011-07-01': 15.50,
            '2011-08-01': 11.00,
            '2011-09-01': 5.20,
            '2011-10-01': 3.50,
            '2011-11-01': 3.20,
            '2011-12-01': 3.20,
            '2011-12-31': 4.72,
            
            // 2012
            '2012-01-01': 5.27,
            '2012-02-01': 4.86,
            '2012-03-01': 4.68,
            '2012-04-01': 5.10,
            '2012-05-01': 5.20,
            '2012-06-01': 6.50,
            '2012-07-01': 8.20,
            '2012-08-01': 10.50,
            '2012-09-01': 12.40,
            '2012-10-01': 11.65,
            '2012-11-01': 10.95,
            '2012-12-01': 13.40,
            '2012-12-31': 13.45,
            
            // 2013
            '2013-01-01': 13.59,
            '2013-02-01': 20.50,
            '2013-03-01': 47.00,
            '2013-04-01': 135.00,
            '2013-05-01': 116.00,
            '2013-06-01': 102.00,
            '2013-07-01': 68.00,
            '2013-08-01': 102.00,
            '2013-09-01': 128.00,
            '2013-10-01': 123.00,
            '2013-11-01': 200.00,
            '2013-12-01': 1130.00,
            '2013-12-31': 754.01,
            
            // 2014
            '2014-01-01': 771.40,
            '2014-02-01': 570.00,
            '2014-03-01': 636.00,
            '2014-04-01': 450.00,
            '2014-05-01': 440.00,
            '2014-06-01': 650.00,
            '2014-07-01': 630.00,
            '2014-08-01': 515.00,
            '2014-09-01': 395.00,
            '2014-10-01': 340.00,
            '2014-11-01': 375.00,
            '2014-12-01': 320.00,
            '2014-12-31': 314.14,
            
            // 2015
            '2015-01-01': 314.14,
            '2015-02-01': 230.00,
            '2015-03-01': 245.00,
            '2015-04-01': 250.00,
            '2015-05-01': 235.00,
            '2015-06-01': 220.00,
            '2015-07-01': 280.00,
            '2015-08-01': 290.00,
            '2015-09-01': 230.00,
            '2015-10-01': 270.00,
            '2015-11-01': 320.00,
            '2015-12-01': 365.00,
            '2015-12-31': 430.00,
            
            // 2016
            '2016-01-01': 430.00,
            '2016-02-01': 375.00,
            '2016-03-01': 415.00,
            '2016-04-01': 430.00,
            '2016-05-01': 450.00,
            '2016-06-01': 575.00,
            '2016-07-01': 650.00,
            '2016-08-01': 580.00,
            '2016-09-01': 610.00,
            '2016-10-01': 640.00,
            '2016-11-01': 735.00,
            '2016-12-01': 760.00,
            '2016-12-31': 963.60,
            
            // 2017
            '2017-01-01': 997.78,
            '2017-01-02': 997.78,
            '2017-02-01': 989.11,
            '2017-03-01': 1221.42,
            '2017-04-01': 1080.28,
            '2017-05-01': 1400.00,
            '2017-06-01': 2536.53,
            '2017-06-15': 2500.00,
            '2017-07-01': 2536.53,
            '2017-08-01': 2800.00,
            '2017-09-01': 4600.00,
            '2017-10-01': 4400.00,
            '2017-11-01': 6600.00,
            '2017-12-01': 10967.00,
            '2017-12-15': 17900.00,
            '2017-12-31': 14034.00,
            
            // 2018
            '2018-01-01': 13577.19,
            '2018-01-15': 13769.22,
            '2018-02-01': 10236.68,
            '2018-03-01': 10929.77,
            '2018-04-01': 6830.63,
            '2018-05-01': 9000.00,
            '2018-06-01': 7700.00,
            '2018-07-01': 6600.00,
            '2018-08-01': 7000.00,
            '2018-09-01': 7200.00,
            '2018-10-01': 6600.00,
            '2018-11-01': 6300.00,
            '2018-12-01': 4200.00,
            '2018-12-31': 3746.12,
            
            // 2019
            '2019-01-01': 3851.18,
            '2019-02-01': 3420.00,
            '2019-03-01': 3845.26,
            '2019-04-01': 5200.00,
            '2019-05-01': 5500.00,
            '2019-06-01': 8700.00,
            '2019-07-01': 10800.00,
            '2019-08-01': 10200.00,
            '2019-09-01': 10300.00,
            '2019-10-01': 8200.00,
            '2019-11-01': 9200.00,
            '2019-12-01': 7200.00,
            '2019-12-31': 7202.62,
            
            // 2020
            '2020-01-01': 7213.92,
            '2020-02-01': 9386.11,
            '2020-03-01': 5000.00,
            '2020-04-01': 6800.00,
            '2020-05-01': 8800.00,
            '2020-06-01': 9500.00,
            '2020-07-01': 9200.00,
            '2020-08-01': 11700.00,
            '2020-09-01': 10800.00,
            '2020-10-01': 13800.00,
            '2020-11-01': 13700.00,
            '2020-12-01': 19000.00,
            '2020-12-31': 28977.96,
            
            // 2021
            '2021-01-01': 29300.19,
            '2021-02-01': 33136.14,
            '2021-03-01': 49557.94,
            '2021-04-01': 58000.00,
            '2021-04-15': 63183.14,
            '2021-05-01': 57000.00,
            '2021-06-01': 35000.00,
            '2021-07-01': 33000.00,
            '2021-08-01': 45000.00,
            '2021-09-01': 47000.00,
            '2021-10-01': 55000.00,
            '2021-11-01': 67000.00,
            '2021-11-10': 69000.00,
            '2021-12-01': 47000.00,
            '2021-12-31': 46307.00,
            
            // 2022
            '2022-01-01': 47544.50,
            '2022-02-01': 43069.45,
            '2022-03-01': 44359.87,
            '2022-04-01': 46231.00,
            '2022-05-01': 38000.00,
            '2022-06-01': 20000.00,
            '2022-07-01': 20000.00,
            '2022-08-01': 23000.00,
            '2022-09-01': 20000.00,
            '2022-10-01': 20000.00,
            '2022-11-01': 17000.00,
            '2022-12-01': 16500.00,
            '2022-12-31': 16538.35,
            
            // 2023
            '2023-01-01': 16607.07,
            '2023-02-01': 23153.20,
            '2023-03-01': 23139.08,
            '2023-04-01': 28467.20,
            '2023-05-01': 29310.54,
            '2023-06-01': 27225.78,
            '2023-07-01': 30492.03,
            '2023-08-01': 29225.90,
            '2023-09-01': 25936.45,
            '2023-10-01': 27978.10,
            '2023-11-01': 35428.56,
            '2023-12-01': 42000.00,
            '2023-12-31': 42258.94,
            
            // 2024
            '2024-01-01': 42258.94,
            '2024-01-15': 42611.43,
            '2024-02-01': 43181.14,
            '2024-03-01': 62481.07,
            '2024-03-14': 73087.90,
            '2024-04-01': 71216.98,
            '2024-05-01': 63880.04,
            '2024-06-01': 68810.03,
            '2024-07-01': 62849.53,
            '2024-08-01': 65409.83,
            '2024-09-01': 59127.62,
            '2024-10-01': 62888.04,
            '2024-11-01': 69531.96,
            '2024-12-01': 96236.01,
            '2024-12-31': 93647.01,
            
            // 2025 (projected/current)
            '2025-01-01': 93647.01,
            '2025-01-02': 94610.14,
            '2025-01-15': 96624.15,
            '2025-02-01': 102391.00,
            '2025-03-01': 86006.06,
            '2025-03-25': 87365.98
        };
    }
}

function getClosestPrice(date) {
    if (bitcoinPrices[date]) {
        return bitcoinPrices[date];
    }
    
    const targetDate = new Date(date);
    let closestDate = null;
    let closestDiff = Infinity;
    
    for (const priceDate in bitcoinPrices) {
        const currentDate = new Date(priceDate);
        const diff = Math.abs(targetDate - currentDate);
        if (diff < closestDiff) {
            closestDiff = diff;
            closestDate = priceDate;
        }
    }
    
    return closestDate ? bitcoinPrices[closestDate] : 50000;
}

function calculateDCA() {
    const amount = parseFloat(document.getElementById('amount').value);
    const frequency = document.getElementById('frequency').value;
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    
    if (!amount || amount <= 0) {
        alert('Por favor, insira um valor válido para investir.');
        return;
    }
    
    if (startDate >= endDate) {
        alert('A data de início deve ser anterior à data de fim.');
        return;
    }
    
    const transactions = [];
    let totalInvested = 0;
    let totalBitcoin = 0;
    
    let currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const price = getClosestPrice(dateStr);
        const btcBought = amount / price;
        
        totalInvested += amount;
        totalBitcoin += btcBought;
        
        transactions.push({
            date: dateStr,
            amount: amount,
            price: price,
            btcBought: btcBought,
            totalBtc: totalBitcoin
        });
        
        // Move to next purchase date
        switch (frequency) {
            case 'daily':
                currentDate.setDate(currentDate.getDate() + 1);
                break;
            case 'weekly':
                currentDate.setDate(currentDate.getDate() + 7);
                break;
            case 'monthly':
                currentDate.setMonth(currentDate.getMonth() + 1);
                break;
        }
    }
    
    // Get current price (price at end date)
    const currentPrice = getClosestPrice(endDate.toISOString().split('T')[0]);
    const currentValue = totalBitcoin * currentPrice;
    const profitLoss = currentValue - totalInvested;
    const profitLossPercentage = ((currentValue - totalInvested) / totalInvested) * 100;
    const averagePrice = totalInvested / totalBitcoin;
    
    console.log('DCA Calculation Results:');
    console.log('Total invested:', totalInvested.toFixed(2));
    console.log('Total BTC:', totalBitcoin.toFixed(8));
    console.log('Average price per BTC:', averagePrice.toFixed(2));
    console.log('Current BTC price:', currentPrice.toFixed(2));
    console.log('Current portfolio value:', currentValue.toFixed(2));
    console.log('Profit/Loss:', profitLoss.toFixed(2));
    console.log('Profit/Loss %:', profitLossPercentage.toFixed(2) + '%');
    console.log('Number of purchases:', transactions.length);
    
    // Display results
    document.getElementById('total-invested').textContent = '$' + totalInvested.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('bitcoin-acquired').textContent = totalBitcoin.toFixed(8) + ' BTC';
    document.getElementById('current-value').textContent = '$' + currentValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // Color profit/loss based on positive/negative
    const profitLossElement = document.getElementById('profit-loss');
    const profitLossText = '$' + profitLoss.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + 
                          ' (' + (profitLoss >= 0 ? '+' : '') + profitLossPercentage.toFixed(1) + '%)';
    const profitLossColor = profitLoss >= 0 ? '#22c55e' : '#ef4444';
    
    profitLossElement.textContent = profitLossText;
    profitLossElement.style.color = profitLossColor;
    
    document.getElementById('average-price').textContent = '$' + averagePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('purchase-count').textContent = transactions.length.toLocaleString();
    
    document.getElementById('results').style.display = 'block';
    
    // Draw chart
    drawChart(transactions);
    
    // Display transactions table
    const tbody = document.getElementById('transactions-tbody');
    tbody.innerHTML = '';
    
    // Show 50 transactions evenly spaced throughout the time period
    let transactionsToShow = [];
    if (transactions.length <= 50) {
        transactionsToShow = transactions;
    } else {
        // Calculate indices for evenly spaced transactions
        const step = (transactions.length - 1) / 49; // 49 intervals for 50 transactions
        for (let i = 0; i < 50; i++) {
            const index = Math.round(i * step);
            transactionsToShow.push(transactions[index]);
        }
    }
    
    transactionsToShow.forEach(tx => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = tx.date;
        row.insertCell(1).textContent = '$' + tx.amount.toFixed(2);
        row.insertCell(2).textContent = '$' + tx.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        row.insertCell(3).textContent = tx.btcBought.toFixed(8);
        row.insertCell(4).textContent = tx.totalBtc.toFixed(8);
    });
    
    // Add note if transactions were sampled
    if (transactions.length > 50) {
        const noteRow = tbody.insertRow(0);
        const noteCell = noteRow.insertCell(0);
        noteCell.colSpan = 5;
        noteCell.style.textAlign = 'center';
        noteCell.style.fontStyle = 'italic';
        noteCell.textContent = `Mostrando 50 transações espaçadas uniformemente de ${transactions.length} total`;
    }
    
    document.getElementById('transactions').style.display = 'block';
    
    // Save calculation to localStorage
    const inputData = {
        amount: amount,
        frequency: frequency,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0]
    };
    
    const results = {
        totalInvested: '$' + totalInvested.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}),
        bitcoinAcquired: totalBitcoin.toFixed(8) + ' BTC',
        currentValue: '$' + currentValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}),
        profitLoss: profitLossText,
        profitLossColor: profitLossColor,
        averagePrice: '$' + averagePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}),
        purchaseCount: transactions.length.toLocaleString(),
        transactionsTableHTML: tbody.innerHTML
    };
    
    saveCalculation(inputData, results, transactions);
}

function saveCalculation(inputData, results, transactions) {
    const calculationData = {
        timestamp: new Date().toISOString(),
        inputs: inputData,
        results: results,
        transactions: transactions
    };
    
    try {
        localStorage.setItem('lastDCACalculation', JSON.stringify(calculationData));
        console.log('Calculation saved to localStorage');
    } catch (error) {
        console.error('Error saving calculation:', error);
    }
}

// Load last calculation from localStorage
function loadLastCalculation() {
    try {
        const savedData = localStorage.getItem('lastDCACalculation');
        if (!savedData) return;
        
        const calculationData = JSON.parse(savedData);
        
        // Restore input values
        document.getElementById('amount').value = calculationData.inputs.amount;
        document.getElementById('frequency').value = calculationData.inputs.frequency;
        document.getElementById('start-date').value = calculationData.inputs.startDate;
        document.getElementById('end-date').value = calculationData.inputs.endDate;
        
        // Restore results
        document.getElementById('total-invested').textContent = calculationData.results.totalInvested;
        document.getElementById('bitcoin-acquired').textContent = calculationData.results.bitcoinAcquired;
        document.getElementById('current-value').textContent = calculationData.results.currentValue;
        
        const profitLossElement = document.getElementById('profit-loss');
        profitLossElement.textContent = calculationData.results.profitLoss;
        profitLossElement.style.color = calculationData.results.profitLossColor;
        
        document.getElementById('average-price').textContent = calculationData.results.averagePrice;
        document.getElementById('purchase-count').textContent = calculationData.results.purchaseCount;
        
        // Show results
        document.getElementById('results').style.display = 'block';
        
        // Restore transactions table
        const tbody = document.getElementById('transactions-tbody');
        tbody.innerHTML = calculationData.results.transactionsTableHTML;
        
        // Show transactions
        document.getElementById('transactions').style.display = 'block';
        
        // Redraw chart
        drawChart(calculationData.transactions);
        
        console.log('Last calculation loaded from localStorage');
        
    } catch (error) {
        console.error('Error loading last calculation:', error);
        // Clear corrupted data
        localStorage.removeItem('lastDCACalculation');
    }
}

function drawChart(transactions) {
    const svg = document.getElementById('dca-chart');
    
    // Clear previous chart data
    const existingPaths = svg.querySelectorAll('.chart-line, .chart-dot, .chart-label');
    existingPaths.forEach(el => el.remove());
    
    if (transactions.length === 0) return;
    
    // Get current theme colors - brutalist approach
    const isLightTheme = document.body.classList.contains('light-theme');
    const textColor = isLightTheme ? 'black' : 'white';
    const lineColor = isLightTheme ? 'black' : 'white';
    
    // Calculate data for chart
    const investedData = [];
    const valueData = [];
    
    transactions.forEach((tx, index) => {
        // Cumulative invested amount
        const totalInvested = tx.amount * (index + 1);
        investedData.push({
            x: index,
            y: totalInvested
        });
        
        // Current portfolio value at the end date using final BTC price
        const finalDate = transactions[transactions.length - 1].date;
        const finalPrice = getClosestPrice(finalDate);
        const portfolioValue = tx.totalBtc * finalPrice;
        
        valueData.push({
            x: index,
            y: portfolioValue
        });
    });
    
    // Find max value for scaling
    const maxInvested = Math.max(...investedData.map(d => d.y));
    const maxValue = Math.max(...valueData.map(d => d.y));
    const maxY = Math.max(maxInvested, maxValue);
    
    // Chart dimensions
    const chartWidth = 700;
    const chartHeight = 200;
    const chartX = 50;
    const chartY = 50;
    
    // Scale functions
    const scaleX = (index) => chartX + (index / (transactions.length - 1)) * chartWidth;
    const scaleY = (value) => chartY + chartHeight - (value / maxY) * chartHeight;
    
    // Create invested line points (straight line)
    let investedPoints = '';
    investedData.forEach((point, index) => {
        const x = scaleX(point.x);
        const y = scaleY(point.y);
        if (index > 0) investedPoints += ' ';
        investedPoints += `${x},${y}`;
    });
    
    // Create value line points (shows portfolio growth)
    let valuePoints = '';
    valueData.forEach((point, index) => {
        const x = scaleX(point.x);
        const y = scaleY(point.y);
        if (index > 0) valuePoints += ' ';
        valuePoints += `${x},${y}`;
    });
    
    // Add invested line (dashed) - shows cumulative investment
    const investedLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    investedLine.setAttribute('points', investedPoints);
    investedLine.setAttribute('stroke', lineColor);
    investedLine.setAttribute('stroke-width', '2');
    investedLine.setAttribute('stroke-dasharray', '5,5');
    investedLine.setAttribute('fill', 'none');
    investedLine.setAttribute('class', 'chart-line');
    svg.appendChild(investedLine);
    
    // Add value line (solid) - shows portfolio value over time
    const valueLine = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    valueLine.setAttribute('points', valuePoints);
    valueLine.setAttribute('stroke', lineColor);
    valueLine.setAttribute('stroke-width', '3');
    valueLine.setAttribute('fill', 'none');
    valueLine.setAttribute('class', 'chart-line');
    svg.appendChild(valueLine);
    
    // Add legend
    const legendInvested = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    legendInvested.setAttribute('x', '280');
    legendInvested.setAttribute('y', '30');
    legendInvested.setAttribute('font-family', 'monospace');
    legendInvested.setAttribute('font-size', '12');
    legendInvested.setAttribute('fill', textColor);
    legendInvested.setAttribute('class', 'chart-label');
    legendInvested.textContent = '--- Total Invested ($' + (maxInvested/1000).toFixed(0) + 'k)';
    svg.appendChild(legendInvested);
    
    const legendValue = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    legendValue.setAttribute('x', '280');
    legendValue.setAttribute('y', '50');
    legendValue.setAttribute('font-family', 'monospace');
    legendValue.setAttribute('font-size', '12');
    legendValue.setAttribute('fill', textColor);
    legendValue.setAttribute('class', 'chart-label');
    legendValue.textContent = '— Portfolio Value ($' + (maxValue/1000).toFixed(0) + 'k)';
    svg.appendChild(legendValue);
    
    // Update Y-axis labels with theme colors
    const topLabel = svg.querySelector('text[x="10"][y="60"]');
    if (topLabel) {
        topLabel.textContent = '$' + (maxY / 1000).toFixed(0) + 'k';
        topLabel.setAttribute('fill', textColor);
    }
    
    const midLabel = svg.querySelector('text[x="10"][y="150"]');
    if (midLabel) {
        midLabel.textContent = '$' + (maxY / 2000).toFixed(0) + 'k';
        midLabel.setAttribute('fill', textColor);
    }
    
    // Update other chart elements for theme
    const chartElements = svg.querySelectorAll('text, line');
    chartElements.forEach(element => {
        if (element.tagName === 'text' && !element.classList.contains('chart-label')) {
            element.setAttribute('fill', textColor);
        } else if (element.tagName === 'line') {
            element.setAttribute('stroke', lineColor);
        }
    });
    
    // Show chart
    svg.style.display = 'block';
}

// Clear calculation and reset form
function clearCalculation() {
    // Clear localStorage
    localStorage.removeItem('lastDCACalculation');
    
    // Reset form to default values
    document.getElementById('amount').value = '100';
    document.getElementById('frequency').value = 'monthly';
    document.getElementById('start-date').value = '2020-01-01';
    document.getElementById('end-date').value = '2024-12-31';
    
    // Hide results
    document.getElementById('results').style.display = 'none';
    document.getElementById('transactions').style.display = 'none';
    
    // Clear chart
    const svg = document.getElementById('dca-chart');
    svg.style.display = 'none';
    const existingPaths = svg.querySelectorAll('.chart-line, .chart-dot, .chart-label');
    existingPaths.forEach(el => el.remove());
    
    console.log('Calculation cleared');
}

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
    await loadBitcoinData();
    document.getElementById('calculate-btn').addEventListener('click', calculateDCA);
    document.getElementById('clear-btn').addEventListener('click', clearCalculation);
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Load last calculation if exists
    loadLastCalculation();
});

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
        
        // Redesenhar o gráfico com as cores corretas do tema
        const savedData = localStorage.getItem('lastDCACalculation');
        if (savedData) {
            const calculationData = JSON.parse(savedData);
            if (calculationData.transactions && calculationData.transactions.length > 0) {
                drawChart(calculationData.transactions);
            }
        }
    });
}
