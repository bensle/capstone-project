import Section from './ActivityCardStyle';

export default function ActivityCard(props) {
  return (
    <Section>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      <ul role="list">
        {props.duration === 'short' ? (
          <li>Day trip</li>
        ) : props.duration === 'weekend' ? (
          <li>Weekend Trip</li>
        ) : (
          <li>3 days +</li>
        )}
        <li>{props.type}</li>
      </ul>
      <a href={props.infos}>Find out more</a>
    </Section>
  );
}
