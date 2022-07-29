import { FeatureData } from "../../libs/whyChooseUs";
import FeatureCard from "../featureCard";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <h3 className={styles.title}>Why Choose Us?</h3>
      <div className={styles.featureCardContainer}>
        {FeatureData.map((data) => (
          <FeatureCard
            key={data.feature_id}
            icon={data.icon}
            desc={data.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
