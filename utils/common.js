exports.getFinancialYearRange = (date) => {
    const today = new Date(date);
    const currentMonth = today.getMonth() + 1; // Months are zero-indexed
  
    let currentYear = today.getFullYear().toString().slice(-2);
  
    if (currentMonth > 3) {
      let nextYear = (today.getFullYear() + 1).toString().slice(-2);
      return currentYear + nextYear;
    } else {
      let previousYear = (today.getFullYear() - 1).toString().slice(-2);
      return previousYear + currentYear;
    }
  }
  