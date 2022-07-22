import AddActivityForm from '../components/AddActivityForm/AddActivityForm';
import useActivities from '../hooks/useActivities';

export default function AddActivityPage() {
  const {setActivityHandler} = useActivities();
  return <AddActivityForm onSetActivities={value => setActivityHandler(value)} />;
}
