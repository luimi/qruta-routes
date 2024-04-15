import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus} from '@fortawesome/free-solid-svg-icons';
import Progress from '../progress';

const EmptyState = () => {
  return (
    <div className="empty">
      <div className="items">
        <FontAwesomeIcon icon={faBus} />
        <Progress />
      </div>
    </div>
  );
};

export default EmptyState;
