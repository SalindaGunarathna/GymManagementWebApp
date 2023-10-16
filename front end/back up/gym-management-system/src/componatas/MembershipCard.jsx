import React from 'react';

const MembershipCard = () => {
  const plans = [
    {
      name: 'Beginner Plan',
      price: 20,
      description: 'Perfect for those new to fitness.',
      bgColor: 'bg-blue-200',
    },
    {
      name: 'Intermediate Plan',
      price: 30,
      description: 'For those looking to take it to the next level.',
      bgColor: 'bg-green-200',
    },
    {
      name: 'Unlimited Plan',
      price: 50,
      description: 'Access to all features and unlimited classes.',
      bgColor: 'bg-purple-200',
    },

  ];

  return (
    <div>
      <div className="text-4xl text-center font-bold my-4">
        Membership
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {plans.map((plan, index) => (
          <div key={index} className={`rounded-lg shadow-lg p-4 m-2 ${plan.bgColor}`}>
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <div className="text-4xl font-bold">${plan.price}<span className="text-sm"> per month</span></div>
            <p className="text-gray-600">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipCard;
