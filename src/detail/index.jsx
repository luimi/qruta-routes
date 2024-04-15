import './style.css';
import ActionBar from '../components/actionbar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from '../components/slider';
import Schedule from '../components/schedule';

const Detail = ({ route, onBack }) => {
  const title = `${route.get('name')}${
    route.get('details') ? ' - ' : ''
  }${route.get('details')}`;
  return (
    <div>
      <ActionBar icon={faArrowLeft} title={title} action={onBack} />
      <div className="detail-info">
        <p>
          <b>{title}</b>
        </p>
        <p>{route.get('info')}</p>
        <Slider route={route} />
        <Schedule route={route} />
      </div>
    </div>
  );
};

export default Detail;
