import classes from "./styles.module.css"

const Spinner = () => {
    return (
        <div className={classes.spinner_container}>
            <div className={classes.image}>
                <img src="../../../public/e12-01.png" alt="" />
            </div>
            <div className={classes.text}>
                <h3>Ən güvənilir mərcin ünvanı</h3>
            </div>
        </div>
    )
}

export default Spinner