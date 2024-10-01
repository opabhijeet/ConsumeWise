import React, { useState } from 'react';

function Preferences() {
  const [formData, setFormData] = useState({
    diabetic: false,
    vegan: false,
    vegetarian: false,
    onDiet: false,
    glutenFree: false,
    lactoseIntolerant: false,
    allergies: [],
    other: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: selectedOptions
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAllergyChange = (e) => {
    const value = e.target.value;
    
    if(!value){
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          allergies: []
        };
      });
      return;
    }

    setFormData((prevFormData) => {
      const newAllergies = prevFormData.allergies.includes(value)
        ? prevFormData.allergies.filter(allergy => allergy !== value)
        : [...prevFormData.allergies, value];
      return {
        ...prevFormData,
        allergies: newAllergies
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // submit
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Preferences</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          {[
            { name: 'diabetic', label: 'Diabetic' },
            { name: 'vegan', label: 'Vegan' },
            { name: 'vegetarian', label: 'Vegetarian' },
            { name: 'onDiet', label: 'On a Diet' },
            { name: 'glutenFree', label: 'Gluten Free' },
            { name: 'lactoseIntolerant', label: 'Lactose Intolerant' }
          ].map(({ name, label }) => (
            <div key={name} className="flex items-center">
              <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
                className="form-checkbox h-6 w-6 text-indigo-600"
              />
              <span className="ml-3 text-xl text-gray-700">{label}</span>
            </div>
          ))}
          <div>
            <label className="block text-xl text-gray-700">
              Allergies:
              <select
                name="allergies"
                multiple
                value={formData.allergies}
                onClick={handleAllergyChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {['peanuts', 'shellfish', 'milk', 'eggs', 'wheat', 'soy', 'treeNuts', 'fish'].map(allergy => (
                  <option className='rounded-sm border-b hover:bg-indigo-50' key={allergy} value={allergy}>{allergy.charAt(0).toUpperCase() + allergy.slice(1)}</option>
                ))}
              </select>
            </label>
            {formData.allergies.length > 0 && (
              <div className="mt-4 p-4 bg-indigo-50 rounded-md shadow-inner">
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">Selected Allergies:</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.allergies.map((allergy, index) => (
                    <span key={index} className="inline-block bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      {allergy.charAt(0).toUpperCase() + allergy.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div> 
            <label className="block text-xl text-gray-700">
              Other Preferences:
              <input
                type="text"
                name="other"
                value={formData.other}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter other preferences"
              />
            </label>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white text-xl rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Preferences;