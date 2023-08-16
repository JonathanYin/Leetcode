function preprocessDate(dates) {
    // Mapping of months to their numerical value
    const monthMap = {
      'Jan': '01',
      'Feb': '02',
      'Mar': '03',
      'Apr': '04',
      'May': '05',
      'Jun': '06',
      'Jul': '07',
      'Aug': '08',
      'Sep': '09',
      'Oct': '10',
      'Nov': '11',
      'Dec': '12'
    };
  
    return dates.map(date => {
      // Split the date string into Day, Month, Year
      let [day, month, year] = date.split(' ');
  
      // Remove the suffix from the day (e.g., 'st', 'nd', 'rd', 'th')
      day = day.slice(0, -2);
      
      // Add a leading zero if the day is a single digit
      day = day.length === 1 ? '0' + day : day;
  
      // Get the numerical value of the month
      month = monthMap[month];
  
      return `${year}-${month}-${day}`;
    });
  }
  
  // Sample test
  const dates = ['1st Mar 1974', '22nd Jan 2013', '7th Apr 1904'];
  console.log(preprocessDate(dates)); // Output: [ '1974-03-01', '2013-01-22', '1904-04-07' ]
  