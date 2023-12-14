import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export const FetchData = (path) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, path);

    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        setData(Object.entries(snapshot.val()).map(([key, value]) => ({ key, value })));
      } else {
        console.log("No data available");
        setData([]);
      }
    };

    const unsubscribe = onValue(dataRef, handleDataChange);

    return () => {
      unsubscribe();
    };
  }, [path]);

  return data;
};
