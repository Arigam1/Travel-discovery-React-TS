import s from './App.module.scss'

const PlaceItem = ({place}) => {
    return ( 
        <div className={s.item}>
          <img src={place.image} alt={place.name} />
          <div className={s.heading}>{place.name}</div>
          <div className={s.country}>{place.country}</div>
        </div>
     );
}
 
export default PlaceItem;