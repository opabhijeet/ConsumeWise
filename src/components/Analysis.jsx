import React from 'react'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function Analysis() {
  const ingredients = [
    { name: 'Sugar', amount: '10g', compliant: false, harmful: true, rda: 20 },
    { name: 'Vitamin C', amount: '50mg', compliant: true, harmful: false, rda: 2 },
    { name: 'Salt', amount: '1g', compliant: true, harmful: false, rda: 3 },
    { name: 'Trans Fat', amount: '0.5g', compliant: false, harmful: true, rda: 70 },
  ];

  const positiveAspects = ingredients.filter(ingredient => ingredient.compliant && !ingredient.harmful);
  const negativeAspects = ingredients.filter(ingredient => !ingredient.compliant || ingredient.harmful);

  // Calculate score based on positive and negative aspects
  const totalAspects = positiveAspects.length + negativeAspects.length;
  const score = totalAspects > 0 ? (positiveAspects.length / totalAspects) * 100 : 0;

  // Determine color based on score
  const getColor = (score) => {
    if (score < 10) return '#FF0000'; // Red
    if (score < 20) return '#FF4500'; // OrangeRed
    if (score < 30) return '#FFA500'; // Orange
    if (score < 40) return '#FFD700'; // Gold
    if (score < 50) return '#FFFF00'; // Yellow
    if (score < 60) return '#ADFF2F'; // GreenYellow
    if (score < 70) return '#7FFF00'; // Chartreuse
    if (score < 80) return '#32CD32'; // LimeGreen
    if (score < 90) return '#00FF00'; // Lime
    return '#36A2EB'; // Blue
  };

  const data = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [getColor(score), '#E0E0E0'],
        hoverBackgroundColor: [getColor(score), '#E0E0E0'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '70%', // Create a donut chart
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-3 bg-gray-100 h-full md:min-h-screen">
      <div className="chart-container flex justify-center relative mt-4 mb-8 w-[35vw] h-[35vw] md:w-[22vw] md:h-[22vw]">
        <Pie data={data} options={options} />
        <div className="absolute flex items-center justify-center inset-0">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-600">{score.toFixed(0)}/100</span>
        </div>
      </div>
      <div className="w-full max-w-2xl mb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Positive Aspects</h2>
          <ul className="list-disc list-inside space-y-2 bg-green-100 p-6 rounded-lg shadow-lg">
            {positiveAspects.map((ingredient, index) => (
              <li key={index} className="flex items-center p-3 rounded-md bg-white hover:bg-green-200 transition-colors shadow-sm">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="font-medium text-gray-800">{ingredient.name}</span> 
                <span className="text-sm text-gray-600 ml-2">({ingredient.amount})</span>
                <span className="text-sm text-gray-500 ml-auto">{ingredient.rda}% RDA</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Negative Aspects</h2>
          <ul className="list-disc list-inside space-y-2 bg-red-100 p-6 rounded-lg shadow-lg">
            {negativeAspects.map((ingredient, index) => (
              <li key={index} className="flex items-center p-3 rounded-md bg-white hover:bg-red-200 transition-colors shadow-sm">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="font-medium text-gray-800">{ingredient.name}</span> 
                <span className="text-sm text-gray-600 ml-2">({ingredient.amount})</span>
                <span className="text-sm text-gray-500 ml-auto">{ingredient.rda}% RDA</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Analysis;