function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const daysExcludingFridays = new Array(12).fill(0); // Stores working days for each month

    let currentDate = new Date(start); // Copy the start date
    while (currentDate <= end) {
        if (currentDate.getDay() !== 5) { // 5 is Friday
            const monthIndex = currentDate.getMonth(); // Get month index
            daysExcludingFridays[monthIndex]++;
        }
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    // Evenly distribute the target across all 12 months
    const monthlyTarget = totalAnnualTarget / 12;
    
    // Monthly targets for each month that has workdays
    const monthlyTargets = daysExcludingFridays.map((days, index) => 
        days > 0 ? monthlyTarget : 0 // Assign monthly target only to months with workdays
    );

    // Sum up the total target from monthly targets (which will equal totalAnnualTarget)
    const totalTarget = monthlyTargets.reduce((acc, target) => acc + target, 0);

    // Return output in the required format
    return JSON.stringify({
        "daysWorkedExcludingFridays": daysExcludingFridays.filter(days => days > 0), // Filter months with days
        "monthlyTargets": monthlyTargets.filter(target => target > 0), // Filter months with targets
        "totalTarget": totalTarget // Sum of the monthly targets
    }, null, 2); // Pretty-print JSON with 2-space indentation
}

// Example usage
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
