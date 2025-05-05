import { Proximity,useEffect } from 'react-native-proximity';

useEffect(() => {
  Proximity.isAvailable()
    .then((isAvailable) => {
      if (isAvailable) {
        const listener = Proximity.addListener((data) => {
          console.log('Proximity data:', data);
        });

        return () => listener.remove();
      } else {
        console.warn('❌ Proximity 센서를 사용할 수 없습니다.');
      }
    })
    .catch((error) => {
      console.error('Proximity 센서 확인 중 오류:', error);
    });
}, []);
