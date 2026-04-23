import { useState } from 'react';
import { askAI } from '../../services/ai.service.js';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';

export default function AIChatPanel() {
  const [prompt, setPrompt] = useState('Suggest one way to reduce group expenses this week.');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await askAI(prompt);
      setAnswer(data.reply || data.message || JSON.stringify(data));
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'AI request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="AI Assistant"
      subtitle="Ask for spending ideas or settlement tips"
      className="sticky"
    >
      <form className="stack" onSubmit={onSubmit}>
        <label className="input-block" htmlFor="ai-prompt">
          <span className="input-label">Prompt</span>
          <textarea
            id="ai-prompt"
            className="input"
            rows={4}
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </label>
        <Button type="submit" disabled={loading || !prompt.trim()}>
          {loading ? 'Thinking...' : 'Ask AI'}
        </Button>
      </form>

      {error && <p className="banner error">{error}</p>}
      {answer && (
        <div className="ai-response">
          <p>{answer}</p>
        </div>
      )}
    </Card>
  );
}