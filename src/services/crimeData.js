// Mock crime data for the application

export const generateRandomCrimes = (count = 20, centerLat = 34.0522, centerLng = -118.2437) => {
  const crimes = [];
  const crimeTypes = ['Robbery', 'Theft', 'Assault', 'Burglary'];
  const descriptions = [
    'Armed suspect took valuables from victim',
    'Vehicle break-in reported',
    'Physical altercation between individuals',
    'Home invasion reported with stolen items',
    'Shoplifting incident at local store',
    'Carjacking attempt reported',
    'Credit card fraud reported',
    'Vandalism of public property'
  ];

  for (let i = 0; i < count; i++) {
    // Create random coordinates around the center point
    const lat = centerLat + (Math.random() - 0.5) * 0.1;
    const lng = centerLng + (Math.random() - 0.5) * 0.1;
    
    // Random date within the last 30 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    
    const crime = {
      id: i + 1,
      type: crimeTypes[Math.floor(Math.random() * crimeTypes.length)],
      lat,
      lng,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      date: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      severity: Math.floor(Math.random() * 5) + 1, // 1-5 severity rating
    };
    
    crimes.push(crime);
  }
  
  return crimes;
};

export const getCrimeStats = () => {
  return {
    totalCrimes: 1423,
    monthlyCrimes: [120, 132, 101, 134, 90, 120, 110, 98, 127, 143, 119, 129],
    crimeByType: {
      robbery: 342,
      theft: 523,
      assault: 298,
      burglary: 260
    },
    crimeByTime: {
      morning: 187,
      afternoon: 312,
      evening: 498,
      night: 426
    },
    crimeHotspots: [
      { name: 'Downtown', count: 423 },
      { name: 'Westside', count: 276 },
      { name: 'Harbor Area', count: 201 },
      { name: 'North District', count: 312 },
      { name: 'Eastside', count: 211 }
    ]
  };
};

export const getAIPredictions = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    predictedHotspots: [
      { name: 'Downtown', likelihood: 0.82, riskLevel: 'High', lat: 34.0522, lng: -118.2437 },
      { name: 'Westside', likelihood: 0.67, riskLevel: 'Medium', lat: 34.0422, lng: -118.2937 },
      { name: 'Harbor Area', likelihood: 0.59, riskLevel: 'Medium', lat: 34.0322, lng: -118.2837 }
    ],
    predictedCrimeIncrease: 0.12, // 12% predicted increase
    crimeTypeDistribution: {
      robbery: 0.24,
      theft: 0.37,
      assault: 0.19,
      burglary: 0.20
    },
    recommendedPatrols: [
      { area: 'Downtown', timeframe: '10:00 PM - 2:00 AM', priority: 'High' },
      { area: 'Westside', timeframe: '11:00 PM - 3:00 AM', priority: 'Medium' },
      { area: 'Harbor Area', timeframe: '9:00 PM - 1:00 AM', priority: 'Medium' }
    ]
  };
};