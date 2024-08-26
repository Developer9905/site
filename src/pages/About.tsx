import AnimationLayout from "../components/layout/AnimationLayout"
import classes from "./styles/style.module.css"

const About = () => {
    return (
        <AnimationLayout>
            <div className={classes.about_container}>
                <div className={classes.about_img}>
                    <img src="../../public/e12-01.png" alt="about_img" />
                </div>
                <div className={classes.about_text}>
                    <p>
                        7 ildir xidmətinizdə olan Black Casino hər zaman sizləri sevindirib. Ən başlıca özəlliyimiz verilən vəədləri boşa deyildə anında yerinə yetirməkdir. Buyurun sizdə şansınızı sınayın bəlkədə həmən o şanslı gününüzdəsiniz😉
                    </p>
                </div>
            </div>


            <div className={classes.overlay}></div>

        </AnimationLayout>
    )
}

export default About