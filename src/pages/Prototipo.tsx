import React from 'react';
import { PasswordProtection } from '@/components/PasswordProtection';
import PrototipoApp from '@/components/prototipo/PrototipoApp';

const Prototipo: React.FC = () => {
  return (
    <PasswordProtection storageKey="servicos_access">
      <PrototipoApp />
    </PasswordProtection>
  );
};

export default Prototipo;
