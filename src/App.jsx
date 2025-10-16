import { useEffect, useState } from 'react';
import Map from './map';
import Routes from './routes';
import Parse from 'parse';

import './style.css';
import Detail from './detail';
import EmptyState from './components/emptystate';
import { qruta } from './assets';
import { gaEvent } from './utils';
//Docuentacion
//leaflet
//https://react-leaflet.js.org/docs/core-architecture/
export const App = () => {
  const [company, setCompany] = useState();
  const [routes, setRoutes] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if(params.size === 0) {
      window.open('https://www.queruta.com/routes', "_self")
      return;
    }
    if (!company) {
      let companyId = params.get('company');
      if (!companyId) {
        //TODO mostrar error
        return;
      }
      getCompany(companyId);
    } else if (!routes) {
      getRoutes();
    }
  }, [company]);

  const getCompany = async (id) => {
    let result = await new Parse.Query('Company').include('city').get(id);
    setCompany(result);
  };
  const getRoutes = async () => {
    let result = await new Parse.Query('Route')
      .equalTo('company', company)
      .equalTo('status', true)
      .ascending('name')
      .select('name', 'details')
      .find();
    setRoutes(result);
  };
  const onSelect = async (route) => {
    await route.fetch();
    setSelected(route);
  };
  const onBack = () => {
    setSelected(undefined);
  };
  //?company=un1JWT3mPl
  //?company=yZYZbPJGbq
  const viewEmpty = () => {
    if (company) return '';
    return <EmptyState />;
  };
  const viewContent = () => {
    if (!company) return '';
    else
      return (
        <div className="content">
          <div className="info">
            {selected ? (
              <Detail route={selected} onBack={onBack} />
            ) : (
              <Routes company={company} routes={routes} onSelect={onSelect} />
            )}
            <div id="qruta">
              <a href="https://queruta.com" target="_blank" rel="noreferrer">
                <img src={qruta} alt="qruta"/>
              </a>
            </div>
          </div>
          <div className="map">
            {company ? <Map city={company.get('city')} route={selected} /> : ''}
          </div>
        </div>
      );
  };
  return (
    <>
      {viewEmpty()}
      {viewContent()}
    </>
  );
};
