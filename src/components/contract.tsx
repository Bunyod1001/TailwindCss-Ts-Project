import { card } from "../assets"
import { layout, styles } from "../util/style"
import Button from "./button"

const Contract = () => {
  return (
    <section id="products" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Bir necha oson qadamda <br className="sm:block hidden"/> kontrakt tuzish
        </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5 `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iusto quia facilis odio nesciunt dolorum at molestiae distinctio fugiat voluptatibus.
      </p>
      <Button styles={'mt-10' }/>
      </div>
      <div className={layout.sectionImage}>
        <img src={card} alt="card"  className="w-[100%] w-[550px] h-[100%] h-[550px] rounded-[380px]"/>
      </div>
    </section>
  )
}

export default Contract