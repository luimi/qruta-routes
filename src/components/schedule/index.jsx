import './style.css';
const Schedule = ({ route }) => {
  const schedule = route.get('schedule') || {};
  return (
    <div className="schedule">
      <div className="item">Horarios</div>
      <div className="item">Horas</div>
      <div className="item">Frecuencia</div>
      <div className="item">Lunes a Viernes</div>
      <div className="item">
        {schedule.lvhi}
        {schedule.lvhu ? ' - ' : ''}
        {schedule.lvhu}
      </div>
      <div className="item">
        {schedule.lvfp}
        {schedule.lvfv && schedule.lvfp ? ' - ' : ''}
        {schedule.lvfv}
        {schedule.lvfv || schedule.lvfp ? ' min' : ''}
      </div>
      <div className="item">Sabados</div>
      <div className="item">
        {schedule.shi}
        {schedule.shu ? ' - ' : ''}
        {schedule.shu}
      </div>
      <div className="item">
        {schedule.sfp}
        {schedule.sfv && schedule.sfp ? ' - ' : ''}
        {schedule.sfv}
        {schedule.sfp || schedule.sfv ? ' min' : ''}
      </div>
      <div className="item">Domingos y festivos</div>
      <div className="item">
        {schedule.dfhi}
        {schedule.dfhu ? ' - ' : ''}
        {schedule.dfhu}
      </div>
      <div className="item">
        {schedule.dffp}
        {schedule.dffv && schedule.dffp ? ' - ' : ''}
        {schedule.dffv}
        {schedule.dffp || schedule.dffv ? ' min' : ''}
      </div>
    </div>
  );
};
export default Schedule;
