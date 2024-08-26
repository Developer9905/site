import classes from './styles.module.css';

const Card = ({ data, onClick }:any) => {
  const { img, img_text } = data;

  return (
    <div className={classes.card_container} onClick={onClick}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.text}>
        <img src={img_text} alt="" />
      </div>
    </div>
  );
};

export default Card;
