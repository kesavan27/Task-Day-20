
import PricingCard from './PricingCard';
import styles from './Pricing.module.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      buttonText: 'BUTTON',
      features: [
        { name: 'Single User', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: false },
        { name: 'Dedicated Phone Support', included: false },
        { name: 'Free Subdomain', included: false },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      name: 'Plus',
      price: '$9',
      buttonText: 'BUTTON',
      features: [
        { name: '5 Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$49',
      buttonText: 'BUTTON',
      features: [
        { name: 'Unlimited Users', included: true },
        { name: '50GB Storage', included: true },
        { name: 'Unlimited Public Projects', included: true },
        { name: 'Community Access', included: true },
        { name: 'Unlimited Private Projects', included: true },
        { name: 'Dedicated Phone Support', included: true },
        { name: 'Free Subdomain', included: true },
        { name: 'Monthly Status Reports', included: true },
      ],
    },
  ];

  return (
    <div className={styles.pricingContainer}>
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default Pricing;
