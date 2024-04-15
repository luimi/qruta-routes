import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faMap, faBuilding } from '@fortawesome/free-solid-svg-icons';
const Routes = ({ company, routes, onSelect }) => {
  const list = () => {
    if (!routes) return '';
    return routes.map((route, index) => {
      return (
        <div key={`route-${index}`}>
          <div className="route" onClick={() => onSelect(route)}>
            <div className="icon">
              <FontAwesomeIcon icon={faBus} />
              <span>{route.get('name')}</span>
            </div>
            <span className="detail">{route.get('details')}</span>
          </div>
          <hr />
        </div>
      );
    });
  };
  return (
    <div className="container">
      {company && company.get('logo') ? (
        <img src={company.get('logo')} className="logo" alt="logo"/>
      ) : (
        ''
      )}

      <div className="information">
        <div className="item">
          <FontAwesomeIcon icon={faMap} className="icon" />
          {company && company.get('city')
            ? company.get('city').get('name')
            : 'nada'}
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faBuilding} className="icon" />
          {company ? company.get('name') : ''}
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faBus} className="icon" />
          {routes ? routes.length : ''}
        </div>
      </div>
      <hr />
      <div>{list()}</div>
    </div>
  );
};

export default Routes;
