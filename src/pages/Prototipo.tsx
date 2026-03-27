import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PasswordProtection } from '@/components/PasswordProtection';
import PrototipoApp from '@/components/prototipo/PrototipoApp';

const Prototipo: React.FC = () => {
  return (
    <PasswordProtection storageKey="servicos_access">
      <Helmet>
        <title>VICTA AI - Protótipo do Sistema</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://victaaisolutions.com/prototipo" />
      </Helmet>
      <PrototipoApp />
    </PasswordProtection>
  );
};

export default Prototipo;
