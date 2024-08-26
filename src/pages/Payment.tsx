import classes from './styles/style.module.css'
const Payment = () => {
    return (
        <div className={classes.payment_container}>
            <div className={classes.payment_text}>
                <h4>
                    Ödənişlərinizi bu kartlara edərək bizə whatsApp dan yazın və ödənişin çekini MÜTLƏQ şəkildə bizə göndərin. Oyunlar operatırlarımız vasitəsi ilə sizə yönləndiriləcək UĞURLAR
                </h4>
            </div>
            <div className={classes.payment_cards}>
                <div className={classes.card}>
                    <div className={classes.card_info}>
                        <h5>Leo Kart</h5>
                    </div>
                    <div className={classes.card_img}>
                        <img src="../../public/paymentCard/leo.png" alt="" />

                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_info}>
                        <h5>Atb Kart</h5>
                    </div>
                    <div className={classes.card_img}>
                        <img src="../../public/paymentCard/atb.png" alt="" />

                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.card_info}>
                        <h5>ABB Kart</h5>
                    </div>
                    <div className={classes.card_img}>
                        <img src="../../public/paymentCard/abb.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment