import { useState } from 'react';
import useExpenses from '../../hooks/useExpenses.js';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';
import Input from '../ui/Input.jsx';

export default function GroupForm() {
  const { createGroup, loading, error, clearError } = useExpenses();
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess('');
    clearError();
    try {
      await createGroup({ name });
      setSuccess('Group created.');
      setName('');
    } catch (_error) {
      // Error managed in store.
    }
  };

  return (
    <Card title="Create Group" subtitle="Start splitting with your crew">
      <form className="stack" onSubmit={handleSubmit}>
        <Input
          id="group-name"
          label="Group Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Flatmates April"
          required
        />
        {error && <p className="banner error">{error}</p>}
        {success && <p className="banner success">{success}</p>}
        <Button type="submit" disabled={loading || !name.trim()}>
          {loading ? 'Creating...' : 'Create Group'}
        </Button>
      </form>
    </Card>
  );
}