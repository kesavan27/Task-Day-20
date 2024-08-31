
import styles from './PricingCard.module.css';

const PricingCard = ({ plan = {} }) => {
    console.log(plan);
    const features = plan.features || [];
    const buttonText = plan.buttonText || 'BUTTON';
  return (
    <div className={styles.pricingCard}>
      <h3 className={styles.planName}>{plan.name}</h3>
      <h4 className={styles.planPrice}>{plan.price}/month</h4>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li
            key={index}
            className={
              feature.included ? styles.included : styles.notIncluded
            }
          >
            {feature.name}
          </li>
        ))}
      </ul>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default PricingCard;
