import { features } from '../util/constant'
import { layout, styles } from '../util/style'
import Button from './button'
import FeatureCard from './feature-card';



const Busines = () => {
  return (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2}`}>
                Biznes rivojlantiring, <br className='sm:block hidden'/> pulni biz hal qilamiz.
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia inventore ullam reprehenderit odit eum vitae earum repudiandae voluptas alias.
            </p>
            <Button styles={'mt-10'}/>
        </div>
        <div className={`${layout.sectionImage} flex-col`}>
            {features.map((feature, idx ) => (
               <FeatureCard key={feature.id} {...feature} idx={idx}  /> 
            ))}
        </div>
    </section>
  );
};

export default Busines;