import { useMemo } from 'react';
import useAuth from '../../hooks/useAuth.js';
import useExpenses from '../../hooks/useExpenses.js';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';
import GroupForm from '../group/GroupForm.jsx';
import ExpenseForm from '../expense/ExpenseForm.jsx';
import ExpenseList from '../expense/ExpenseList.jsx';
import AIChatPanel from '../chat/AIChatPanel.jsx';

function currency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount || 0);
}

export default function DashboardPage() {
  const { logout } = useAuth();
  const { expenses, groups } = useExpenses();

  const totals = useMemo(() => {
    const totalSpend = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    return {
      groupCount: groups.length,
      expenseCount: expenses.length,
      totalSpend
    };
  }, [expenses, groups]);

  return (
    <main className="dashboard-layout">
      <header className="topbar">
        <div>
          <p className="eyebrow">Splitwise Workspace</p>
          <h1>Money clarity for your group life</h1>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </header>

      <section className="stats-grid">
        <Card title="Groups" subtitle="Active shared circles">
          <p className="metric">{totals.groupCount}</p>
        </Card>
        <Card title="Expenses" subtitle="Recorded transactions">
          <p className="metric">{totals.expenseCount}</p>
        </Card>
        <Card title="Total Spend" subtitle="Across all entries">
          <p className="metric">{currency(totals.totalSpend)}</p>
        </Card>
      </section>

      <section className="content-grid">
        <div className="left-column stack-lg">
          <GroupForm />
          <ExpenseForm />
          <ExpenseList />
        </div>
        <div className="right-column">
          <AIChatPanel />
        </div>
      </section>
    </main>
  );
}