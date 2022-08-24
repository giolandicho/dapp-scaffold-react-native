import React from 'react';
import {Button, Text} from 'react-native';
import {useAccounts} from '../providers';
import {Section} from './Section';
//import Torus, {TORUS_BUILD_ENV} from "@toruslabs/solana-embed";

export const AccountSelect = () => {
  const {accounts, selectedAccount, selectAccount, createAccount, deleteAccount} =
    useAccounts();
 // const torus = new Torus;
 // const [build, setBuild] = React.useState(TORUS_BUILD_ENV.TESTING)
 // const [publicKey, setPublicKey] = React.useState('')
 // React.useEffect(() => {
 //   torus.init({
 //       buildEnv: build,
 //       enableLogging: true,
 //       showTorusButton: true,
 //       network: "devnet",
 //   })
 // }, []);

 // const torusButton = async() => {
 //   const publicKeys = await torus.login();
 //   setPublicKey(publicKeys[0]);
 //   console.log(publicKey);
 // }

  return (
    <Section title={`Account: ${selectedAccount?.name || 'None'}`}>
      {accounts?.map(item => (
        <Button
          disabled={item === selectedAccount}
          key={item.id}
          title={item.name}
          onPress={() => selectAccount(item)}
        />
      ))}
      
      <Button title="Create Account" onPress={createAccount} />
      {selectedAccount && <Button title="Delete Account" onPress={() =>deleteAccount(selectedAccount)} />}
    </Section>
  );
};
