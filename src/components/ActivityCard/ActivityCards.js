// import CardWrapper from './ActivityCardStyle';
import ActivityCard from './ActivityCard';

export default function ActivityCards({activities}) {
  return (
    <>
      {activities.map(({id, name, location, duration, type, infos}) => (
        <ActivityCard key={id} name={name} location={location} duration={duration} type={type} infos={infos} />
      ))}
    </>
  );
}
