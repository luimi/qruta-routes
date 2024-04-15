import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionBar = ({ icon, title, action }) => {
  const getIcon = () => {
    if (!icon) return '';
    else
      return <FontAwesomeIcon icon={icon} className="icon" onClick={action} />;
  };
  return (
    <div className="actionbar">
      <div className="title">
        {getIcon()}
        {title}
      </div>
    </div>
  );
};

export default ActionBar;
