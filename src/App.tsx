import { useState }             from 'react';
import { Dashboard }            from './components/Dashboard';
import { Header }               from './components/Header';
import { NewTransactionModal }  from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import Modal                    from 'react-modal';

import { GlobalStyle }          from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </div>
  );
}